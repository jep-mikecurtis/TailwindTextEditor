class Rapyd {
  props;

  constructor(props = {}, methods = {}, init = null) {
    this.props = props;

    for (name in methods) {
      this[name] = methods[name];
    }

    if (init) {
      this.init(init);
    }
  }

  init(cb) {
    cb = cb.bind(this);
    cb();
  }

  renderText(el, value) {
    document.querySelector(el).innerText = value;
  }

  renderHtml(el, value) {
    document.querySelector(el).innerHTML = value;
  }
}

export default Rapyd;
