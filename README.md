# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: neglecting to properly handle errors within asynchronous route handlers.  Failure to address this can lead to application instability and unexpected behavior.

The `bug.js` file shows an Express.js route that performs an asynchronous operation.  If the operation fails, the error is logged to the console, but not handled gracefully, resulting in an unhandled promise rejection.

The `bugSolution.js` file provides a corrected version with robust error handling, ensuring a more stable and predictable application.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` to see the unhandled promise rejection.
5. Run `node bugSolution.js` to see the improved error handling.