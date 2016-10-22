module.exports.homePage = function(req, res) {
        res.render('index', { title: 'Express' });
};

//locationDetails
module.exports.locationDetails = function(req,res){
  res.render('index',{ title : 'Location Details'});
};

//rating
module.exports.rating = function(req,res){
  res.render('index',{title : 'rating location'});
};
