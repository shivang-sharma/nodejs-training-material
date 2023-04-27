const Api404Error = require('./api404Error')

const user = await User.getUserById(req.params.id)
if (user === null) {
 throw new Api404Error(`User with id: ${req.params.id} not found.`)
}
