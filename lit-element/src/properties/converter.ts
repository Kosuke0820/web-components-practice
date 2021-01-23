import { LitElement, html, property } from "lit-element";

class ConverterElement extends LitElement {
  @property({
    reflect: true,
    converter: {
      toAttribute: (value: boolean) => {
        console.log("to", value);
        return value ? "" : null;
      },
      fromAttribute: (value: string | null) => {
        console.log("from", value);
        return value !== null;
      },
    },
  })
  flag: boolean = false;

  render() {
    return html`
      <h1>Converter Element</h1>
      <div>flag: ${this.flag}</div>
    `;
  }
}

customElements.define("converter-element", ConverterElement);
