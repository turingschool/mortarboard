import * as u from '../utils'

describe('utils', () => {
  // Types & Logic...
  it('tests if the type isNotNil', () => {
    expect(u.isNotNil(undefined)).toBe(false)
    expect(u.isNotNil(null)).toBe(false)
    expect(u.isNotNil(0)).toBe(true)
    expect(u.isNotNil('')).toBe(true)
  })

  it('tests if the type isNotEmpty', () => {
    expect(u.isNotEmpty(undefined)).toBe(true)
    expect(u.isNotEmpty(null)).toBe(true)
    expect(u.isNotEmpty(0)).toBe(true)
    expect(u.isNotEmpty('')).toBe(false)
    expect(u.isNotEmpty([])).toBe(false)
    expect(u.isNotEmpty({})).toBe(false)
    expect(u.isNotEmpty([1, 2, 3])).toBe(true)
    expect(u.isNotEmpty({ hi: 'hello' })).toBe(true)
  })

  it('tests if the type isEmptyOrNil', () => {
    expect(u.isEmptyOrNil(undefined)).toBe(true)
    expect(u.isEmptyOrNil(null)).toBe(true)
    expect(u.isEmptyOrNil(0)).toBe(false)
    expect(u.isEmptyOrNil('')).toBe(true)
    expect(u.isEmptyOrNil([])).toBe(true)
    expect(u.isEmptyOrNil({})).toBe(true)
    expect(u.isEmptyOrNil([1, 2, 3])).toBe(false)
    expect(u.isEmptyOrNil({ hi: 'hello' })).toBe(false)
  })

  it('tests if the type isNotEmptyOrNotNil', () => {
    expect(u.isNotEmptyOrNotNil(undefined)).toBe(false)
    expect(u.isNotEmptyOrNotNil(null)).toBe(false)
    expect(u.isNotEmptyOrNotNil(0)).toBe(true)
    expect(u.isNotEmptyOrNotNil('')).toBe(false)
    expect(u.isNotEmptyOrNotNil([])).toBe(false)
    expect(u.isNotEmptyOrNotNil({})).toBe(false)
    expect(u.isNotEmptyOrNotNil([1, 2, 3])).toBe(true)
    expect(u.isNotEmptyOrNotNil({ hi: 'hello' })).toBe(true)
  })

  // Relation...
  it('tests if the relation is greater than zero', () => {
    expect(u.gt0(2)).toBe(true)
    expect(u.gt0(0)).toBe(false)
    expect(u.gt0(-1)).toBe(false)
    expect(u.gt0(null)).toBe(false)
    expect(u.gt0(undefined)).toBe(false)
    expect(u.gt0('')).toBe(false)
    expect(u.gt0('nope')).toBe(false)
  })

  // Lists...
  it('tests if nool is always the same empty List', () => {
    expect(u.nool).not.toBe([]) // pointer identity
    expect(u.nool).toEqual([]) // deep values
  })

  it('tests that mapIndexed returns the incremented index', () => {
    const result = u.mapIndexed((_, index) => index, ['A', 'B', 'C'])
    expect(result).toEqual([0, 1, 2])
  })

  // Objects...
  it('tests if noob is always the same empty Object', () => {
    expect(u.noob).not.toBe({}) // pointer identity
    expect(u.noob).toEqual({}) // deep values
  })
})
