module.exports = {
    dialect: 'postgres',
    host: 'ep-lingering-dew-a53memij.us-east-2.aws.neon.tech',
    username: 'neondb_owner',
    password: 'JSiOd60mClRQ', 
    database: 'neondb',
    define: {
        timestamps: true,
        underscored: true
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
};
