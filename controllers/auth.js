const path = require("path");

const logoutRedirect = (req, res) => {
  req.logOut(); // Removes req.user and clears any logged-in session
  return res.redirect("/");
};

const secretKeyRedirect = (req, res) => {
  return res.send(`Your personal secret value is 42!`);
};

const failureRedirect = (req, res) => {
  return res.send("Failed to login!");
};

const googleCallback = (req, res) => {
  console.log("Google called us back!");
};

const homePageRedirect = (req, res) => {
  return res.sendFile(path.join(__dirname, "..", "public", "index.html"));
};

module.exports = {
  logoutRedirect,
  secretKeyRedirect,
  failureRedirect,
  googleCallback,
  homePageRedirect,
};
