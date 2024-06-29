const { User } = require('../models/index');

const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

class UserRepo {

    async create (data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            if (error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
                const message = [];
                error.errors.forEach(element => {
                    message.push(element.message);
                });
                throw new AppError(message, StatusCodes.BAD_REQUEST);
            }
            throw error;
        }
    }
}

module.exports = UserRepo;