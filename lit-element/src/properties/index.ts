import { LitElement, html, property } from "lit-element";

class WithPropertyElement extends LitElement {
  // static get properties() {
  //   return {
  //     name: {
  //       type: String,
  //     },
  //   };
  // }

  @property({ type: String })
  name: string;

  render() {
    return html`<p>Hello, ${this.name}</p>`;
  }
}

customElements.define("with-property-element", WithPropertyElement);
