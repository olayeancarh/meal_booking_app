// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../index';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Meals', () => {
  // Test to get all meals
  it('should get all meals', (done) => {
    chai.request(app)
      .get('/api/v1/meals')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  // Test to add a single meal
  it('should add a meal', (done) => {
    const meal = {
      name: 'Ewa Agoin and Garri',
      userId: 1,
      price: 550,
      image: 'beansfood.jpg',
    };
    chai.request(app)
      .post('/api/v1/meals')
      .send(meal)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to update meal
  it('should update meal', (done) => {
    const id = 4;
    const meal = {
      name: 'Potato Pottage',
      userId: 1,
      price: 5500,
      image: 'potatofood.jpg',
    };
    chai.request(app)
      .put(`/api/v1/meals/${id}`)
      .send(meal)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('data');
        res.body.data.should.have.property('name');
        res.body.data.should.have.property('userId');
        res.body.data.should.have.property('price');
        done();
      });
  });

  // Test to delete meal
  it('should delete meal', (done) => {
    const id = 4;
    chai.request(app)
      .delete(`/api/v1/meals/delete/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        done();
      });
  });
});

describe('Menus', () => {
  // Test to get all menus
  it('should get all menus', (done) => {
    chai.request(app)
      .get('/api/v1/menus')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  // Test to add a single menu
  it('should add a menu', (done) => {
    const menu = {
      mealId: 12,
      userId: 1,
    };
    chai.request(app)
      .post('/api/v1/menus')
      .send(menu)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('Orders', () => {
  // Test to get all orders
  it('should get all orders', (done) => {
    chai.request(app)
      .get('/api/v1/orders')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  // Test to add a single order
  it('should add a order', (done) => {
    const order = {
      userId: 1,
      menuId: 1,
      deliveryPoint: 'Magodo',
    };
    chai.request(app)
      .post('/api/v1/orders')
      .send(order)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to update order
  it('should update order', (done) => {
    const id = 2;
    const order = {
      userId: 1,
      menuId: 1,
      deliveryPoint: 'Magodo Estate',
    };
    chai.request(app)
      .put(`/api/v1/orders/${id}`)
      .send(order)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
