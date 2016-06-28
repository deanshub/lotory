let passport = require('passport')
let LocalStrategy = require('passport-local').Strategy

module.exports = {
  register: (app)=>{
    app.use(passport.initialize())
    app.use(passport.session())

    passport.use(new LocalStrategy(
      function(username, password, done) {
        if (!username || !password) { return done(null, false, { message: 'Not all fields filled' }) }
        if (username.toLowerCase()===process.env.USERNAME && password===process.env.PASSWORD){
          return done(null, {username, password})
        }

        return done(null, false, { message: 'Incorrect username or password.' })
      }
    ))

    passport.serializeUser(function(user, done) {
      done(null, user)
    })
    passport.deserializeUser(function(user, done) {
      done(null, user)
    })

    app.get('/api/loggedin', (req, res)=>{
      res.json({
        authenticated:req.isAuthenticated(),
      })
    })

    app.post('/login', passport.authenticate('local',{
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true,
    }))
  },

  isAdmin: function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated())
      return next()
    else
      res.redirect('/login')
  },
}
