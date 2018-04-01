var hotelData = require('../data/hotel-data');

module.exports.hotelGetAll = function (req,res) {
    console.log("GET the JSon");
    console.log(req.query);

    var offset= 0;
    var count = 5;

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset,10);
    }

    if(req.query && req.query.count){
        offset = parseInt(req.query.count,10);
    }
    var returnData = hotelData.slice(offset,offset+count);



    res
       .status(200)
       .json(returnData);

};

module.exports.hotelGetOne = function (req,res) {
    var hotelId = req.params.hotelId;
    var thisHotel = hotelData[hotelId];//URL parameter
    console.log("GET hotel ", hotelId);
    res
        .status(200)
        .json(thisHotel);

};


module.exports.hotelsAddOne = function (req,res) {
    console.log("Post a new Hotel");
    console.log(req.body);
    res
        .status(200)
        .json(req.body);
};