exports.isAuth = (req, res, next) => {
    if (!req.session.userID) next();
    else res.redirect('/');
}