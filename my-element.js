const template = document.createElement("div");
template.innerHTML = `
    <style>
        p{
            color:blue;
        }
        .texto{
            color:red;
        }
    </style>
    <p class="texto">Hola mundo 2!!</p>
    <p>Texto Ejemplo</p>
`;

class myElementm extends HTMLElement {
  constructor() {
    super();
    this.p = document.createElement("p");
  }
  connectedCallback() {
    this.p.textContent = "Hola Mundo!!";
    this.appendChild(this.p);
    this.appendChild(template);
  }
}

customElements.define("my-element", myElementm);
