import axios from 'axios';

describe('Another API', () => {
  it('should return a valid response', async () => {
    const url = app.getUrl('/');
    const response = await axios.get(url);

    expect(response.data).toEqual({
      success: true,
      payload: 'Hello world!',
    });
  });
});
