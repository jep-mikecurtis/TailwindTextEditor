export default {
  tooltip() {
    this.tooltipHandleBind();
  },
  tooltipHandleBind() {
    const tooltips = document.querySelectorAll(`.${this.target}_tooltip`);
    tooltips.forEach((el) =>
      el.addEventListener("click", (e) => {
        this.tooltipHandleTag(e.target.dataset.tag, e.target.dataset.class);
      })
    );
  },
  tooltipHandleTag(tagTyp, tagClass) {
    let tag = "";
    if (tagClass) {
      const insertClass = `class='${tagClass}'`;
      tag = `<${tagTyp} ${insertClass}>\n\n</${tagTyp}>`;
    } else {
      tag = `<${tagTyp}>\n\n</${tagTyp}>`;
    }

    if (this.editor.selectionStart || this.editor.selectionStart == "0") {
      var startPos = this.editor.selectionStart;
      var endPos = this.editor.selectionEnd;
      this.editor.value =
        this.editor.value.substring(0, startPos) +
        tag +
        this.editor.value.substring(endPos, this.editor.value.length);
    } else {
      this.editor.value += tag;
    }

    this.formatText();
  },
};
