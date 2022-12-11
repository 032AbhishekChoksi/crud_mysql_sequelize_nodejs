var db = require('../models');
const Users = db.users;

var addUser = async (req, resp) => {

    // let response = {
    //     data: 'ok'
    // }
    /*
    let data = await Users.build({ name: 'Test', email: 'test2@gmail.com' });
    let response = await data.save();
    */

    let data = await Users.create({ name: 'demolast', email: 'demolast@gmail.com' });

    /*
    // Update
    data.name = 'Dummy';
    data.save();
    */
    // Delete
    // data.destroy();

    // Reload
    data.name = 'Dummy';
    data.reload(); // data.save();

    resp.status(200).json(data.dataValues);
}

module.exports = {
    addUser
}