const passport = require("passport");

const checkLoggedIn = (req, res, next) => {
  console.log(`Current user is: ${req.user}`);
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn)
    return res.status(401).json({
      error: "User not logged in!",
    });

  next();
};

const authenticateGoogleEmail = () => {
  passport.authenticate("google", {
    scope: ["email"],
  });
};

const authenticateGoogleCallback = () => {
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: true,
  });
};

module.exports = {
  checkLoggedIn,
  authenticateGoogleEmail,
  authenticateGoogleCallback,
};
