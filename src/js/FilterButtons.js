import { getOne, getAll } from './utils/helpers.js'

const placeholder = document.querySelector('.placeholder')

export default class FilterButtons {
  constructor(sel) {
    this.el = getOne(sel)
    this.artists = getAll('.artist')
    this.filterHeadlines = getAll('.filter-headlines h4')
    this.filterFooterline = getAll('.filter-footerline h3')

    const buttons = Array.from(this.el.querySelectorAll('button'))
    buttons.forEach(button => {
      button.addEventListener('click', e => this.onClick(e))
    })
  }

  onClick(event) {
    const id = event.target.id

    this.filterHeadlines.forEach(headline => {
      if (headline.classList.contains(id)) {
        headline.classList.remove('hidden')
      } else {
        headline.classList.add('hidden')
      }
    })

    this.filterFooterline.forEach(footerline => {
      if (footerline.classList.contains(id)) {
        footerline.classList.remove('hidden')
      } else {
        footerline.classList.add('hidden')
        console.log(footerline)
      }
    })

    this.artists.forEach(artist => {
      if (artist.classList.contains(id)) {
        artist.classList.remove('hidden')
      } else {
        artist.classList.add('hidden')
      }
    })
  }
}
