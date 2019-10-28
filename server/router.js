// - REQUIRE -
const controller = require('./controllers');

// - CONNECTIONS -
const router = (app) => {
  // login
  app.get('/login', controller.Account.loginPage);  // GET
  app.post('/login', controller.Account.login);  // POST
  // signup
  app.get('/signup', controller.Account.signupPage);  // GET
  app.post('/signup', controller.Account.signup);  // POST
  // logout
  app.get('/logout', controller.Account.logout);
  // maker
  app.get('/maker', controller.Domo.makerPage);  // GET
  app.post('/maker', controller.Domo.makeDomo);  // POST
  // /
  app.get('/', controller.Account.loginPage);  // DEFAULT
};

// - EXPORTS -
module.exports = router;
