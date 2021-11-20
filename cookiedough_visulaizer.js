//cookie = [string,number,number]


function cd_visulaiz() {
  var cds = cd_prepVis
  var cd_render = document.getElementsByTagName('cd_render')[0]
 if (cd_render.value == 1){
  cd_render.value = 0
  cd_render.innerHTML = ""
 } else {
  cd_render.value = 1
  cd_render.innerHTML = "<table id='cd_renderMe'></table>"
  for (i=0;i<cd_prepVis().length;i++){
    document.getElementById('cd_renderMe').innerHTML += '<tr class="cd_renderMe"></tr>'
    for (j=0;j<cd_prepVis()[0].length;j++){
      document.getElementById('cd_renderMe').innerHTML += '<tr class="cd_renderMe"></tr>'

  }
 }}
 return document.getElementsByTagName('cd_render')[0].value;
}

function cd_prepVis(){
var cd = cd_all()
for (i=0;i<cd.length;i++){
  var now = +new Date();
  cd[i][2] = cd[i][2] - now
}
return cd
}
