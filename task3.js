/**
 * 3. Checking Array Membership with ‘includes’
Instructions:
    Create an array of books containing different book.
    Use the includes method to check if the array contains a javascript book.
    Print a message to the console indicating whether the element is present in the array or not.
 */

let books = ["The Great Gatsby", "To Kill a Mockingbird", "JavaScript: The Good Parts", "1984", "Pride and Prejudice"];

// Use the includes method to check if the array contains a JavaScript book
if (books.includes("JavaScript: The Good Parts")) {
    console.log("The array contains a JavaScript book.");
} else {
    console.log("The array does not contain a JavaScript book.");
}
