const sequelize = require('../config/connection');
const { User, Project, Comment } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });
    
      for (const project of projectData) {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        await Project.create({
          ...project,
            project_start_date: new Date(), // replace with actual start date
            project_end_date: new Date(), // replace with actual end date
            project_status: 'In Progress', // replace with actual status
            project_manager: randomUser.id, // replace with actual manager
            user_id: randomUser.id,
            // project_description: 'This is a project description', // replace with actual description
        //   user_id: users[Math.floor(Math.random() * users.length)].id,
        });
      }
    
      process.exit(0);
    };
    
    seedDatabase();


    