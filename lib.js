paav.lib = (function() {
  function strPad(string, length, pad) {
    string += '';

    while (string.length < length)
      string = pad + string;

    return string;
  }

  function isUndef(value) {
    return typeof value === 'undefined'; 
  }

  return {
    strPad: strPad,
    isUndef: isUndef,
  };
})();

