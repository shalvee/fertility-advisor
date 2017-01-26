$("#select-crop-btn").click(function(){
    crop = $("#crop-input").val();
    console.log(crop);
    $("#crop-head").html("<h3>"+"Rice"+"</h3>");
    console.log("done");
    $("#harvest-info").fadeIn();
});