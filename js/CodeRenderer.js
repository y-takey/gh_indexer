"use strict";

const BLANK_TEXT = $("<span>", {
  class: "kukkoro-close-icon",
  text: "Click line number to add"
});

let lineNumbers;
let listener;

const generaetItem = () => {
  if (lineNumbers.includes(location.hash)) {
    console.log("includes", lineNumbers);
    return;
  } else {
    console.log("else");
  }

  lineNumbers.push(location.hash);
  let $lineNumber = $(location.hash);
  let text = $lineNumber.parent().find(".js-file-line").text().trim();
  return $("<a>", {
    class: "kukkoro-item",
    text: `${$lineNumber.data("lineNumber")}: ${text}`,
    href: location.hash
  });
};

const createCodeIndex = ($container, sidebar) => {
  const container = $("<div>");
  lineNumbers = [];

  if (listener) {
    $(window).off("hashchange", listener);
  }
  listener = generateListener(container);
  $(window).on("hashchange", listener);

  container.append(BLANK_TEXT);
  return container;
};

const generateListener = container => () => {
  BLANK_TEXT.remove();
  container.prepend(generaetItem());
};
