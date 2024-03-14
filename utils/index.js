export function debounce(fn, delay = 500) {
  let timer

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

export function throttle(fn, delay = 500) {
  let timer = null

  return (...args) => {
    if (timer) return
    timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, delay)
  }
}
