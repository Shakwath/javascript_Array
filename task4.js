/**
 * 4. Checking if it's an Array
Instructions:
    Create different variables, each containing either an array or a non-array value.
    Now use isArray to check if each variable is an array.
    Print a message to the console indicating whether each variable is an array or not.
 */

        let fruits = ["apple", "pepe","lichi", "orange"];  // Array
        let city = "New York";                       // String
        let numbers = [1, 2, 3, 4, 5];               // Array
        let age = 25;                                // Number
        let isStudent = true;                        // Boolean
  

    //sobgular jnno if else use.
        if (Array.isArray(fruits)) {
            console.log("fruits is an array.");
        } else {
            console.log("fruits is not an array.");
        }

        if (Array.isArray(city)) {
            console.log("city is an array.");
        } else {
            console.log("city is not an array.");
        }

        if (Array.isArray(numbers)) {
            console.log("numbers is an array.");
        } else {
            console.log("numbers is not an array.");
        }

        if (Array.isArray(age)) {
            console.log("age is an array.");
        } else {
            console.log("age is not an array.");
        }

        if (Array.isArray(isStudent)) {
            console.log("isStudent is an array.");
        } else {
            console.log("isStudent is not an array.");
        }
        
