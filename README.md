# Express JS Basics

## Note

    > Earlier versions of Express used to have a lot of middleware bundled with it. bodyParser was one of the middleware that came with it.
    When Express 4.0 was released they decided to remove the bundled middleware from Express and make them separate packages instead.
    The syntax then changed from app.use(express.json()) to app.use(bodyParser.json()) after installing the bodyParser module.
    bodyParser was added back to Express in release 4.16.0, because people wanted it bundled with Express like before.
    That means you don't have to use bodyParser.json() anymore if you are on the latest release. You can use express.json() instead.
    The release history for 4.16.0 is here for those who are interested, and the pull request is here.

## Project Setup

- installed express js npm package using npm install express command
- run node index.js to start server
- installed nodemon using npm i nodemon command
- run npx nodemon index.js command to start server using nodemon
- installed body-parser using npm i body-parser to parser request body
