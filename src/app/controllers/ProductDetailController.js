
class ProductDetailController {
    productDetail(req, res) {
        res.render('product_detail', {
            title: 'Detail',
            style: 'main.css'
        });
    }
}

module.exports = new ProductDetailController;