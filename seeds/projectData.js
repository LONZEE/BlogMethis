const { Project } = require('../models');

const projectData = [
    {
        id: 1,
        project_name: "Project 1",
        project_description: "This is project 1",
        project_start_date: "2021-01-01",
        project_end_date: "2021-12-31",
        project_status: "In Progress",
        project_manager: "John Doe"
    },
    {
        id: 2,
        project_name: "Project 2",
        project_description: "This is project 2",
        project_start_date: "2021-01-01",
        project_end_date: "2021-12-31",
        project_status: "In Progress",
        project_manager: "Jane Doe"
    },
    {
        id: 3,
        project_name: "Project 3",
        project_description: "This is project 3",
        project_start_date: "2021-01-01",
        project_end_date: "2021-12-31",
        project_status: "In Progress",
        project_manager: "John Doe"
    },
    {
        id: 4,
        project_name: "Project 4",
        project_description: "This is project 4",
        project_start_date: "2021-01-01",
        project_end_date: "2021-12-31",
        project_status: "In Progress",
        project_manager: "Jane Doe"
    }
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;