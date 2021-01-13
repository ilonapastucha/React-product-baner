const product = require('./product.json');

const newResponse = (isError, success, message, errorType) => ({
  isError,
  success,
  message,
  errorType
});

const createLag = (callback) => (req, resp) => setTimeout(() => callback(req, resp), Math.ceil(1000 * Math.random()) + Math.ceil(1000 * Math.random() / 2));

const handleApiProduct = createLag((req, resp) => resp.json(product));

const createMockServer = (app) => {
  app.get('/api/product', handleApiProduct);
};

module.exports = createMockServer;
