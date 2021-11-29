//cookie = [string,number,number]

function cd_visulaiz() {
  var cds = cd_prepVis()
  var cd_render = document.getElementsByTagName('cd_render')[0]
 if (cd_render.value == 1){
  cd_render.value = 0
  cd_render.innerHTML = ""
 } else {
  cd_render.value = 1
  var cd_visulaiz_interval = setInterval(function(){
    if (cd_render.value == 0) {
      clearInterval(cd_visulaiz_interval)
    } else{
    document.getElementsByTagName('cd_render')[0].innerHTML = cd_makeTableHTML(cd_prepVis())
    }
  },250)
  }

 return document.getElementsByTagName('cd_render')[0].value;
}

function cd_prepVis(){
var cd = cd_all()
for (i=0;i<cd.length;i++){
  var now = +new Date();
  cd[i][2] = cd[i][2] - now +"ms"
}
return cd
}

function cd_makeTableHTML(myArray) {
  var result = "<div style='width:100vw;height:100vh;background:#40404880;backdrop-filter:blur(2px);top:0;left:0px;position:absolute;'><table  class='cd_render_table'>";
  result += "<tr><th>Cookie</th><th>Value</th><th>Valid-Time left</th>"
  for(var i=0; i<myArray.length; i++) {
      result += "<tr class='cd_render_tr'>";
      for(var j=0; j<myArray[i].length; j++){
          result += "<td class='cd_render_td'>"+myArray[i][j]+"</td>";
      }
      result += "</tr>";
  }
  result += "</tr>";
  result += "</table></div>";
  result += "<style>table.cd_render_table{font-family:Arial, Helvetica, sans-serif;border:2px solid #18181b;background-color:#242429;width:100%;height:200px;border-collapse:collapse;}table.cd_render_table td, table.cd_render_table th{border:1px solid #3b3b44;padding:1em;text-align:center;}table.cd_render_table tbody td{font-size:13px;color:#E6E6E6;text-align:left;}table.cd_render_table tr:nth-child(even){background:#2f2f37;}table.cd_render_table thead{background:#000000;}table.cd_render_table thead th{font-size:15px;font-weight:bold;color:#E6E6E6;text-align:center;border-left:2px solid #4A4A4A;}table.cd_render_table thead th:first-child{border-left:none;}table.cd_render_table tfoot td{font-size:12px;}</style>"
  return result;
}