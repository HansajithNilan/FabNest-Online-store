import jwt from 'jsonwebtoken'


const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Get token from headers

    if (!token) {
        return res.status(401).json({ message: "Unauthorized. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded; // Attach decoded user data to the request
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export default authMiddleware
