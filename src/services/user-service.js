const UserRepo = require('../repositories/user-repo');

const { StatusCodes } = require('http-status-codes'); 
const AppError = require('../utils/errors/app-error');

const userRepo = new UserRepo();

class UserService {
    async signup (data){
        try {
            const response = await userRepo.create(data);
            return response;
        } catch (error) {
            if (error.statusCode == StatusCodes.BAD_REQUEST){
                throw error;
            }
            throw new AppError('Cannot create the resource', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = UserService;