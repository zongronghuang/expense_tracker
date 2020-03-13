module.exports = {
  authenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      console.log('login OK')
      return next()
    }

    console.log('login failed')
    res.redirect('/users/login')
  }
} 