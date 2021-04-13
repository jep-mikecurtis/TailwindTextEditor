import Rapyd from "./Rapyd";
import mainContent from "./html/html";
import tooltip from "./helpers/tooltip";

class Editor extends Rapyd {
  constructor(target = null) {
    super({}, { ...mainContent, ...tooltip });

    this.target = target;
    this.editor = null;
    this.initValue = '';

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

    if (content.length < 40) {
      content.length = 40;
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
    const initValue = document.getElementById(this.target).dataset.value ?? '';

    this.renderHtml(`#${this.target}`, this.mainContent(initValue));

    this.calcNumbers();

    this.tooltip();

    this.editor = document.getElementById(`${this.target}_editor`);

    this.allowTab();

    this.handleTextarea();

    this.setBody(this.editor.value);
  }
}

export default Editor;

new Editor('editor')

console.log('Hello');
