function cd_rm(name) {
    var cookie = localStorage.getItem(name);
    if (cookie === null) {
      return 'couldnt find a cookie named: "' + name + '"';
    } else {
      localStorage.removeItem(name);
      return cookie;
    }
  }