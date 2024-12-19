# Next.js 15 App Router: Handling API Errors in getServerSideProps

This repository demonstrates a common issue and its solution when working with `getServerSideProps` in Next.js 15's App Router.  The problem occurs when fetching data from an external API within an asynchronous function. If the API call fails, it can lead to a cryptic 500 error.

## Problem
The provided `bug.js` showcases a scenario where an API call might fail, resulting in an unhandled error and a 500 server response.  The error isn't readily apparent in the logs, making debugging difficult.

## Solution
The `bugSolution.js` file provides a corrected version.  It uses a `try...catch` block to handle potential errors during the API fetch, providing better error handling and more informative logging.