const DomNode = require('./domNode');

class Document extends DomNode {
  #document;
  constructor(html) {
    super();
    this.#document = html;
  }
  getElementById(id) {
    const regex = new RegExp(
      `<[a-zA-Z0-9][a-zA-Z0-9]*\\s*id=${id}.*>.*<[/][a-zA-Z0-9][a-zA-Z0-9]*>`,
      'g'
    );
    return this.#document.match(regex);
  }
  getElementByClassName(className) {
    const regex = new RegExp(
      `<[a-zA-Z0-9][a-zA-Z0-9]*\\s*class\\s*=["|']${className}["|']\\s*.*>.*<[/][a-zA-Z0-9][a-zA-Z0-9]*>`,
      'g'
    );
    // console.log(this.#document)
    return this.#document.match(regex);
  }
}

module.exports = Document;
