import { LitElement, html, property } from "lit-element";

class HasChanged extends LitElement {
  @property({
    type: Number,
    hasChanged: (newVal: number, oldVal: number) => {
      return newVal >= oldVal;
    },
  })
  value: number = 0;

  increment() {
    this.value += 1;
  }

  decrement() {
    this.value += -1;
  }

  render() {
    return html`
      <h1>hasChanged</h1>
      <div>${this.value}</div>
      <button @click=${this.decrement}>minus</button>
      <button @click=${this.increment}>plus</button>
    `;
  }
}

customElements.define("has-changed", HasChanged);
