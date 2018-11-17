import Joi from 'joi';
import loginSchema from 'Model/schema/loginSchema';

describe('Validate login', () => {
  it('error is null if through verification', () => {
    const mockData = {
      email: 'test1@qq.com',
      password: '123456'
    }
    const result = Joi.validate(mockData, loginSchema.body);
    expect(result.value).deep.equal(mockData);
    expect(result.error).eq(null);
  });

  it('error is not null if do not through verification', () => {
    const mockData = {
      email: 'test1@qq.com'
    }
    const result = Joi.validate(mockData, loginSchema.body);
    expect(result.error.message).eq('child "password" fails because ["password" is required]');
  });
});

