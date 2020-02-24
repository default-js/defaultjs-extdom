import Utils from "@test/helpers/Utils";

describe("QuerySupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/QuerySupportTest.html"];
		done();
	});
	
	it("closest is a child element", function(done){		
		let expected = find("#closest-nested-test-1 > span > span > span").first();
		let element = find("#closest-nested-test-1").first().closest("[data-closest-target]").first();		
		expect(element).toBe(expected);	
		
		done();
	});
	
	it("closest is a parent", function(done){		
		let expected = find("#closest-nested-test-2 [data-closest-target]");
		let elements = find("#closest-nested-test-2 > span > span > span").first().closest("[data-closest-target]");		
		expect(elements).toBeDefined();
		expect(elements.length).toBe(expected.length);	
		
		done();
	});
	
	it("closest is the element your self", function(done){		
		let expected = find("#closest-nested-test-1 [data-closest-target]").first();
		let element = find("#closest-nested-test-1 > span > span > span").first().closest("[data-closest-target]").first();		
		expect(element).toBe(expected);	
		
		done();
	});
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});