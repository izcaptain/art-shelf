import { getOne } from './utils/helpers.js'

export default class Banner {
  constructor(sel) {
    this.el = getOne(sel)
    this.el.addEventListener('click', e => this.removeBanner())
  }

  removeBanner() {
    this.el.remove()
  }
}
