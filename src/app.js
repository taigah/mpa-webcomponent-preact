import { ReactiveButton } from "./components/ReactiveButton.js"
import { ReactiveButtonBatch } from './components/ReactiveButtonBatch.js'
import { preactElementDefine } from './preactElementDefine.js'

preactElementDefine("reactive-button", ReactiveButton, [ "initial-value" ])
preactElementDefine("reactive-button-batch", ReactiveButtonBatch, [ "initial-value", "count" ])
