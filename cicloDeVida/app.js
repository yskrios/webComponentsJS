class MyCustomeElement extends HTMLElement {
  constructor() {
    super();
    console.log("Hola desde el constructor - Memoria");
  }

  connectedCallback() {
    console.log("Hola desde el DOM");
  }

  disconnectedCallback() {
    console.log("Adios al DOM");
  }
}

customElements.define("my-custome-element", MyCustomeElement);
document.querySelector("my-custome-element").remove();
