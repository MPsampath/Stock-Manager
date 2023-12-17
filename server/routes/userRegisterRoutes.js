import {newUser,getUsers,getUsersById, updateUser, deleteUser} from '../controllers/userRegisterController';

const routes = (app) => {
    app.route('/users')
        .get(getUsers)
        // POST endpoint
        .post(newUser);

    app.route('/userById/:UserId')
    .get(getUsersById)
    .put(updateUser)
    .delete(deleteUser);
}

export default routes;