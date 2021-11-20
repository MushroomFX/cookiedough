function cd_all() {
    var cds = [];
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;
    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }
    for (i=0;i<values.length;i++){
      var x = values[i].split(",")
      cds.push(x)
    }
    return cds;
  }