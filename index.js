function objectToCSS(styles, nested_lv = 0) {
  String.prototype.toSnakeCase = function() {
    return this.replace(/[A-Z]/g, match => {
      return "-" + match.toLowerCase();
    });
  }
  let styleList = [];
  for(let propety in styles) {
    if(styles[propety].toString() == "[object Object]") {
      styleList.push(" ".repeat(nested_lv * 4) + propety + " {\n" + objectToCSS(styles[propety], nested_lv + 1) + "\n" + " ".repeat(nested_lv * 4) + "}");
    } else {
      if(typeof styles[propety] == "number" && styles[propety]) styles[propety] += "px";
      styleList.push(" ".repeat(nested_lv * 4) + propety.toSnakeCase() + ": " + styles[propety] + ";");
    }
  }
  return styleList.join("\n");
}
