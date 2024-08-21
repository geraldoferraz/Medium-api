const User = require('../models/User');

module.exports = {
    async register(req, res) {
        try{
            const { name, email, password } = req.body;

            const userEmail = await User.findOne({
                where: {
                    email
                }
            })

            if(userEmail){
                return res.json({ error: 'Email already exists' }).status(400);
            }

            const password_hash = await bcrypt.hash(password, 6);

            const user = await User.create({
                id,
                name,
                email,
                password: password_hash
            });

            return res.status(200).json(user);

        } catch (error) {
            console.error(error);
            return res.json({ error: 'Error creating user' }).status(400);
        }
    },

    async index(req, res){
        const { id } = req.params;

        const user = await User.findByPk(id)

        return res.json(user).status(200)
    },

    async findAll(req, res){
        const users = await User.findAll()

        return res.json(users).status(200)
    }
};
