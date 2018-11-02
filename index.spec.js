const expect = require('chai').expect

const sum = require('./index')

it('Should add a and b', () => {
    expect(sum(1,2)).to.equal(3)
    expect(sum(5,7)).to.equal(12)
    expect(sum(-1,1)).to.equal(0)
})