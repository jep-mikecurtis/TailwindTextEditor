import Rapyd from "./Rapyd";

class Editor extends Rapyd {
  target;

  constructor(target) {
    super();

    this.target = target;

    this.init();
  }

  calcNumbers() {
    var content = document
      .getElementById(`${this.target}_editor`)
      .value.split("\n");

    var newContent = [];

    if (content.length < 10) {
      content.length = 10;
    }

    for (var i = 0; i < content.length; i++) {
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
    const content = `<div id="${this.target}_display" class="flex-1 ml-4"></div>
                      <div id="${this.target}_wrapper" class="flex-1 relative flex bg-grene-600 text-sm border border-gray-800 shdaow leading-loose">
                        <div id="${this.target}_numbers" class="p-2 text-center bg-gray-100 border-r border-gray-800"></div>
                        <textarea id="${this.target}_editor" class="flex-1 p-2 outline-none"></textarea>
                      </div>`;

    this.renderHtml(`#${this.target}`, content);

    this.calcNumbers();

    const editor = document.getElementById(`${this.target}_editor`);

    editor.addEventListener("keydown", function (e) {
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
    });

    editor.addEventListener(
      "keyup",
      function (e) {
        this.SetBody(e.target.value);
      }.bind(this)
    );

    this.SetBody(editor.value);
  }
}
