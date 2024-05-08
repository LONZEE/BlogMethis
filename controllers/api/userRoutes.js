const router = require('express').Router();
const { User } = require('../../models');


// GET all users
router.get('/', async (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });

// Route to sign up a new user

router.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.username = req.body.username;
            req.session.userId = newUser.id;

            res.status(200).json(newUser);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
);

// CREATE new user  
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

// LOGIN user
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        res.status(200).json({ message: 'You are now logged in!' });
    } catch (err) {
        res.status(400).json(err);
    }
});

// LOGOUT user

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;