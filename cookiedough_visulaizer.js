//cookie = [string,number,number]


function cd_visulaiz() {
  var cds = cd_prepVis()
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
  var result = "<table  class='cd_render_table'>";
  for(var i=0; i<myArray.length; i++) {
      result += "<tr class='cd_render_tr'>";
      for(var j=0; j<myArray[i].length; j++){
          result += "<td class='cd_render_td'>"+myArray[i][j]+"</td>";
      }
      result += "</tr>";
  }
  result += "</table>";
  // result+= "<style>table.cd_render_table{ font-family:Arial, Helvetica, sans-serif;border:2px solid #000000;background-color:#4A4A4A;width:100%;height:200px;text-align:left;border-collapse:collapse;}table.cd_render_table td, table.cd_render_table th{ border:1px solid #4A4A4A;padding:3px 3px;}table.cd_render_table tbody td{ font-size:13px;color:#E6E6E6;}table.cd_render_table tr:nth-child(even){ background:#888888;}table.cd_render_table thead{ background:#000000;}table.cd_render_table thead th{ font-size:15px;font-weight:bold;color:#E6E6E6;text-align:center;border-left:2px solid #4A4A4A;}table.cd_render_table thead th:first-child{ border-left:none;}table.cd_render_table tfoot td{ font-size:12px;}</style>"
  return result;
}