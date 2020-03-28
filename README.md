# Under Development

# Glitch Info for [Glitch](https://glitch.com)

A simple package that returns info on Glitch profile, teams and collections in JSON format.

This is my first NPM package, so you'll have to bear with me if there are any errors or loopholes!

*Warning: this package uses unstable API that hasn't been officially released yet.*

## Installation

```
npm install glitch-info
```

## Usage

### User Profile Info

```
// get users
glitch.user("khalby786").then((user) => {
  console.log(user);
}).catch((err) => {
  console.error(err);
});
```

### Glitch Team Info
```
// get team info
glitch.team("donutsquad").then((team) => {
  console.log(team);
}).catch((err) => {
  console.error(err);
});
```

### Glitch Collection Info
```
// get collection detail
glitch.collection("username", "collection-name").then((user, collection) => {
  console.log(collection);
}).catch((err) => {
  console.error(err);
});
```