import { h, render } from 'preact'

export function preactElementDefine(name, component, allowedProps = []) {
  customElements.define(name, class extends HTMLElement {
    connectedCallback() {
      const props = {}
      for (const prop of allowedProps) {
        if (this.hasAttribute(prop)) {
          props[prop] = this.getAttribute(prop)
        }
      }
      const children = []
      render(h(component, props, children), this)
    }
  })
}
