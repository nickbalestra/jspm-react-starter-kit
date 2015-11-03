JSPM - REACT starter kit
===========================

Use this repo to kickstart your react development using JSPM, a package manager for the SystemJS universal module loader.

Why JSPM in a nutshell:

- Write code and run it without a building step.
- Babel comes with JSPM.
- Easily installs React component.
- ES6 modules support other extensions other then .js (.jsx)

## Structure:

- app/
  - index.js
- public/
  - config.js
  - index.html
- package.json

## Install:

Make sure you have jspm installed globably:

`$ npm i -g jspm`

Install npm dependencies:

`$ npm i`

Install jspm dependencies:

'$ jspm i'

You are now ready to go! Serve your index.html app via a server and you will see your hellow world react component rendered!

### Prototype JSPM development server

You can use the jspm-server as a development server for JSPM static sites. It's based on @tapio's excellent live-server:

Install jspm-server globally:

`$ npm i -g jspm-server`

Run the server from the project root

`$ jspm-server`

[Read the relative blog post](http://nick.balestra.ch/2015/up-and-running-with-jspm-for-react/) for more information

Looking for using webpack? Check the [Webpack React starter Kit](https://github.com/nickbalestra/webpack-react-starterKit)
