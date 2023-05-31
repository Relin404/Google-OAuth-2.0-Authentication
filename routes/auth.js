const express = require("express");

const {
  logoutRedirect,
  secretKeyRedirect,
  failureRedirect,
  googleCallback,
  homePageRedirect,
} = require("../controllers/auth");

const {
  checkLoggedIn,
  authenticateGoogleEmail,
  authenticateGoogleCallback,
} = require("../middlewares/auth");

const router = express.Router();

router.get("/auth/google", authenticateGoogleEmail);

router.get("/auth/google/callback", authenticateGoogleCallback, googleCallback);

router.get("/auth/logout", logoutRedirect);

router.get("/secret", checkLoggedIn, secretKeyRedirect);

router.get("/failure", failureRedirect);

router.get("/", homePageRedirect);

module.exports = router;
