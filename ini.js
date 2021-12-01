
  
function import_cookiedough_lib() {

    var scripts = [
      "cookiedough_add",
      "cookiedough_remove",
      "cookiedough_get",
      "cookiedough_validation",
      "cookiedough_list",
      "cookiedough_visulaizer"
    ];
    for (i = 0; i < scripts.length; i++) {
      var name = scripts[i];
      var src = name + ".js";
      var sub_script = document.createElement("script");
      console.log(' The module: "' + name + '" was successfully imported!');
      sub_script.src = src;
      document.head.appendChild(sub_script);
    }
    document.body.innerHTML += '<cd_render></cd_render><link rel="stylesheet" href="style.css">'
  }

  