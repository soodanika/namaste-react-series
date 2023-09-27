# MICROSERVICE 
    It is an architectural style in which the application is a collection of bundle of small and independent deployable services, Each service represents a specialized function and communicates with other services over a network using protocols like https etc.

# MONOLITH
    It is an architectural style where the whole application is developed as a single unified codebase.

# MONOLITH vs MICROSERVICE
    MONOLITH -single codebase, tightly coupled, long deployment cycles.
    MICROSERVICES - independent codebases, loosely coupled, faster deployment cycles.

# useEffect Hook 
    It is used to perform side effects in function components such as fetching data, DOM manipulation etc.

# Optional Chaining 
    It is a feature in JS that provides a easy way to access properties on objects when the object might be null or undefined. It helps in such a way that it doesnt throw an error but returns undefined.

# Shimmer UI 
    It resembles the pages actual UI until the data is loaded.

# JS Expression vs JS Statement
     An expression is a piece of code that produces a value.
     A statement is a line of code that performs an action.

# Conditional Rendering 
    It is rendering a component based on some condition.
    eg- {isLoggedin?console.log("Welcome"):console.log("Bye")}

# CORS 
    CORS stands for cross origin resource sharing.
    We can access anything in the same domain but when we have to access anything from a different domain then we might get a CORS error.
    First before sending the actual request a PREFLIGHT request is sent along with the origin and method, once the prefilight is successful the actual request is sent.

# async and await 
    Async - it is used to define a function as asynchronous. An asynchronous finction returns a promise that will either resolve to a value or reject with an error.
    Await - It is used inside async function to pause the execution of that function until the promise is resolved.

# const json = await data.json();
    await is used to wait till the promise is resolved and .json() is used to extract and parse the data as json data.