class myElementm extends HTMLElement {
  constructor() {
    super();
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <section>
          <h2>Hola mundo cruel</h2>
          <div>
            <p>Soy mas texto ejemplo</p>
          </div>
        </section>
        ${this.getStyle()}
      `;

    return template;
  }

  getStyle() {
    return `
    <style>
      h2{
        color:red;
      }
    </style>`;
  }
  render() {
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", myElementm);
