// const sequelize = require('../config/connection');
// const { User, Project, Comment } = require('../models');
// const { User, Project, Comment } = require('../models');

const seedUsers = require('./userData');
const seedProjects = require('./projectData');
const seedComments = require('./commentData');

const sequelize = require('../config/connection');
const seedDatabase = async () => {

await sequelize.sync({ force: true });

await seedUsers();
await seedProjects();
await seedComments();

process.exit(0);

};



//     await sequelize.sync({ force: true });
//     console.log(seedUsers);

//     const usersData = await seedUsers();
//     console.log(usersData);

//     if (!usersData.every(user => user.password)) {
//         console.error('All users must have a password');
//         process.exit(1);
//     }


//     const users = await User.bulkCreate(usersData, {
//         individualHooks: true,
//         returning: true,
//     });
    
//     if (users.length > 0) {
//         for (const project of seedProjects) {
//             const randomUser = users[Math.floor(Math.random() * users.length)];
//             await Project.create({
//                 ...project,
//                 project_start_date: new Date(), // replace with actual start date
//                 project_end_date: new Date(), // replace with actual end date
//                 project_status: 'In Progress', // replace with actual status
//                 project_manager: randomUser.id, // replace with actual manager
//                 user_id: randomUser.id,
//             });
//         }
    
//         await seedComments(); // move this inside the if block
//     } else {
//         console.log('No users found. Cannot seed projects.');
//     }
    
//     process.exit(0);
// };

seedDatabase();
