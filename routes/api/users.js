const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// User Model
const User = require("../../models/User");

// @route Post api/useres
// @desc Register a user
router.post("/", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields." });
    }

    // check foe existing user.
    User.findOne({ email }).then((user) => {
        if (user) return res.status(400).json({ msg: "User already exists." });

        const newUser = new User({
            name,
            email,
            password,
        });

        // Create salt & hash
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newUser.password, salt);

        newUser.password = hash;
        newUser.save().then((user) => {
            // Info to save in the payload of jwt
            jwt.sign({ id: user.id },
                config.get("jwtSecret"), { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                        },
                    });
                }
            );
        });
    });
});

// @route Post api/useres/auth
// @desc Authenticate a user
// @access Public
router.post("/auth", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: "Please enter all fields." });
    }

    // check foe existing user.
    User.findOne({ email }).then((user) => {
        if (!user) return res.status(400).json({ msg: "User does not exist." });

        // Validate password
        bcrypt.compare(password, user.password).then((isMatch) => {
            if (!isMatch)
                return res.status(400).json({ msg: "Invalid credentials." });

            jwt.sign({ id: user.id },
                config.get("jwtSecret"), { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                        },
                    });
                }
            );
        });
    });
});

// @route Post api/users/user
// @desc Get user data
// @access Private
router.get("/user", auth, (req, res) => {
    User.findById(req.user.id) // req.user added in the auth middleware
        .select("-password") // Remove the password from the response
        .then((user) => res.json(user));
});
module.exports = router;