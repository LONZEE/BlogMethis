const sequelize = require('../config/connection');
const { User, Project, Comment } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });


    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    
    const projects = [];
    for (const project of projectData) {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const createdProject = await Project.create({
            ...project,
            project_start_date: new Date(), // replace with actual start date
            project_end_date: new Date(), // replace with actual end date
            project_status: 'In Progress', // replace with actual status
            project_manager: randomUser.id, // replace with actual manager
            user_id: randomUser.id,
        });
        projects.push(createdProject);
    }
    
    for (const comment of commentData) {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const randomProject = projects[Math.floor(Math.random() * projects.length)];
        await Comment.create({
            ...comment,
            comment_text: 'This is a comment',
            user_id: randomUser.id,
            post_id: randomProject.id,
        });
    }
    
    process.exit(0);
}


    
    seedDatabase();


//     const projects = [];
// for (const project of projectData) {
//     const randomUser = users[Math.floor(Math.random() * users.length)];
//     const createdProject = await Project.create({
//         ...project,
//         project_start_date: new Date(), // replace with actual start date
//         project_end_date: new Date(), // replace with actual end date
//         project_status: 'In Progress', // replace with actual status
//         project_manager: randomUser.id, // replace with actual manager
//         user_id: randomUser.id,
//     });
//     projects.push(createdProject);
// }

// for (const comment of commentData) {
//     const randomUser = users[Math.floor(Math.random() * users.length)];
//     const randomProject = projects[Math.floor(Math.random() * projects.length)];
//     await Comment.create({
//         ...comment,
//         comment_text: 'This is a comment', // replace with actual comment
//         post_id: randomProject.id, // use project ID as post ID
//         user_id: randomUser.id,
//     });
// }