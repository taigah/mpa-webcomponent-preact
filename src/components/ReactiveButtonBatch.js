import { h } from 'preact'
import "./ReactiveButtonBatch.css"

export function ReactiveButtonBatch(props) {
  const initialValue = parseInt(props["initial-value"] ?? "1", 10)
  const count = parseInt(props["count"] ?? "10", 10)
  const children = Array(count).fill(null).map(() => {
    return h("reactive-button", { "initial-value": initialValue }, null)
  })
  return h("div", { className: "reactive-button-batch" }, children)
}
