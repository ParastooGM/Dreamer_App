const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    // Each protected request needs to recieve a token in the requests header.

    const token = req.header("x-auth-token");

    // Check for token
    if (!token)
        return res.status(401).json({ msg: "User unauthorozied, no token." });

    try {
        // Verify token
        const decoded = jwt.verify(token, config.get("jwtSecret"));

        // Add user from payload
        req.user = decoded; // Can add any parameter, here the user associated with the token is added.
        next(); // Calls next piece of middleware
    } catch (e) {
        res.status(400).json({ msg: "Token invalid." });
    }
}

module.exports = auth;