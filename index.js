// Write a JavaScript function that takes an array of strings and returns a new array with the length of each string.
 function returnLength(arrayOfStrings){
   return arrayOfStrings.map(string => string.length)
        
    ;
 }

console.log(returnLength(["apple","mango","lemon"]))



// Given an array of numbers, write a function that filters out and returns only the even numbers.
 function filterNumbers(arrayOfNumbers){
   return arrayOfNumbers.filter((number,index) => number%2===0 )
 }
console.log(filterNumbers([12,33,45,68,90,89]));

// Create a function that takes an array of student objects with name and score properties and returns a new array containing only the names of students who scored above 75.
function checkScore(arrayOfStudents){
    return arrayOfStudents.filter((student,index) => student.score > 75 )
}
console.log(checkScore([{student:"Daniella", score:90}, {student:"Ifrax", score:78}, {student:"Siraj", score:45}]))

// Write a function that accepts an array of numbers and returns a new array with each number squared using the map() method.
    function squaredNumbers(arrayOfnumbers){
     return   arrayOfnumbers.map(number => number*number)
    }
    console.log(squaredNumbers([23,43,2,9,80,99]));
// Write a JavaScript function that takes an array of mixed data types and returns a new array containing only the string elements, all converted to uppercase.
    function convertToUpper(arrayOfMixedData){
       const arrayFiltered = arrayOfMixedData.filter((item,index)=> typeof (item) === 'string' )
       return arrayFiltered.map(element => element.toUpperCase())
    }
    console.log(convertToUpper([true, 10, false, "geremy", 20.22,"hellen"]))