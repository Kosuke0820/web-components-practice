import { LitElement, html } from "lit-element";
import "./properties.ts";
import "./reflect.ts";

class MyElement extends LitElement {
  render() {
    return html`
      <div>
        <with-property-element name="Lit Element"></with-property-element>
        <reflect-element foo="foo" bar="bar"></reflect-element>
      </div>
    `;
  }
}

customElements.define("my-element", MyElement);
