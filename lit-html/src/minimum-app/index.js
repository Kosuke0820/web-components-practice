import { html, render } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'
import { style } from './styles'

class MyImg extends HTMLElement {
  static get observedAttributes() {
    return ['src', 'show']
  }
  get src() {
    return this.getAttribute('src');
  }
  set src(value) {
    this.setAttribute('src', value)
  }
  get show() {
    const isShow = this.getAttribute('show')
    return Boolean(isShow) && isShow !== 'false';
  }
  set show(isShow) {
    this.setAttribute('show', Boolean(isShow))
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this.openImage = this.openImage.bind(this)
    this.closeImage = this.closeImage.bind(this)
  }

  attributeChangedCallback(key, _oldValue, newValue) {
    if (key === 'src' && newValue) {
      this.promise = fetch(newValue, { mode: 'cors' })
        .then(res => res.blob())
        .then(blob => {
          this.img = URL.createObjectURL(blob)
          this.render()
        })
    } else {
      this.render()
    }
  }

  connectedCallback() {
    this.render()
  }

  openImage() {
    this.show = true
  }

  closeImage() {
    this.show = false
  }

  render() {
    const template = html`
      ${style}
      ${
        this.img ? html`
          <div
            class="bg ${this.show ? 'show' : ''}"
            @click=${this.closeImage}>
            <img class="img__wide"
              src="${ifDefined(this.img)}">
          </div>
          <img 
            class="img"
            src="${ifDefined(this.img)}"
            @click=${this.openImage}>

        ` : ''
      }
    `
    render(template, this.shadowRoot)
  }
}

customElements.define('my-img', MyImg)