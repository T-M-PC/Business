# JavaScript Login System - Term by Term Explanation

## Keywords & Concepts

const
- Declares a constant variable that cannot be reassigned
- Used for values that won't change during execution

loginForm
- An object containing all login-related functionality
- Acts as a container for methods and properties

init()
- Initialization method
- Runs when the system starts up
- Sets up initial configurations

this
- References the current object
- Used to access object properties and methods within itself

document
- Represents the webpage
- Provides access to HTML elements

getElementById()
- Method to find HTML elements using their ID attribute
- Returns a single element

addEventListener()
- Attaches an event handler to elements
- Listens for specific actions (like clicks or form submissions)

bind()
- Creates a new function with a fixed 'this' value
- Ensures correct context in event handlers

event.preventDefault()
- Stops form from submitting traditionally
- Allows custom handling of form submission

async/await
- async: Declares an asynchronous function
- await: Pauses execution until a promise resolves

fetch()
- Makes HTTP requests to servers
- Used for sending/receiving data

try/catch
- try: Attempts to run code that might fail
- catch: Handles any errors that occur

localStorage
- Browser's built-in storage system
- Persists data across page refreshes

JSON.stringify()
- Converts JavaScript objects to JSON string
- Used when sending data to server

window.location
- Controls browser navigation
- Used for redirecting users

DOMContentLoaded
- Event that fires when HTML is fully loaded
- Perfect time to initialize JavaScript functionality
