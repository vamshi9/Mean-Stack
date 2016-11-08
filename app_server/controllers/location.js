module.exports.homePage = function(req, res) {
        res.render('location-list', { title: 'Home' });
};

module.exports.homeList = function(req, res) {
        res.render('location-list', { title: 'Home' });
};

//locationDetails
module.exports.locationDetails = function(req,res){
  res.render('location-info',{ title : 'Location Details'});
};

//rating
module.exports.rating = function(req,res){
  res.render('index',{title : 'rating location'});
};
