import { signToken, verifyToken } from '.';
import jwt from 'jsonwebtoken';

describe('#signToken:', () => {
  it('return token', () => {
    const token = signToken({test: 'hello word.'});
    const decode = jwt.decode(token);
    expect(decode.test).to.eq('hello word.');
  });
});

describe('#verifyToken', () => {
  it('return token', () => {
    const token = signToken({test: 'hello word.'});
    const decode = verifyToken(token);
    expect(decode.test).to.eq('hello word.')
  });
});