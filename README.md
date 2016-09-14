# nodejs-express-es6-boilerplate
Sample boilerplate project for node.js and express using ES6 and Babel.

### Packages/Middleware
```
"dependencies": {
  "body-parser": "^1.15.2",
  "cookie-parser": "^1.4.3",
  "cors": "^2.8.1",
  "express": "^4.14.0",
  "moment": "^2.15.0",
  "morgan": "^1.7.0",
  "winston": "^2.2.0"
},
"devDependencies": {
  "babel-cli": "^6.14.0",
  "babel-core": "^6.14.0",
  "babel-eslint": "^6.1.2",
  "babel-preset-babili": "0.0.2",
  "babel-preset-es2015": "^6.14.0",
  "eslint": "^3.5.0",
  "gulp": "^3.9.1",
  "gulp-babel": "^6.1.2"
}
```

### Features
  - Based on node's popular framework EXPRESS
  - Having Access log for REST API Access logging using morgan
  - Error logging using Winston
  - Route based API layout
  - CORS ready for localhost development
  - Linting equipped
  - Equipped with Gulp

### Routes
```
  -> index
  -> users
```

### How to Run
  ```
  > npm install
  > npm run build
  > npm run start
  > npm run lint

  --Direct babel commands
  > npm install babel-cli -g
  > babel ./src //This will transpile all es6 files to js

  --Direct Gulp commands
  > npm install gulp-cli -g
  > gulp build //This will transpile all es6 files to js
  > gulp  //This will start watch on .src folder
  ```

### Dockerizing this app is coming soon!

##### Repository
```
https://github.com/bapatel1/nodejs-express-es6-boilerplate
```
