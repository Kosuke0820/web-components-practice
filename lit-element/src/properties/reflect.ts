import { LitElement, html, property } from "lit-element";

class ReflectElement extends LitElement {
  @property({ type: String })
  foo: string;

  @property({ type: String, reflect: true })
  bar: string;

  onSubmit(event: Event) {
    event.preventDefault();
    const input = this.shadowRoot.getElementById("text-input");
    const { value } = input as HTMLInputElement;
    this.foo = value;
    this.bar = value;
  }

  render() {
    return html`
      <h1>Reflect-Element</h1>
      <section>
        <p>foo: ${this.foo}</p>
        <p>bar: ${this.bar}</p>
      </section>
      <form @submit="${this.onSubmit}">
        <input id="text-input" name="text" type="text" />
        <button>change</button>
      </form>
    `;
  }
}

customElements.define("reflect-element", ReflectElement);
