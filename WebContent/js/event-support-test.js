const EventSupportTestContainer = find(".event-support-test");
EventSupportTestContainer.find("button").on("click", function(aEvent){
	console.log("catching an event:", arguments);
});