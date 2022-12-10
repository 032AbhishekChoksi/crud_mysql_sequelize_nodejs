module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            defaultValue: 'test@gmail.com'
        },
        gender: {
            type: DataTypes.STRING
        }
    }, {
        // timestamps: false,
        // createdAt: false,
        // updatedAt: false,
        // engine: 'MYISAM',
        createdAt: 'create_at',
        updatedAt: 'modified_at',
    });
};