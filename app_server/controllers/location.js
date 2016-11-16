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

module.exports.locationDetails = function(req,res){
    res.render('location-info',{
     title : 'Starbucks',
     pageHeader : {
       title : 'Starbucks'
     },
     location : {
       name : 'Starbucks',
       address : 'Inorbit Mall, Inorbit Mall Road',
       rating : 5,
       timings : {
         title : 'Opening Hours',
         openingHours : 'Monday to Saturday 10:30 AM - 10:00 PM'
       },
       menu : {
         title : 'Menu Offered',
         facilities : ['Hot Drinks','Food','Premium Wifi']
       },
       locationTitle : 'Location Map',
       reviewTitle : 'Add Review',
       customerReviews : 'Customer Reviews',
     },
     users : [{
       name :'Vamshi Bachenboina',
       comment : 'This is awesome place to try all the type of Coffeeeee! <3',
       date : '27 July 2016',
       rating : 5
     },{
       name : 'A G Praneeth',
       comment : ' Well! Not satifised with money to taste! :/',
       date : '27 July 2016',
       rating : 4,
     }]
   });
};


module.exports.addReview = function(req,res){
  res.render('add-review',{title : 'Add Review'});
};

module.exports.homeList = function(req, res) {
        res.render('location-list', { title: 'Home' });
};
