paav.lib = (function() {
  function strPad(string, length, pad) {
    string += '';

    while (string.length < length)
      string = pad + string;

    return string;
  }

  return {
    strPad: strPad,
  };
})(jQuery);

