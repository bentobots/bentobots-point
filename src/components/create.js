// var R = require('ramda')
// var Either = require('ramda-fantasy').Either

const wrap = val => Array.isArray(val) ? val : [val]
const unwrap = val => val.length === 1 ? val[0] : val
// const flatten = arr => Array.prototype.concat(...arr)
// const a = val => Array.isArray(val) ? val : flatten([val])

const create = ({ X = 1, Y = 1, Z = 1 }) => {
  let point = []

  wrap(X).forEach(_X =>
    wrap(Y).forEach(_Y =>
      wrap(Z).forEach(_Z =>
        point.push({ X: _X, Y: _Y, Z: _Z })
      )
    )
  )

  return { POINT: unwrap(point) }
}

// const create = R.curry(({ X = 1, Y = 1, Z = 1 }) => {
//   if (!_.isNumber(X)) return Either.Left(new Error('Input must be numeric'))

//   return Either.Right(price + (tax * price)) // <--Wrap result in Either.Right
// })

// console.log(create({X: 3}))

export default create
