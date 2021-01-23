import { LitElement, html, property } from "lit-element";

class ShouldUpdateElement extends LitElement {
  @property({ type: String }) foo = "";

  @property({ type: String }) bar = "";

  shouldUpdate(propertyies: Map<string | number | symbol, string>) {
    return propertyies.has("foo");
  }

  onChangeFoo(event: KeyboardEvent) {
    this.foo = (event.currentTarget as HTMLInputElement).value;
  }

  onChangeBar(event: KeyboardEvent) {
    this.bar = (event.currentTarget as HTMLInputElement).value;
  }

  render() {
    return html`
      <h1>shouldUpdate</h1>
      <div>
        <div>foo: ${this.foo}</div>
        <div>bar: ${this.bar}</div>
      </div>
      <div>
        foo:
        <input type="text" value="${this.foo}" @keyup=${this.onChangeFoo} />
      </div>
      <div>
        bar:
        <input type="text" value="${this.bar}" @keyup=${this.onChangeBar} />
      </div>
    `;
  }
}

customElements.define("should-update-element", ShouldUpdateElement);
