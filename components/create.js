const flatten = arr => Array.prototype.concat(...arr)
const a = val => Array.isArray(val) ? val : [val]
// const a = val => Array.isArray(val) ? val : flatten([val])

const create = ({ X = () => (1), Y = () => (1), Z = () => (1) }) => {
  let point = []

  a(X()).forEach(_X => {
    a(Y()).forEach(_Y => {
      a(Z()).forEach(_Z => {
        point.push({ X: _X, Y: _Y, Z: _Z })
      })
    })
  })

  return { POINT: (point.length === 1 ? point[0] : point) }
}

module.exports = { create }
