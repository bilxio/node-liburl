# README

"urllib" is a very good lib to deal with things about URL. I wrote this lib just like urllib's style.

More detail information please see https://docs.python.org/2/library/urllib.html

## examples

### `urilib2.quote(string, safe)`

```js
var liburl = require('liburl');

liburl.quote('/!connolly/'); // /%21connolly/
```

### `urilib2.quote_plus(string, safe)`

```js
var liburl = require('liburl');

liburl.quote_plus('/!connolly go/'); // %2F%21connolly+go%2F
```

### `urilib2.unquote(string)`

```js
var liburl = require('liburl');

liburl.unquote('/%21connolly/'); // /!connolly/
```

### `urilib2.unquote_plus(string)`

```js
var liburl = require('liburl');

liburl.quote_plus('%2F%21connolly+go%2F'); // /!connolly go/
```
