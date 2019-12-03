document.ready(function() {
	console.log("document ready");

});
document.find(".test1").on("click", (function(aEvent) {
	console.log("this:", this);
	console.log("aEvent:", aEvent);
}).bind({
	test : "value"
}));

document.find(".test1").on("click", ".test121", (function(aEvent) {
	console.log(".test121");
	console.log("this:", this);
	console.log("aEvent:", aEvent);
}).bind({
	test : "value"
}));