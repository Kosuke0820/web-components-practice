import { LitElement, html, css } from "lit-element";

class StylingElement extends LitElement {
  static styles = css`
    button {
      display: inline-block;
      padding: 0.5em 1em;
      text-decoration: none;
      background: #43a047;
      color: white;
      border-bottom: solid 4px #1b5e20;
      border-radius: 3px;
      outline: none;
    }
    button:active {
      transform: translateY(4px);
      border-bottom: none;
    }
  `;

  render() {
    return html`
      <h1>Styling Element</h1>
      <button>click</button>
    `;
  }
}

customElements.define("styling-element", StylingElement);
