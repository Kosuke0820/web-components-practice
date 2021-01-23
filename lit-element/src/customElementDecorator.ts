import { LitElement, html, customElement } from "lit-element";

@customElement("custom-elemet-decorator")
// eslint-disable-next-line no-unused-vars
class CustomElementDecorator extends LitElement {
  render() {
    return html`<div>customElement decorator demo</div>`;
  }
}
