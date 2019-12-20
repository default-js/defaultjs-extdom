let READYEVENT_FIRED = false;
let READYEVENT_CORRECT;

document.ready(function(){
	READYEVENT_FIRED = true;
	READYEVENT_CORRECT == "complete";	
});


describe("EventSupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
	
	it("ready event fired", function(done){
		expect(READYEVENT_FIRED).toBe(true);
		expect(READYEVENT_CORRECT).toBe(true);
		done();
	});
	
	it("late ready function", function(done){
		document.ready(function(){
			done();
		});
	});	
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});