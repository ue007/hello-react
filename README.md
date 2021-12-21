# hello-react

Empty project.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Open the file `dist/index.html` in your browser

## Credits

Made with [createapp.dev](https://createapp.dev/)

## How to create your project yourself
1. Create an NPM project and install dependencies
```sh
	mkdir hello-react
	
	cd hello-react
	
	npm init -y
	
	npm install --save-dev webpack webpack-cli typescript ts-loader @hot-loader/
	react-dom babel-loader @babel/core @babel/preset-env @hot-loader/react-dom 
	prettier @types/react @types/react-dom @babel/preset-react 
	webpack-dev-server css-loader less-loader less style-loader url-loader
	
	npm install react react-dom react-hot-loader
   ```
2. Create webpack.config.js in the root and copy the contents of the generated file
3. Create .babelrc in the root and copy the contents of the generated file
4. Create folders src and dist and create source code files

