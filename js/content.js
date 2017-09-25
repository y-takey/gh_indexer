//////////////////////////////////////////////
//// Inject jquery lib to document for debug
//////////////////////////////////////////////
// var script = document.createElement("script");
// script.setAttribute("type", "text/javascript");
// script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js");
// var head = document.getElementsByTagName("head")[0];
// head.appendChild(script);
//////////////////////////////////////////////

const WAIT_TIME = 0;
let sidebar = null;

const removeSidebar = () => {
  if (!sidebar) return;

  sidebar.remove();
  sidebar = null;
};

const closeIcon = () => {
  const icon = $("<span>", { text: "x" });
  return $("<div>", { html: icon, class: "kukkoro-close-icon" }).on("click", removeSidebar);
};

const generateSidebar = () => {
  sidebar = $("<nav></nav>", { class: "kukkoro-sidebar" });
  $("body").append(sidebar);
  sidebar.append(closeIcon());
};

const renderSidebar = () => {
  let contents;
  let container;

  removeSidebar();
  if (!sidebar) generateSidebar();

  container = $(".markdown-body");
  if (container.length > 0) {
    contents = createReadmeIndex(container, sidebar);
  } else {
    container = $(".js-file-line-container");
    if (container.length > 0) {
      contents = createCodeIndex(container, sidebar);
    } else {
      return;
    }
  }

  sidebar.append(contents);
};

renderSidebar();

let renderedPath = location.pathname;
$('div[role="main"]').on("DOMSubtreeModified", () => {
  if (renderedPath === location.pathname) return;

  setTimeout(renderSidebar, WAIT_TIME);
  renderedPath = location.pathname;
});
