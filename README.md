# README

"urilib" 是 python 里面一个比较好用的 URL 处理库。基于项目的需要，将 URL 处理部分独立剥离出来得到此库。

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
