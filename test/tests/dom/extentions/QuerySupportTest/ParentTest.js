import Utils from "@test/helpers/Utils";

describe("QuerySupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/QuerySupportTest.html"];
		done();
	});
	
	it("parent (direct parent)", function(done){
		let element = find("#id-1-1").first();
		expect(element).toBeDefined();
		expect(element.parent()).toBe(element.parentNode);
		
		done();
	});
	
	it("parent(div) (matching parent - 1 level)", function(done){
		let element = find("#id-1-2-1").first();
		expect(element).toBeDefined();
		expect(element.parent("div")).toBe(element.parentNode);
		
		done();
	});
	
	it("parent(div) (matching parent - nth level)", function(done){
		let expected = find("#id-1").first();
		expect(expected).toBeDefined();
		let element = find("#id-1-3-1-1-1-1-1").first();
		expect(element).toBeDefined();
		expect(element.parent("div")).toBe(expected);
		
		done();
	});
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});