/*
Name: JavaScript Object Activity
Course Code: SODV1201
Class: Software Development Diploma program.
Author: Willian Pereira Munhoz
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/* Question 1:

Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. 

Sample Object: */

let student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 }; 

function displayStatus(student) {
    console.log('Name: ' + student.name + '. sclass: ' + student.sclass + '. rollno: ' +  student.rollno);
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/* Question 2:

Write a JavaScript program to display the reading status 
(i.e. display book name, author name and reading status) of the following books.

Sample Object: */
let library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
   /* var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }]; */



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

library.forEach(book => {
    console.log('Author: ' + book.author);
    console.log('Title: ' + book.title);
    console.log('Reading Status: ' + book.readingStatus);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 

Question 3:

Write a constructor function to store the name and age of a person, then greet the person

Test Data:
console.log(person1.name);  // John
console.log(person2.name);  // John

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function personInfo(name, age) {
    this.name = name;
    this.age = age;
    console.log('Hello, ' + name +', ' + age +'!');
}

let firstPerson = new personInfo('John', 21);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

Reference:
W3C Resources. (2015, December 22). JavaScript Objcet - Exercises, Practice, Solution. 
Retrieved from W3C Resources: https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php

*/
