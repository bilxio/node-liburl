'use strict';

var characters = [
  ['%', /%/g, '%25'],
  [' ', / /g, '%20'],
  ['!', /\!/g, '%21'],
  ['#', /\#/g, '%23'],
  ['$', /\$/g, '%24'],
  ['+', /\+/g, '%2B'],
  ['@', /@/g, '%40'],
  [':', /:/g, '%3A'],
  ['=', /=/g, '%3D'],
  ['&', /&/g, '%26'],
  ['?', /\?/g, '%3F'],
  [',', /,/g, '%2C'],
  ['\\', /\\/g, '%5C'],
  ['/', /\//g, '%2F'],
  ['\n', /\n/g, '%0A'],
  ['\t', /\t/g, '%09'],
  ['"', /"/g, '%22']
];

/**
 * Replace special characters in string using the %xx escape.
 * Letters, digits, and the characters '_.-' are never quoted.
 * By default, this function is intended for quoting the path
 * section of the URL.
 * The optional safe parameter specifies additional characters
 * that should not be quoted — its default value is '/'.
 *
 * 关于 quote, see
 *  http://www.zhihu.com/question/26610759
 *  https://docs.python.org/2/library/urllib.html#urllib.quote
 *
 * @param {Sting} string 待编码字符串
 * @param {String} safe 不需要编码的字符，可以是多个。默认不对 "/" 编码。
 */
function quote(string, safe) {
  string = typeof(string) === 'string' ? string : (string + ''); // anything to string
  safe = safe && safe.split('') || ['/'];
  var ret = string || '';
  characters.map(function(cur) {
    if (safe.indexOf(cur[0]) == -1) {
      ret = ret.replace(cur[1], cur[2])
    }
  });
  return ret;
}

/**
 * Like quote(), but also replaces spaces by plus signs, as required
 * for quoting HTML form values when building up a query string to
 * go into a URL. Plus signs in the original string are escaped unless
 * they are included in safe. It also does not have safe default to '/'.
 *
 * @param {Sting} string 待编码字符串
 * @param {String} safe 不需要编码的字符，可以是多个。默认将空格转为 "+"
 */
function quote_plus(string, safe) {
  safe = safe || '';
  var ret = quote(string, safe + ' '); // skip space
  return ret.replace(/ /g, '+');
}

function unquote(string) {
  string = typeof(string) === 'string' ? string : (string + ''); // anything to string
  var ret = string || '';
  characters.map(function(cur) {
    ret = ret.replace(new RegExp(cur[2], 'g'), cur[0])
  });
  return ret;
}

function unquote_plus(string) {
  return unquote(string).replace(/\+/g, ' ')
}

exports.quote = quote;
exports.quote_plus = quote_plus;
exports.unquote = unquote;
exports.unquote_plus = unquote_plus;
