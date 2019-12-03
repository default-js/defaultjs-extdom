import Utils from "test/helpers/Utils";

const selectorTest = function(aSelector){
	let expected = find(aSelector).first();
	let selector = expected.selector();
	let element = find(selector).first();
	expect(element).toBe(expected);
};

describe("QuerySupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/QuerySupportTest.html"];
		done();
	});
	
	it("selector of an element with id", function(done){
		selectorTest("#data-selector-test-3");		
		done();
	});	
	
	it("selector of an element with a parent with id", function(done){		
		selectorTest("[data-selector-test-1]");		
		done();
	});
	
	it("selector of an element with no id in hierarchy", function(done){
		selectorTest("[data-selector-test-2]");		
		done();
	});
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});