import { LitElement, html } from "lit-element";
import "./properties/index.ts";
import "./properties/reflect.ts";
import "./properties/converter.ts";
import "./properties/hasChanged.ts";
import "./styling.ts";

class MyElement extends LitElement {
  render() {
    return html`
      <div>
        <with-property-element name="Lit Element"></with-property-element>
        <reflect-element foo="foo" bar="bar"></reflect-element>
        <converter-element></converter-element>
        <has-changed></has-changed>
        <styling-element></styling-element>
      </div>
    `;
  }
}

customElements.define("my-element", MyElement);
