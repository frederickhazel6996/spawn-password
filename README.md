# spawn-password

spawn-random is a very reliable library for generating passwords

![](https://img.shields.io/npm/v/spawn-password) ![](https://img.shields.io/npm/l/spawn-password)

## Installation

    $ npm install spawn-password --save

## Usage

### `spawn()`

This creates a random password that consists of alphabets,numbers and symbols with a random length

```javascript
const spawn = require("spawn-password");

let spawned_password = spawn();

console.log(spawned_password);
```

### `spawnLength(length)`

This cretaes a random passowrd that consists of alphabets,numbers and symbols with a specified length

```javascript
const spawn = require("spawn-password");

let spawned_password = spawnLength(15);

// snF78sl03P>ha$o
console.log(spawned_password);
```

### `spawnAlpha()`

This creates a random length password that consists of only alphabets

```javascript
const spawn = require("spawn-password");

let spawned_password = spawnAlpha();

// mskAnsTiPsjU
console.log(spawned_password);
```

### `spawnAlphaLength(length)`

This creates a random password of specified length that consists of only alphabets

```javascript
const spawn = require("spawn-password");

let spawned_password = spawnAlphaLength(15);

// slfjhetAnEmLsta
console.log(spawned_password);
```

### `spawnAlphaNumeric()`

This creates a random password that consists of alphabets and Numbers

```javascript
const spawn = require("spawn-password");

let spawned_password = spawnAlphaNumeric();

// 6J8snms09I7T
console.log(spawned_password);
```

### `spawnAlphaNumericLength(length)`

This creates a random password of specified length that consists of alphabets and Numbers

```javascript
const spawn = require("spawn-password");

let spawned_password = spawnAlphaNumericLength(10);

// 92nH03Lp5
console.log(spawned_password);
```

### `spawnAlphaSymbol()`

This creates a random password that consists of alphabets and Symbols

```javascript
const spawn = require("spawn-password");

let spawned_password = spawnAlphaSymbol();

// H*mn$nsU&
console.log(spawned_password);
```

### `spawnAlphaSymmbolLength(length)`

This creates a random password of specified length that consists of Alphabets and Symbols

```javascript
const spawn = require("spawn-password");

let spawned_password = spawnAlphaSymbolLength(10);

// p*o^GHb$#m
console.log(spawned_password);
```
