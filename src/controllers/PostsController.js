const Post = require('../models/Post')
const User = require('../models/User')

function parseDateString(dateString) {
    if (!dateString) {
      return new Date(); 
    }
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}T00:00:00`);
}

module.exports = {
    async postRegister(req, res){
        const { user_id } = req.params;
        const { title, summary, text, total_likes, available_at } = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.json({ error: 'User not found' }).status(400);
        }

        const available_at_formatted = parseDateString(available_at)

        const post = await Post.create({
            user_id,
            title, 
            text,
            summary,
            total_likes,
            available_at: available_at_formatted
        })

        return res.json(post).status(200);
    },

    async findAll(req, res) {
        const { user_id } = req.params;
    
        const user = await User.findByPk(user_id);
    
        if (!user) {
            return res.json({ error: 'User not found' }).status(400);
        }
    
        const posts = await Post.findAll({
            where: {
                user_id: user_id
            }
        });
    
        return res.json(posts).status(200);
    },

    async postUpdate(req, res) {
        const { user_id, id } = req.params;
        const { title, text, summary, available_at } = req.body;
    
        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
    
        const post = await Post.findOne({
            where: {
                id,
                user_id
            }
        });
    
        if (!post) {
            return res.status(404).json({ error: 'Post not found or does not belong to user' });
        }

        const available_at_formatted = parseDateString(available_at)
    
        await Post.update({ 
            title,
            text, 
            summary, 
            available_at 
        },
            {
                where: {
                    id,
                    user_id
                }
            }
        );
    
        return res.status(200).json({ message: 'Post updated successfully' });
    }
}