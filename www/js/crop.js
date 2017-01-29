

var riceTime = 120 * 24 * 60 * 60 * 1000;
var riceYield = 2500;
var waterInterval = 15 * 24 * 60 * 60 * 1000;


$("#select-crop-btn").click(function(){
    crop = $("#crop-input").val();
    console.log(crop);
    $("#crop-head").html("<h3>"+"Rice"+"</h3>");
    console.log("done");
    $("#harvest-info").fadeIn();
});



$("#select-crop-date-btn").click(function(){
    cropDate = Date.parse($("#crop-date").val());
    console.log(cropDate);
    console.log($("#crop-date").val());
    harvestDate = cropDate + riceTime;
    $("#expected-harvest-date").html(new Date(harvestDate));
    
    cropArea = $("#land-area").val();
    harvestQuantity = cropArea * riceYield;
    $("#expected-harvest-quantity").html(harvestQuantity + " kg");
    console.log("done");
});




$("#add-fertilizer-btn").click(function () {
	$("#fertilizer-record-container").append(
		"<div class='col s6'>" + $("#fertilizer-name").val() + "</div>" +
		"<div class='col s6'>" + $("#fertilizer-date").val() + "</div>" 
	);
});



$("#add-activity-btn").click(function () {
	$("#activity-record-container").append(
		"<div class='col s6'>" + $("#activity-name").val() + "</div>" +
		"<div class='col s6'>" + $("#activity-date").val() + "</div>" 
	);
});


$("#add-water-btn").click(function () {
    now = new Date();
	$("#water-record-container").append(
		"<div class='col s12 grey-text'>" + now + "</div>" 
	);
    next = new Date (Date.parse(now) + waterInterval);
    $("#next-water").html(next);
    
});