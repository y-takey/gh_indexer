const BLANK_TEXT = $("<span>", {
  class: "kukkoro-close-icon",
  text: "Click line number to add"
});

const generaetItem = () => {
  let $lineNumber = $(location.hash);
  let text = $lineNumber.parent().find(".js-file-line").text().trim()
  return $("<a>", {
    class: "kukkoro-item",
    text: `${$lineNumber.data("lineNumber")}: ${text}`,
    href: location.hash
  });
}

const createCodeIndex = ($container, sidebar) => {
  $(window).on("hashchange", () => {
    BLANK_TEXT.remove();
    sidebar.prepend(generaetItem());
  })
  return [BLANK_TEXT];
}
