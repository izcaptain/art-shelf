import { getOne, getAll } from './utils/helpers.js'

export default class FilterButtons {
  constructor(sel) {
    this.el = getOne(sel)
    this.artists = getAll('.artist')

    const buttons = Array.from(this.el.querySelectorAll('button'))
    buttons.forEach(button => {
      button.addEventListener('click', e => this.onClick(e))
    })
  }

  onClick(event) {
    const id = event.target.id
    this.artists.forEach(artist => {
      if (artist.classList.contains(id)) {
        artist.classList.remove('hidden')
      } else {
        artist.classList.add('hidden')
      }
    })
  }
}
