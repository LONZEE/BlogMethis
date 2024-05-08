const { Project } = require('../models');

const projectData = [
    {
        id: 1,
        project_name: "Project 1",
        project_description: "This is project 1",
        project_start_date: "2021-01-01",
        project_end_date: "2021-12-31",
        project_status: "In Progress",
        user_id: 1
    },
    {
        id: 2,
        project_name: "Project 2",
        project_description: "This is project 2",
        project_start_date: "2021-01-01",
        project_end_date: "2021-12-31",
        project_status: "In Progress",
        user_id: 2
    },
    {
        id: 3,
        project_name: "Project 3",
        project_description: "This is project 3",
        project_start_date: "2021-01-01",
        project_end_date: "2021-12-31",
        project_status: "In Progress",
        user_id: 3
    },
    {
        id: 4,
        project_name: "Project 4",
        project_description: "This is project 4",
        project_start_date: "2021-01-01",
        project_end_date: "2021-12-31",
        project_status: "In Progress",
        user_id: 4
    }
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;