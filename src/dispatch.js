import camelCase from 'lodash/camelCase'
import Vue from 'vue'
import actions from './actions'
const getActionofComponent = actions.getActionofComponent
const getValueOfComponent = actions.getValueOfComponent

Vue.directive('dispatch', function () {
  try {
    const el = this.el
    const store = this.vm.$store
    const action = this.expression
    const key = camelCase(this.arg)
    const _this = this
    this.el.addEventListener(getActionofComponent(el), function () {
      if (typeof key === 'undefined' || key === '_') {
        store.dispatch(action, getValueOfComponent(_this))
      } else {
        store.dispatch(action, key, getValueOfComponent(_this))
      }
    })
  } catch (e) {
    throw Error('[Directive-Dispatch] cannot get action of the target component')
  }
})
