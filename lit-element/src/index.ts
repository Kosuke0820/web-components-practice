import { LitElement, html } from "lit-element";
import "./properties.ts";

class MyElement extends LitElement {
  render() {
    return html`
      <div>
        <with-property-element name="Lit Element"></with-property-element>
      </div>
    `;
  }
}

customElements.define("my-element", MyElement);
