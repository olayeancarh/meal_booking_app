import model from '../models';

const { User } = model;
class Users {
  static signUp(req, res) {
    const {
      firstName, lastName, email, password, role,
    } = req.body;
    return User.create({
      firstName, lastName, email, password, role,
    })
      .then(userData => res.status(201).send({ success: true, message: 'User successfully created', userData }));
  }

  static fetchAllUsers(req, res) {
    return User.findAll()
      .then(users => res.status(200).send(users));
  }

  static updateAUser(req, res) {
    const {
      firstName, lastName, email, password, role,
    } = req.body;
    return User.findByPk(req.params.userId)
      .then((user) => {
        user.update({
          firstName: firstName || user.firstName,
          lastName: lastName || user.lastName,
          email: email || user.email,
          password: password || user.password,
          role: role || user.role,
        })
          .then((updatedUser) => {
            res.status(200).send({
              message: 'User updated successfuly',
              data: {
                firstName: firstName || updatedUser.firstName,
                lastName: lastName || updatedUser.lastName,
                email: email || updatedUser.email,
                password: password || updatedUser.password,
                role: role || updatedUser.role,
              },
            });
          })
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }

  static deleteAUser(req, res) {
    User.findById(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(400).send({ message: 'User does not exist' });
        }
        return user.destroy()
          .then(() => res.status(200).send({
            message: 'User successfully deleted',
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
}

export default Users;
