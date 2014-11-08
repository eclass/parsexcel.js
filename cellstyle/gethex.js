// http://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.indexedcolors(v=office.14).aspx
var indexedColors = {
  "":"",
  0:"#000000",
  1:"#FFFFFF", 
  2:"#FF0000", 
  3:"#00FF00", 
  4:"#0000FF", 
  5:"#FFFF00", 
  6:"#FF00FF", 
  7:"#00FFFF", 
  8:"#000000", 
  9:"#FFFFFF", 
  10:"#FF0000",
  11:"#00FF00",
  12:"#0000FF",
  13:"#FFFF00",
  14:"#FF00FF",
  15:"#00FFFF",
  16:"#800000",
  17:"#008000",
  18:"#000080",
  19:"#808000",
  20:"#800080",
  21:"#008080",
  22:"#C0C0C0",
  23:"#808080", 
  24:"#9999FF", 
  25:"#993366", 
  26:"#FFFFCC", 
  27:"#CCFFFF", 
  28:"#660066", 
  29:"#FF8080",
  30:"#0066CC", 
  31:"#CCCCFF", 
  32:"#000080", 
  33:"#FF00FF", 
  34:"#FFFF00", 
  35:"#00FFFF", 
  36:"#800080", 
  37:"#800000", 
  38:"#008080", 
  39:"#0000FF", 
  40:"#00CCFF",
  41:"#CCFFFF", 
  42:"#CCFFCC", 
  43:"#FFFF99", 
  44:"#99CCFF", 
  45:"#FF99CC", 
  46:"#CC99FF", 
  47:"#FFCC99", 
  48:"#3366FF", 
  49:"#33CCCC", 
  50:"#99CC00", 
  51:"#FFCC00", 
  52:"#FF9900", 
  53:"#FF6600", 
  54:"#666699", 
  55:"#969696", 
  56:"#003366", 
  57:"#339966", 
  58:"#003300", 
  59:"#333300", 
  60:"#993300", 
  61:"#993366", 
  62:"#333399", 
  63:"#333333",
  64:"#000000",//system foreground
  65:"#ffffff",//system background
};

var getHex = function(num){
  return indexedColors[num] ? indexedColors[num] : "";
}

module.exports = getHex;
