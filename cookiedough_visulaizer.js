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
  cd[i][2] = cd_time_msFormact(cd[i][2]*1 - now)
  var cd_ = cd[i][2].replaceAll(':', ',');
  var cd_ = cd_.replaceAll('-', '');
  var cd_ = cd_.substring(0, cd_.indexOf('.'));
  var func = "'"+cd[i][0]+"'"
  var func_ = "'"+ cd[i][0]+"',"+cd[i][1]+",["+cd_ +"]"
  cd[i].push('<input type="button" value="✖" class="cd_btn_inactive_clr" style="transform:translate(0em)" onclick="cd_rm_vis('+func+')"><input type="button" value="🖊" class="cd_btn_passive_clr" style="transform:translate(1.5em)" onclick="cd_render_edit_toInput('+func_+')">')
}
return cd;
}

function cd_makeTableHTML(myArray) {
  var result = "<div style='width:100vw;height:100vh;background:#40404880;backdrop-filter:blur(2px);top:0;left:0px;position:absolute;'><table  class='cd_render_table'>";
  result += "<tr><th>Cookie</th><th>Value</th><th>Valid-Time left</th><th>Edit</th>"
  for(var i=0; i<myArray.length; i++) {
      result += "<tr class='cd_render_tr'>";
      for(var j=0; j<myArray[i].length; j++){
          result += "<td class='cd_render_td'>"+myArray[i][j]+"</td>";
      }
      result += "</tr>";
  }
  result += "</tr>";
  result += "<tr><th><input placeholder='name' class='cd_render_input cd_btn_passive_clr cd_btn_fill'></th><th><input type='number' placeholder='Value' class='cd_render_input cd_btn_passive_clr cd_btn_fill'></th><th><input placeholder='12,34,56' class='cd_render_input cd_btn_passive_clr cd_btn_fill'></th><th><input value='Submit' type='button' class='cd_render_input cd_btn_active_clr cd_btn_fill' onclick='cd_render_inputFormater()'></th>"
  result += "</table></div>";
  return result;
}
function cd_render_inputFormater(){
  var first= document.getElementsByClassName('cd_render_input')[0].value;
  var second = document.getElementsByClassName('cd_render_input')[1].value;
  var third= document.getElementsByClassName('cd_render_input')[2].value.split(",")
  cd_set_vis(first,second,third)
}

function cd_render_edit_toInput(name,value,time){
document.getElementsByClassName('cd_render_input')[0].value = name 
document.getElementsByClassName('cd_render_input')[1].value = value
document.getElementsByClassName('cd_render_input')[2].value = time
document.getElementsByClassName('cd_render_input')[0].scrollIntoView();
}