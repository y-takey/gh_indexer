// const INDENTS = { h1: 0, h2: 1, h3: 2, h4: 3 };
// const INDENT_SIZE = 12;
const WAIT_TIME = 2000;
let sidebar = null;

const removeSidebar = () => {
  if (sidebar) sidebar.remove();
}
const renderSidebar = () => {
  let contents;
  let container;

  removeSidebar();
  if (!sidebar) {
    sidebar = $("<nav></nav>", { class: "kukkoro-sidebar" });
    $("body").append(sidebar);
    let closeIcon = $("<span>", { text: "x", class: "kukkoro-close-icon" }).on("click", removeSidebar);
    sidebar.append(closeIcon);
  }
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
}

renderSidebar();

let renderedPath = location.pathname;
$(window).on("transitionend", ()=> {
  if (renderedPath === location.pathname) return;

  setTimeout(renderSidebar, WAIT_TIME)
  renderedPath = location.pathname;
});
