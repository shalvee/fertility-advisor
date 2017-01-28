/* * * * * * * * * * * * * * * * *
 *                               *
 * Copyright Krushn Dayshmookh.  *
 *                               *
 * * * * * * * * * * * * * * * * */





$(document).ready(function () {


	$(".button-collapse").sideNav();
	$("ul.tabs").tabs();
	$("select").material_select();
	//$('.modal').modal();
	$(".btn").addClass("waves-effect");
	$('.datepicker').pickadate({
        formatSubmit: 'mmmm d, yyyy',
		hiddenName: true,
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15 // Creates a dropdown of 15 years to control year
	});




	






	/* ====================== location setting ========================== */
	$("#location-toggle").click(function () {
		//var getLocation = 0;
		var state = this.innerHTML;
		if (state === "On") {
			this.innerHTML = "Off";
		}
		if (state === "Off") {
			this.innerHTML = "On";
		}
	});
	/* ====================== *************************** ========================== */
	
    
    $("#setdata").click(function () {
		document.getElementById("temp-div").innerHTML = event.feature.getProperty("temperature") + "&deg;C";
		document.getElementById("press-div").innerHTML = event.feature.getProperty("pressure") + "Pa";
	});



    $("#harvest-info").fadeOut();





});




function windowClose() {
	if (confirm("Are you sure?")) {
		window.close();
	}
}





$("#add-expense-btn").click(function () {
	$("#expense-record-container").append(
		"<div class='col s3'>" + $("#expense-input-description").val() + "</div>" +
		"<div class='col s3'>" + $("#expense-input-date").val() + "</div>" +
		"<div class='col s3 right-align green-text'>" + $("#expense-input-amt_in").val() + "</div>" +
		"<div class='col s3 right-align red-text'>" + $("#expense-input-amt_out").val() + "</div>"
	);
});




