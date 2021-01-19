import { html, render } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'

class MyImg extends HTMLElement {
  get src() {
    return this.getAttribute('src');
  }
  set src(value) {
    this.setAttribute('src', value)
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this.openImage = this.openImage.bind(this)
  }

  connectedCallback() {
    fetch(this.src, { mode: 'cors' })
      .then(res => res.blob())
      .then(blob => {
        this.img = URL.createObjectURL(blob) 
        this.render()
      })
  }

  openImage() {
    console.log('clicked')
  }

  render() {
    const template = html`
      <img src="${ifDefined(this.img)}"
        @click=${this.openImage}>
    `
    render(template, this.shadowRoot)
  }
}

customElements.define('my-img', MyImg)