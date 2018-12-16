# NgElement

### Background
Cloned from https://grokonez.com/frontend/angular/angular-6-elements-use-angular-elements-example-to-build-custom-elements-example.

The fix for the issue from upgrading to Angular 7 is here: https://github.com/angular/angular/issues/24556
- by changing the "target":"es5" in the tsconfig.json to "target":"es2015".

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

### Export Component To An Element

1. npm install fs-extra concat
2. create elements-build.js file

>     const fs = require('fs-extra');
>     const concat = require('concat');
>      
>     (async function build() {
>         const files = [
>             './dist/AngularElement/runtime.js',
>             './dist/AngularElement/polyfills.js',
>             './dist/AngularElement/scripts.js',
>             './dist/AngularElement/main.js',
>         ]
>      
>         await fs.ensureDir('elements');
>      
>         await concat(files, 'elements/jsa-counter.js');
>      
>         await fs.copyFile('./dist/AngularElement/styles.css', 'elements/styles.css');
>      
>     })()

3. In package.json, add a build command to NPM scripts: 
    > "build:elements": "ng build --prod --output-hashing none && node elements-build.js"
4. npm run build:elements
5. With jsa-counter.js file, we can use jsa-counter element in any HTML page, see anyhtml.html (explore it in http-server dir).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
