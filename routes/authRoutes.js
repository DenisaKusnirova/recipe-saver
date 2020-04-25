const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    // Passport automatically attach logout function to req, when it's called, it takes a cookie and kills an id in it
    req.logout();
    res.redirect("/");
  });

  app.get("/api/currentUser", (req, res) => {
    res.send(req.user);
  });
};
