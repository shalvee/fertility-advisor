

var riceTime = 120 * 24 * 60 * 60 * 1000;



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
    console.log("done");
});