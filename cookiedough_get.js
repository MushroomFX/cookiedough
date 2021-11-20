function cd_get(name) {
    var cookie = localStorage.getItem(name);
    if (cookie === null) {
      return 'couldnt find a cookie named: "' + name + '"';
    } else {
      var get = localStorage.getItem(name);
      var split = get.split(",");
      split[2] *= 1;
      if (split[1] * 1 == NaN) {
        console.log("NAN");
      } else {
        split[1] *= 1;
      }
      if (split[0] * 1 == NaN) {
        console.log("NAN");
      } else {
        split[0] *= 1;
      }
      return split;
    }
  }