import server from 'Server/app';
import request from 'supertest';

describe('login routers', () => {
  
  it('return 400 if the password is null', (done) => {
    request(server).post('/api/login').send({email: 'test@qq.com'})
    .expect(400,done);
  });

  it('return 400 if the email is null', (done) => {
    request(server).post('/api/login').send({password: '123456'})
    .expect(400,done);
  });

  it('return 200 if param is verify', (done) => {
    request(server).post('/api/login').send({email: 'test@qq.com', password: '123456'})
    .expect(200,done);
  });
});
