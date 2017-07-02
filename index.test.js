var Chance = require('chance'),
    chance = new Chance();

const createHttpMiddleware = require('./index');

describe('http middleware', () => {
  let subject;
  let fetch;
  let promise;
  let then;
  let action;
  let store;
  let next;

  beforeEach(() => {
    action  = {};
    fetch   = jest.fn();
    next    = jest.fn();
    subject = createHttpMiddleware(fetch);
  });

  it('has the right signature', () => {
    subject(store)(next)(action);
  });

  describe('with an http action', () => {
    let url;

    beforeEach(() => {
      url = chance.url();
      action = {
        type: 'HTTP_CMD',
        url: url
      };
    });

    it('calls fetch', () => {
      subject(store)(next)(action);
      expect(fetch.mock.calls.length).toBe(1);
      expect(fetch.mock.calls[0][0]).toBe(url);
    });
  });
});
