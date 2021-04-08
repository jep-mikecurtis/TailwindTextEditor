import Rapyd from "./Rapyd";
import { mainContent } from "./html/html";

class Editor extends Rapyd {
  target;
  editor = null;

  constructor(target) {
    super();

    this.target = target;

    this.init();
  }

  allowTab() {
    this.editor.addEventListener(
      "keydown",
      function (e) {
        if (e.key == "Tab") {
          e.preventDefault();
          var start = e.target.selectionStart;
          var end = e.target.selectionEnd;

          e.target.value =
            e.target.value.substring(0, start) +
            "\t" +
            e.target.value.substring(end);
          e.target.selectionStart = e.target.selectionEnd = start + 1;
        }
      }.bind(this)
    );
  }

  handleTextarea() {
    this.editor.addEventListener(
      "keyup",
      function (e) {
        this.keyBefore = e.target.value;
        this.content = e.target.value;

        this.SetBody(this.content);
      }.bind(this)
    );
  }

  calcNumbers() {
    let content = document
      .getElementById(`${this.target}_editor`)
      .value.split("\n");

    let newContent = [];

    if (content.length < 10) {
      content.length = 10;
    }

    for (let i = 0; i < content.length; i++) {
      newContent.push(`<p>${i + 1}</p>`);
    }

    document.getElementById(
      `${this.target}_numbers`
    ).innerHTML = newContent.join("");
  }

  SetBody(value) {
    this.renderHtml(`#${this.target}_display`, value);
    this.calcNumbers();
  }

  init() {
    const content = mainContent(this.target);

    this.renderHtml(`#${this.target}`, content);

    this.calcNumbers();

    this.editor = document.getElementById(`${this.target}_editor`);

    this.allowTab();

    this.handleTextarea();

    this.SetBody(this.editor.value);
  }
}

new Editor("app");

export default Editor;
