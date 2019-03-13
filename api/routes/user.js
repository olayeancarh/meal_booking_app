import middleware from '../middleware';
import Users from '../controllers/user';

module.exports = (app) => {
  app.get('/api', (req, res) => res
    .status(200)
    .send({
      message: 'Welcome',
    }));

  // Api route to login
  app.post('/api/v1/users/login', Users.login);
  // Api route to create a new user
  app.post('/api/v1/users', middleware.checkToken, Users.signUp);
  // Api route to get all users in the system
  app.get('/api/v1/users', middleware.checkToken, Users.fetchAllUsers);
  // Api route to edit a user
  app.put('/api/v1/users/:userId', middleware.checkToken, Users.updateAUser);
  // Api route to delete a user
  app.delete('/api/v1/users/delete/:userId', middleware.checkToken, Users.deleteAUser);
};
