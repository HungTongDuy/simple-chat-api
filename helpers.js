const ROLE_MEMBER = require('./config/constants').ROLE_MEMBER;
const ROLE_CLIENT = require('./config/constants').ROLE_CLIENT;
const ROLE_OWNER = require('./config/constants').ROLE_OWNER;
const ROLE_ADMIN = require('./config/constants').ROLE_ADMIN;

// Set user info from request
exports.setUserInfo = function setUserInfo(request) {
    const getUserInfo = {
        _id: request._id,
        first_name: request.profile.first_name,
        last_name: request.profile.last_name,
        email: request.email,
        role: request.role
    };

    return getUserInfo;
};

exports.getRole = function getRole(checkRole) {
    let role;

    switch (checkRole) {
        case ROLE_ADMIN:
            role = 4;
            break;
        case ROLE_OWNER:
            role = 3;
            break;
        case ROLE_CLIENT:
            role = 2;
            break;
        case ROLE_MEMBER:
            role = 1;
            break;
        default:
            role = 1;
    }

    return role;
};