import register from 'preact-custom-element'

export function preactElementDefine(name, component) {
  register(component, name)
}
