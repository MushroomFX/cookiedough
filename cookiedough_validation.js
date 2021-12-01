function cd_validation() {
    var valids = [];
    var unvalids = [];
    var cds = cd_all();
    for (i = 0; i < cds.length; i++) {
      var now = +new Date();
      var cd = cds[i][2];
      cd *= 1;
      if (cd > now) {
        valids.push(cds[i]);
      } else {
        unvalids.push(cds[i]);
      }
    }
    return [valids,unvalids]
  }
  
  function cd_time_msFormact(input) {
    console.log(input);
  
    var milliseconds = parseInt(input % 1000),
      seconds = parseInt((input / 1000) % 60),
      minutes = parseInt((input / (1000 * 60)) % 60),
      hours = parseInt((input / (1000 * 60 * 60)) % 24);
  
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    var time = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    return time;
  }
  
  
  function cd_valid() {
    return cd_validation()[0]
  }
  
  function cd_unvalid() {
    return cd_validation()[1]
  }
  
  function cd_clean(){
    var cds = cd_unvalid()
    for (i=0;i<cds.length;i++){
      localStorage.removeItem(cds[i][0])
    }
    return cds
  }
  
  function cd_validTime(input){
    if (input===undefined){
      var times = []
      var cds = cd_valid()
      for (i=0;i<cds.length;i++){
      var now = +new Date();
        var cdt = cds[i][2]
        var cd = cds[i][0]
      times.push([cd,cd_time_msFormact(cdt-now)])
      }
      return times
    } else{
      
    }
    
  }