// Inject jquery lib to document for debug
var script=document.createElement('script');
script.setAttribute("type", "text/javascript")
script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js")
var head=document.getElementsByTagName('head')[0];
head.appendChild(script);

const INDENT = { h1: 0, h2: 1, h3: 2, h4: 3 };
const SPACE = "&nbsp;&nbsp;&nbsp;"
const contents = $("h1,h2,h3,h4", ".markdown-body").map((i, el)=>{
  let item = SPACE.repeat(INDENT[el.tagName.toLowerCase()]) + $(el).text().trim()
  return $("<a>", { class: "kukkoro-item", html: item });
})
const sidebar = $("<nav></nav>", { class: "kukkoro-sidebar" })
$("body").append(sidebar);
sidebar.append(contents.toArray())
