/* 
    metodos: 
        index: retorna lista, 
        show: retorna 1, 
        store: criar uma sessão, 
        update: altarar sessão,
        destroy: deletar sessão
*/

const User = require('../models/User')

module.exports = {

    async store(req, res) {

        try {
            const { email } = req.body;
            let user = await User.findOne({ email: email });
            if (!user) {
                user = await User.create({ email })
            }
            return res.json(user);

        } catch (error) {
            console.log(error);
        }
    }
};