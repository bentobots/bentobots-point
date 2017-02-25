import create from './create'

it('transparently creates a point', () => {
  const result = create({X: 1, Y: 2, Z: 3})
  const expected = {POINT: {X: 1, Y: 2, Z: 3}}
  expect(result).toEqual(expected)
})

it('creates points with single array value', () => {
  const result = create({X: [1, 2, 3], Y: 2, Z: 3})
  const expected = {
    POINT: [
      {X: 1, Y: 2, Z: 3},
      {X: 2, Y: 2, Z: 3},
      {X: 3, Y: 2, Z: 3}
    ]
  }
  expect(result).toEqual(expected)
})

it('creates points with multiple array value', () => {
  const result = create({X: [1, 2, 3], Y: [7, 8, 9], Z: 3})
  const expected = {
    POINT: [
      {X: 1, Y: 7, Z: 3},
      {X: 1, Y: 8, Z: 3},
      {X: 1, Y: 9, Z: 3},

      {X: 2, Y: 7, Z: 3},
      {X: 2, Y: 8, Z: 3},
      {X: 2, Y: 9, Z: 3},

      {X: 3, Y: 7, Z: 3},
      {X: 3, Y: 8, Z: 3},
      {X: 3, Y: 9, Z: 3}
    ]
  }
  expect(result).toEqual(expected)
})

// console.log(create({X: [1, 2], Y: 2, Z: 3}))
// console.log(create({X: 1, Y: 2, Z: 3}))
// console.log(create({X: [1, 2, 3], Y: 2, Z: 3}))
