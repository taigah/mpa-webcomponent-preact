import { h } from "preact"
import { useState, useCallback } from "preact/hooks"

export function ReactiveButton(props) {
  const initialValue = parseInt(props["initial-value"] ?? "1", 10)
  const [value, setValue] = useState(initialValue)
  const onclick = useCallback(() => {
    setValue(old => old + 1)
  })
  return h("button", { onclick }, value)
}
