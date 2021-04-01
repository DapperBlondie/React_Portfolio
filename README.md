# React_Portfolio
A React Application for my portfolio.

First of all use   npx create-react-app {your_project_folder_name}

after your app was created use  npm install gh-pages --save-dev for using this module for deploy your app in github.

then add a property in your packagfe.json :

                                      “homepage”: “http://sabesansathananthan.github.io/React-Deploy" define this property in package.json
                                      
add predeploy & deploy properties in scripts section in your package.json:

                                      "predeploy": "npm run build",
                                      "deploy": "gh-pages -d build",

go to your settings tab of your react project & change it to the gh-pages.

also you can use custom domain for your github pages.
