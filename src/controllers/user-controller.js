const UserService = require('../services/user-service');

const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common/index');

const userService = new UserService();

async function createUser(req, res) {
    try {
        const user = await userService.signup(req.body);
        SuccessResponse.data = user;
        SuccessResponse.message = 'Successfully created the user';
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createUser
}