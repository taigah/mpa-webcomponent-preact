import { h } from 'preact'

export function ReactiveButtonBatch() {
  const count = 10
  const children = Array(10).fill(null).map(() => {
    return h("reactive-button", null, null)
  })
  return h("div", null, children)
}
