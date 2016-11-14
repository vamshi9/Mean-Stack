module.exports.homePage = function(req, res) {
        res.render('location-list', {
           title: 'vb9',
           pageHeader : {
              title : 'VB9',
              strapline : 'Find nearby Foodie Restaurants!'
           },
           locations : [{
             name : 'Starbucks',
             address : 'Inorbit Mall, Inorbit Mall Road',
             rating :5,
             facilities : ['Hot Drinks','Cold Drinks','Mixed Drinks'],
             distance : '2000m'
           },{
             name : 'Coffee Day',
             address : 'Urdu University Road,Telecom Nagar, Gachibowli',
             rating :4,
             facilities : ['Hot Drinks','Cold Drinks','Mixed Drinks'],
             distance : '300m'
           },{
             name : 'KFC',
             address : 'Indira Nagr, Gachibowli',
             rating :5,
             facilities : ['Burgers' ,'Veg', 'Non-Veg','Soft Drinks'],
             distance : '300m'
           }]
          });
};
module.exports.homeList = function(req, res) {
        res.render('location-list', { title: 'Home' });
};

//locationDetails
module.exports.locationDetails = function(req,res){
  res.render('location-info',{ title : 'Location Details'});
};

//rating
module.exports.addReview = function(req,res){
  res.render('add-review',{title : 'Add Review'});
};	
