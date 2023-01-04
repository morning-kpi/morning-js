
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const { expect } = chai;

const { Morning } = require('../dist/index');
const client = new Morning('foo-bar');

describe('Morning class', () => {
	it('should create an instance using its constructor', () => {
    const clientConstructor = new Morning('foo-bar');
		expect(clientConstructor, 'example should exist').to.exist; // tslint:disable-line:no-unused-expression
	});
});

describe('Morning client', () => {
  beforeEach(() => {
    sinon.stub(client.client, 'get').resolves();
  });
  afterEach(() => {
    sinon.restore();
  });
	it('should correctly call a metric path', async () => {
    client.metrics.get('foo');
    const endpoint = `/metrics/foo`;
		expect(client.client.get).to.have.been.calledWith(endpoint); // tslint:disable-line:no-unused-expression
	});
});
