import { expect } from 'chai';
import sayHello from '../api/test';

describe('Testing Mocha and chai', () => {
  it('should say Hello guys!', () => {
    const str = sayHello();
    expect(str).to.equal('Hello Guys!');
  });
});
