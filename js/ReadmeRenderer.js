const INDENTS = { h1: 0, h2: 1, h3: 2, h4: 3 };
const INDENT_SIZE = 12;

const createReadmeIndex = ($container, sidebar)=> {
  return $container.find("h1,h2,h3,h4").map((i, el)=>{
    let indent = INDENTS[el.tagName.toLowerCase()];
    return $("<a>", {
      class: "kukkoro-item",
      html: el.innerText.trim(),
      href: $("a", el).attr("href"),
      style: `margin-left: ${INDENT_SIZE * indent}px;`
    });
  }).toArray();
}
