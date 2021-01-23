import { LitElement, html } from "lit-element";
import "./properties/index.ts";
import "./properties/reflect.ts";
import "./properties/converter.ts";
import "./properties/hasChanged.ts";

class MyElement extends LitElement {
  render() {
    return html`
      <div>
        <with-property-element name="Lit Element"></with-property-element>
        <reflect-element foo="foo" bar="bar"></reflect-element>
        <converter-element></converter-element>
        <has-changed></has-changed>
      </div>
    `;
  }
}

customElements.define("my-element", MyElement);
