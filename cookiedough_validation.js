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
    var now = +new Date();
  
  var ms = input * 1;
  var seconds = Math.floor(ms / 1000);
  var minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  var hours = Math.floor(minutes / 60);
  minutes -= hours * 60;

  var milliseconds = input.toString().slice(-3);
  seconds = "00" + seconds;
  seconds = seconds.toString().slice(-2);
  minutes = "00" + minutes;
  minutes = minutes.toString().slice(-2);

    var time = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    // var time = time.replaceAll('-', '');
    alert(time)
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