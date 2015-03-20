define(['jquery'], function($) {
  'use strict';

  function addClassIf(htmlString, className, callback) {
    if (!callback())
      return htmlString;

    return $(htmlString)
      .addClass(className)
      .wrap('<div></div>')
      .parent()
      .html();
  }

  function strPad(string, length, pad) {
    string += '';

    while (string.length < length)
      string = pad + string;

    return string;
  }

  return {
    addClassIf: addClassIf,
    strPad: strPad,
  };
});

