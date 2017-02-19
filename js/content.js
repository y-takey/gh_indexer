//////////////////////////////////////////////
//// Inject jquery lib to document for debug
//////////////////////////////////////////////
// var script=document.createElement('script');
// script.setAttribute("type", "text/javascript")
// script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js")
// var head=document.getElementsByTagName('head')[0];
// head.appendChild(script);

const INDENTS = { h1: 0, h2: 1, h3: 2, h4: 3 };
const INDENT_SIZE = 12;
let sidebar = null;

const removeSidebar = ()=> {
  if (sidebar) sidebar.remove();
}
const renderSidebar = ()=> {
  removeSidebar();
  if ($(".markdown-body").length === 0) return;

  const contents = $("h1,h2,h3,h4", ".markdown-body").map((i, el)=>{
    let indent = INDENTS[el.tagName.toLowerCase()];
    return $("<a>", {
      class: "kukkoro-item",
      html: el.innerText.trim(),
      href: $("a", el).attr("href"),
      style: `margin-left: ${INDENT_SIZE * indent}px;`
    });
  });
  sidebar = $("<nav></nav>", { class: "kukkoro-sidebar" });
  $("body").append(sidebar);
  let closeIcon = $("<span>", { text: "x", class: "kukkoro-close-icon" }).on("click", removeSidebar);
  sidebar.append(closeIcon);
  sidebar.append(contents.toArray());
}

renderSidebar();

let renderedPath = location.pathname;
$(window).on("transitionend", ()=> {
  if (renderedPath === location.pathname) return;

  setTimeout(renderSidebar, 1000)
  renderedPath = location.pathname;
});
