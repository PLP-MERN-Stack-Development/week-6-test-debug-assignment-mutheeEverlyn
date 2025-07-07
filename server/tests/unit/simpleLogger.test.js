const simpleLogger = require('../../middleware/simpleLogger');

describe('simpleLogger middleware', () => {
  it('should call next and log the request details', () => {
    const req = { method: 'GET', url: '/test' };
    const res = {};
    const next = jest.fn();
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    simpleLogger(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('[GET] /test'));

    consoleSpy.mockRestore();
  });
}); 