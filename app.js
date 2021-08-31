customElements.define("reactive-button", class extends HTMLElement {
  connectedCallback() {
    let value = 1

    const btn = document.createElement("button")
    btn.textContent = value
    this.appendChild(btn)

    btn.addEventListener("click", () => {
      value++
      btn.textContent = value
    })
  }
})

customElements.define("reactive-buttons-batch", class extends HTMLElement {
  connectedCallback() {
    const count = 10
    for (let i = 0; i < count; ++i) {
      const reactiveButton = document.createElement("reactive-button")
      this.appendChild(reactiveButton)
    }
  }
})
