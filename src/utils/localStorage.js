export const fetchFromStorage = (key) => new Promise((resolve, reject) => {
  let fromStorage = localStorage.getItem(key)
  resolve(JSON.parse(fromStorage))
})

export const clearStorage = (...args) => new Promise((resolve, reject) => {
  args.forEach(key => localStorage.setItem(key, null))
  resolve()
})

export const persist = (key, value) => new Promise((resolve, reject) => {
  localStorage.setItem(key, JSON.stringify(value))
  resolve(key)
})
