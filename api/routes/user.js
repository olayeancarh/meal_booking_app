import Users from '../controllers/user';

module.exports = (app) => {
  app.get('/api', (req, res) => res
    .status(200)
    .send({
      message: 'Welcome',
    }));

  // Api route to create a new user
  app.post('/api/v1/users', Users.signUp);
  // Api route to get all users in the system
  app.get('/api/v1/users', Users.fetchAllUsers);
  // Api route to edit a user
  app.put('/api/v1/users/:userId', Users.updateAUser);
  // Api route to delete a user
  app.delete('/api/v1/users/delete/:userId', Users.deleteAUser);
};
