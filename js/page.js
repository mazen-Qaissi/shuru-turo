var travels = []
var textKey = ["Id","Start_date","Duration","Price","Guide"];
var button0 = ["Delete","update","add path","show path"]
var trip =""
var content="<table>"
var loadPage = function()
{
    $.getJSON("/data/option1.json",function(data){
        
        for (key in data) {
            travels.push(key)
          }
          content+="<tr><th>Trip</th>"
          for(let l=0;l<textKey.length;l++){
            content+="<th>"+textKey[l]+"</th>"
          }
          content+="<th>Delete</th>"
          content+="<th>update</th>"
          content+="<th>add path</th>"
          content+="<th>show path</th>"
          content+="</tr>"
        for (let index = 0; index < travels.length; index++) {
            content+="<tr><td>"+travels[index]+"</td>"
            for (let j = 0; j < textKey.length; j++) {
                content+="<td>"+data[travels[index]][textKey[j]]+"</td>"
            }
            for(let j=0;j<4;j++){
                content+="<td><button>"+button0[j]+"</button></td>"
            }
            content+=trip+"</tr>"
            
        }
        content+="</table>"
        $(".listTable").append(content)
    });
};
$(document).ready(loadPage);