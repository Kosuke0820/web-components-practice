import { LitElement, html, property } from "lit-element";

class UpdateComplete extends LitElement {
  @property({
    type: Number,
    hasChanged: (newValue, oldValue) => {
      console.log(`hasChanged: ${oldValue} -> ${newValue}`);
      return true;
    },
  })
  count = 0;

  async performUpdate() {
    console.log("performUpdate");
    super.performUpdate();
  }

  shouldUpdate() {
    console.log("shouldUpdate");
    return true;
  }

  render() {
    console.log("render");
    return html`
      <h1>UpdateComplete</h1>
      <button @click=${this.onClick}>count: ${this.count}</button>
    `;
  }

  firstUpdated() {
    console.log("firstUpdated");
  }

  updated() {
    console.log("updated");
  }

  onClick() {
    this.count += 1;
    this.updateComplete.then((value) => {
      console.log(`updateComplete: value = ${value}`);
    });
  }
}

customElements.define("update-complete-element", UpdateComplete);
