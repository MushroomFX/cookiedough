//cookie = [string,number,number]


function cd_visulaiz() {
  var cds = cd_prepVis
  var cd_render = document.getElementsByTagName('cd_render')[0]
 if (cd_render.value == 1){
  cd_render.value = 0
  cd_render.innerHTML = ""
 } else {
  cd_render.value = 1
  cd_render.innerHTML = cd_makeTableHTML(cds)
}
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

function cd_makeTableHTML(myArray) {
  var result = "<table border=1>";
  for(var i=0; i<myArray.length; i++) {
      result += "<tr>";
      for(var j=0; j<myArray[i].length; j++){
          result += "<td>"+myArray[i][j]+"</td>";
      }
      result += "</tr>";
  }
  result += "</table>";

  return result;
}