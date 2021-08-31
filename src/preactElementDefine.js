import { h, render } from 'preact'

export function preactElementDefine(name, component) {
  customElements.define(name, class extends HTMLElement {
    connectedCallback() {
      render(h(component, null, null), this)
    }
  })
}
