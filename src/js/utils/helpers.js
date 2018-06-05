export function getOne(sel) {
  return document.querySelector(sel)
}

export function getAll(sel) {
  return Array.from(document.querySelectorAll(sel))
}
