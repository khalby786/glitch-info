# Under Development

# Glitch Info for [Glitch](https://glitch.com)

A simple package that returns info on Glitch profile, teams and collections in JSON format.

## Installation

```
npm install glitch-info
```

## Demo Usage

```
const glitch = require('glitch-info');

// get users
glitch.user("khalby786").then((user) => {
  console.log(user);
}).catch((err) => {
  console.error(err);
});
```