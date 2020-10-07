## Database intro (sending requests)

# First steps

<br>

#### installation | dependencies etc

<p>Express intro Recap with Robert</p>

### 1)

<p>Install Nodemon too but unless you already have it ignore this/p>

```javascript


npm init

npm i express

npm i -g  nodemon


```

<br>

### 2 Warning!! never upload the data into the github without adding before the .gitignore, as you will be exposing the node_modules/

<br>

### 3 add the scripts

```javascript

"scripts": {
  // later you will replace this, so that you don't   update it all the time.
  "dev": "node server.js",
  //
  //
  "test": "echo \"Error: no test specified\" && exit 1"
},

```

## At this point if you check the server with this, but its not going to work:

<!-- try command + strg plus v , it will open another tab in vs that will help you visualize the readme  -->

```javascript
/* this goes inside the server.js file but its
just an example of what not to do,as you
require info DIFFERENTLY here*/

import express from "express";

//  this goes in the terminal, and there
// you will check the result
node server.js

```

## 4 To make it work you have to replace the above for the following:

```javascript
const express = require("express");
```

## 5 Now type npm start to test it, dont forget that the scripts should look like this:

```javascript
  "scripts": {
    "dev": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.4"
  }
}
```

## To install nodemon you can either type npm i nodemon or copy the dependencies from the other intro server express and paste it here, then type npm i , to install them all!! :bat:

### Type the following to init the server:

```javascript
const express = require("express");
const app = express();

const port = 5000;

// (()=> {})  callback function
app.listen(() => {
  console.log(`Started server on port ${port}`);
});
```

#### result

```javascript
express-intro-robert_1
> node server.js

Started server on port 5000
```
