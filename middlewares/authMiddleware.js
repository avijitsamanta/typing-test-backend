const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  console.log(req.header("Authorization"));
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.userId = verified.userId;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
