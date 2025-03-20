export const auth = () => (req, res, next) => {
  console.log("passing by auth");
  res.locals.userid = 123
  req.user = { userid: 1234 };
  next();
};
