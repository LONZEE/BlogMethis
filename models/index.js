const Comment = require('./Comment');
const Project = require('./Project');
const User = require('./User');

User.hasMany(Project, {
    foreignKey: 'project_manager',
    onDelete: 'CASCADE'
});

Project.belongsTo(User, {
    foreignKey: 'project_manager'
});

Project.hasMany(Comment, {
    foreignKey: 'project_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Project, {
    foreignKey: 'project_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { Comment, Project, User };