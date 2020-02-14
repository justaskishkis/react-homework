# Justas Kiskis React Homework

## Instalation & Usage
* Install latest create-react-app globally
* Install latest NODE.js
* Open terminal. Navigate to project-root/mock/ folder
* Run "npm install"
* Run "npm start", this will start mock backend server
* Open second terminal, go to project root folder
* Run "npm install"
* Run "npm run build-css"
* To run development server with live reload, run "npm start" and open localhost:3000
* For more available commands, see "scripts" package.json

## Code rules
* JS file structure
* Redux structure
* JS coding rules
* Styles file structure
* Styles naming rules

### JS file structure
* ui-components contain no business logic('aka' stupid) ui components
* lib contains features that can be reused over all company projects
* app is based on "route | feature" structure
* each folder has:  
-components/(optional for any)
-container/(optional for feature) (required for route)   
-routing/(optional for any)  
-state/(optional for any)   
-features/(optional for any)  
-services/(optional for any)  
** each state folder uses see: "Redux structure"

### Redux structure
* foo.actions  
* foo.models(optional) 
* foo.constants(optional)  
* foo.sagas(optional)  
* foo.reducer

### JS coding rules
* Rules are defined in tslint.json

### Styles file structure
* /stylus-mixin-library location of mixins
* /grid
* /css-reset: edited and tweaked https://cssreset.com/scripts/eric-meyer-reset-css/
* /theme: is our project variable zone
* /vendor: is a place to override something from 3rd party library's

### Styles naming rules
* Rules are based on BEM methodology http://getbem.com/introduction/
* Variable naming convention:  
"bdrsInputPrimary"  
this example shows how it is structured:  
1) "bdrs" - is based on emmet shortcut for a parameter we want to effect  
2) "Input" - is based on what element we want to effect  
3) "Primary" - is custom name we create, but with a goal to be as clear as possible

### Retro
* Please keep in mind that it is my FIRST react project.
* Also as create-react-app does not support most efficient(imho) css preprocessor, so for this stage i made styles global, as implementing webpack would take much longer as using create-react-app

### Road map
* With next homework tasks i will implement storybook, unit tests, end to end tests
