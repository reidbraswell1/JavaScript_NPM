# 🚀 Welcome to your new awesome project!
# Npm, Yarn & Webpack Exercise

In this assignment `npm` and `webpack` will be used. `Npm` will be used to create a `package.json` file for installing dependencies and configurations needed by the project. `Webpack` willd be used to package the project into a distributable zip file.

The goal of the assignment is to demonstrate the use of `dayjs` and `ejs` in a simple server side application.


**<span style="text-decoration: underline">Operation:</span>**

1. Present the user with a form to fill out the date and time.
1. The server will return a response to the user once the form is submitted with a date and time formatted by `dayjs`.
1. If the user attempts to request a url from the server that is not found an invalid url response page will be sent from the server.

All pages wll be using `ejs` (Embeddd Java Script) as a template engine. This will allow dynamic content to be displayed.

**<span style="text-decoration: underline">Running and Creating the Distributable:</span>**

1. Run `npm install` after cloning the project.
1. Run `npm run build` to create a ditributable.
1. Copy the ziped distributable file and unzip into a new directory of your choice. For example: `unzip dist.zip -d MyApp`
1. Switch to the newly created directory and run `npm install` to install all of the dependencies for the project.
1. Start the server with `npm start`
1. The server runs on port 3000 and responds to `http://localhost:3000/index`

