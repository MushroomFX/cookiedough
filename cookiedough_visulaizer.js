//cookie = [string,number,number]

function cd_visulaiz(revis) {
  console.log(revis)
  if (revis==true){
    document.getElementsByTagName('cd_render')[0].innerHTML = cd_makeTableHTML(cd_prepVis())
  } else {
  var cds = cd_prepVis()
  var cd_render = document.getElementsByTagName('cd_render')[0]
 if (cd_render.value == 1){
  cd_render.value = 0
  cd_render.innerHTML = ""
 } else {
  cd_render.value = 1
  // var cd_visulaiz_interval = setInterval(function(){
    if (cd_render.value == 0) {
      // clearInterval(cd_visulaiz_interval)
    } else{
    document.getElementsByTagName('cd_render')[0].innerHTML = cd_makeTableHTML(cd_prepVis())
    }
  // },500)
}
}
 return document.getElementsByTagName('cd_render')[0].value;
}

function cd_prepVis(){
var cd = cd_all()
for (i=0;i<cd.length;i++){
  var now = +new Date();
  cd[i][2] = cd_time_msFormact(cd[i][2] - now)
  var func = "'"+cd[i][0]+"'"
  var func2 = "'"+cd[i][0]+"'"
  cd[i].push('<input type="button" value="✖" class="cd_btn_inactive_clr" style="transform:translate(0em)" onclick="cd_rm_vis('+func+')"><input type="button" value="🖊" class="cd_btn_passive_clr" style="transform:translate(1.5em)" onclick="cd_edit('+func2+')">')
}
return cd;
}

function cd_makeTableHTML(myArray) {
  var result = "<div style='width:100vw;height:100vh;background:#40404880;backdrop-filter:blur(2px);top:0;left:0px;position:absolute;'><table  class='cd_render_table'>";
  result += "<tr><th>Cookie</th><th>Value</th><th>Valid-Time left</th><th>Femboy</th>"
  for(var i=0; i<myArray.length; i++) {
      result += "<tr class='cd_render_tr'>";
      for(var j=0; j<myArray[i].length; j++){
          result += "<td class='cd_render_td'>"+myArray[i][j]+"</td>";
      }
      result += "</tr>";
  }
  result += "</tr>";
  result += "<tr><th><input placeholder='name' class='cd_render_input cd_btn_passive_clr cd_btn_fill'></th><th><input type='number' placeholder='Value' class='cd_render_input cd_btn_passive_clr cd_btn_fill'></th><th><input placeholder='[12,34,56]' class='cd_render_input cd_btn_passive_clr cd_btn_fill'></th><th><input value='Submit' type='button' class='cd_render_input cd_btn_active_clr cd_btn_fill'></th>"
  result += "</table></div>";
  return result;
}