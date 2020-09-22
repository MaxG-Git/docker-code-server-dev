var path = window.location.pathname;
var link = window.location.href;
var file = path.substring(path.lastIndexOf('/')+1);
var type = path.substring(path.lastIndexOf('.')+1);
const $ = id => document.getElementById(id);
const $$ = name => document.getElementsByClassName(name);
var title = $$("title");
var back = $("back");
var pageRawContent = $("rawContent");
var home = $("home");
var codeBlock = $$("language-txt");
var thisUrl = $("url");
var preBlock = $("preBlock");
let backString = link.substring(link.indexOf('/')+2);
let backA = backString.substring(0, backString.indexOf(':')+1);   //For non port configuration --> backString.substring(0, backString.indexOf('/'));
let backB = backString.substring(backString.indexOf('content/')+8, backString.lastIndexOf('/'))
let IFMport = "8445"; // For port configuration
let TLSheader = "http://"

back.setAttribute("href", TLSheader + backA + IFMport + "#" +backB);
home.setAttribute("href", TLSheader + backA + IFMport);

preBlock.setAttribute("data-src", "/"+backString.substring(backString.indexOf('content/')+8));

if(type != "txt" && type!="text"){
preBlock.setAttribute("class", "line-numbers");
}
//codeBlock[0].setAttribute("id", "test1");
//thisUrl.innerHTML += link;
//thisUrl.setAttribute("href", link);


for(let i=0; i<title.length; i++){
    title[i].innerHTML=(i===0) ? file.substr(0,1).toUpperCase()+file.substr(1,file.length-1): file ;
}

pageRawContent.innerHTML="";

