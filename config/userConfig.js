module.exports.forward = function(req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        res.redirect('/index');
    }