import { h } from "preact"
import { useState, useCallback } from "preact/hooks"

export function ReactiveButton() {
  const [value, setValue] = useState(1)
  const onclick = useCallback(() => {
    setValue(old => old + 1)
  })
  return h("button", { onclick }, value)
}
