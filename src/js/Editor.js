import "alpinejs";
import Rapyd from "./Rapyd";
import mainContent from "./html/html";
import tooltip from "./helpers/tooltip";

class Editor extends Rapyd {
  target;
  editor = null;

  constructor(target) {
    super({}, { ...mainContent, ...tooltip });

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

        this.setBody(this.content);
      }.bind(this)
    );
  }

  calcNumbers() {
    let content = document
      .getElementById(`${this.target}_editor`)
      .value.split("\n");

    let newContent = [];

    if (content.length < 30) {
      content.length = 30;
    }

    for (let i = 0; i < content.length; i++) {
      newContent.push(`<p>${i + 1}</p>`);
    }

    document.getElementById(
      `${this.target}_numbers`
    ).innerHTML = newContent.join("");
  }

  setBody(value) {
    this.renderHtml(`#${this.target}_display`, value);
    this.calcNumbers();
  }

  formatText() {
    // let string = this.editor.value;
    // string = string.replace(/\n/g, '\n    ');
    // this.editor.value = string
  }

  init() {
    const content = this.mainContent(this.target);

    this.renderHtml(`#${this.target}`, content);

    this.calcNumbers();

    this.tooltip();

    this.editor = document.getElementById(`${this.target}_editor`);

    this.allowTab();

    this.handleTextarea();

    this.setBody(this.editor.value);
  }
}

new Editor("app");

export default Editor;
