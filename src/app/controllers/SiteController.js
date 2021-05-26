
class SiteController {
    //[GET] home page
    home(req, res) {
        res.render('home', {
            title: 'Home',
            style: 'main.css'
        });
    }

    //[GET] form page
    form(req,res){
        res.render('form', {
            title: 'Form',
            style: 'main.css'
        });
    }

}

module.exports = new SiteController;