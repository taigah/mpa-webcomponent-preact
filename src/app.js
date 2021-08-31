import { ReactiveButton } from "./components/ReactiveButton.js"
import { ReactiveButtonBatch } from './components/ReactiveButtonBatch.js'
import { preactElementDefine } from './preactElementDefine.js'

preactElementDefine("reactive-button", ReactiveButton)
preactElementDefine("reactive-button-batch", ReactiveButtonBatch)
