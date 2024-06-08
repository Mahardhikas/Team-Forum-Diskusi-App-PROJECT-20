module.exports = {
    home(req, res) {
        res.render('home', { 
            title: 'Home',
            user: req.session.username
        });
    }
};