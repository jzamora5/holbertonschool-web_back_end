const app = require('../full_server/server.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
process.argv[2] = './database.csv';

chai.use(chaiHttp);

describe('Server!', () => {
  it('welcomes user to the api', (done) => {
    chai
      .request(app)
      .get('/students/CS')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equals(
          'List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie'
        );
        done();
      });
  });
});
