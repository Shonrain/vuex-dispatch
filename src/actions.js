import captureFilters from './filter'

var getActionofComponent = function (el) {
  return {
    'INPUT-text': 'input',
    'INPUT-number': 'input',
    'INPUT-radio': 'click',
    'INPUT-checkbox': 'click',
    'TEXTAREA': 'input',
    'SELECT': 'change'
  }[el.nodeName + (el.nodeName === 'INPUT' ? '-' + el.type : '')]
}

var getValueOfComponent = function (component) {
  const el = component.el
  if (el.nodeName === 'INPUT' && el.type === 'checkbox') {
    return el.checked
  } else {
    const filters = captureFilters(component)
    if (filters && filters['number']) {
      if (!Number.isNaN(el.value)) {
        return Number(el.value.trim())
      } else {
        throw Error('[Directive-Dispatch] cannot get value of the target component')
      }
    }
    return el.value
  }
}

const actions = {
  getActionofComponent: getActionofComponent,
  getValueOfComponent: getValueOfComponent
}

export default actions
