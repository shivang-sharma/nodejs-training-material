const dataStore = require('../../dao/dataStore');

export function getAllUserService() {
    return dataStore.getAllUsers()
}

export function getUserService(id) {
    return dataStore.getUser(id);
}