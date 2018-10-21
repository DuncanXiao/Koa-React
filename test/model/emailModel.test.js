import EmailModel from 'Model/emailModel';

describe('#EmailModel', () => {
  const emailModel = new EmailModel();
  const mockData = {email: 'test@qq.com', password: '123'}

  describe('#insertToSql', () => {
    afterEach( async () => {
      await emailModel.deleteToSql({
        where: mockData
      });
    });

    it('return data from insert sql', async () => {
      const data = await emailModel.insertToSql(mockData);
      expect(data.email).to.eq(mockData.email);
    });
  });

  describe('#deleteToSql', () => {
    it('return 1 if database has specific data', async () => {
      await emailModel.insertToSql(mockData);
      const data = await emailModel.deleteToSql({
        where: mockData
      });
      expect(data).to.eq(1);
    });

    it('return 0 if database has not specific data', async () => {
      const data = await emailModel.deleteToSql({
        where: mockData
      });
      expect(data).to.eq(0);
    });
  });

  describe('#updateToSql', () => {
    const updateData = {email: 'test2@qq.com', password:'12345'};

    afterEach(async () => {
      await emailModel.deleteToSql({
        where: updateData
      });
    });

    it('return array 1 if database update new data', async () => {
      await emailModel.insertToSql(mockData);
      const data = await emailModel.updateToSql(updateData, {
        where: mockData
      });
      expect(data[0]).to.eq(1);
    });

    it('return array 0 if database update itself', async () => {
      await emailModel.insertToSql(updateData);
      const data = await emailModel.updateToSql(updateData, {
        where: updateData
      });
      expect(data[0]).to.eq(0);
    });
  });
});