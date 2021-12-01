function cd_set(name, value, time) {
    var now = +new Date();
    var secs = time[0] * 3600 + time[1] * 60 + time[2];
    var ms = secs * 1000;
    var cookie = [name, value, now + ms];
    localStorage.setItem(name, cookie);
    return cookie;
  }
  function cd_set_vis(name, value, time) {
    var now = +new Date();
    var secs = time[0] * 3600 + time[1] * 60 + time[2];
    var ms = secs * 1000;
    ms -= 5400000
    var cookie = [name, value, now + ms];
    localStorage.setItem(name, cookie);
    alert(name+""+cookie)
    cd_visulaiz(true);
  }