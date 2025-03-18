const auth = () => (req, res, next) => {
  const { admin } = req.query;

  if (admin === "john") {
    next();
  } else {
    res.status(401).json({ message: "user not authorized" });
  }
};

module.exports = {
  auth,
};
