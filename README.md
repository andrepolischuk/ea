# ea [![Build Status](https://travis-ci.org/andrepolischuk/ea.svg?branch=master)](https://travis-ci.org/andrepolischuk/ea)

  > Arrays, objects and strings iterator

## Instalation

```sh
$ npm install --save ea
```

```sh
$ component install andrepolischuk/ea
```

## API

### ea(array, fn)

  Iterate array

```js
ea([10, 11, 12], function(value, index) {

});
```

### ea(object, fn)

  Iterate object

```js
ea(user, function(value, key) {

});
```

### ea(string, fn)

  Iterate string

```js
ea('hello', function(value, key) {

});
```

### ea.reverse(array, fn)

  Iterate array in reverse order

### ea.reverse(object, fn)

  Iterate object in reverse order

### ea.reverse(string, fn)

  Iterate string in reverse order

## License

  MIT
