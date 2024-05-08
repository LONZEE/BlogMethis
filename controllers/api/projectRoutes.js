const router = require('express').Router();
const { Project, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all projects
router.get('/', async (req, res) => {
    try {
        const projectData = await Project.findAll({
        include: [
            {
            model: User,
            attributes: ['name'],
            },
            {
            model: Comment,
            attributes: ['comment_text'],
            },
        ],
        });
        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
    });

// GET one project
router.get('/:id', async (req, res) => {
    try {
        const projectData = await Project.findByPk(req.params.id, {
        include: [
            {
            model: User,
            attributes: ['name'],
            },
            {
            model: Comment,
            attributes: ['comment_text'],
            },
        ],
        });

        if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
        }

        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
    });

// POST a new project   
router.post('/', withAuth, async (req, res) => {
    try {
        const newProject = await Project.create({
        ...req.body,
        user_id: req.session.user_id,
        });
        res.status(200).json(newProject);
    } catch (err) {
        res.status(400).json(err);
    }
    }); 

// PUT update a project

router.put('/:id', withAuth, async (req, res) => {
    try {
        const projectData = await Project.update(req.body, {
        where: {
            id: req.params.id,
        },
        });

        if (!projectData[0]) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
        }

        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
    }
);

// DELETE a project
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const projectData = await Project.destroy({
        where: {
            id: req.params.id,
        },
        });

        if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
        }

        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
    });

module.exports = router;