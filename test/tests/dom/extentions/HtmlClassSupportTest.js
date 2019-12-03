import Utils from "test/helpers/Utils";

describe("HtmlClassSupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/HtmlClassSupportTest.html"];
		done();
	});
	
	it("add class", function(done){
		let element = find("#id-1").first();
		let className = "class-" + Utils.uuid();
		element.addClass(className);
		expect(element).toBe(find("." + className).first());		
		done();
	});	
	
	it("remove class", function(done){
		let expected = find("#id-2.class-1").first();		
		expected.removeClass("class-1");
		let element = find("#id-2.class-1").first();
		expect(element).toBeUndefined();
		
		done();
	});
	
	it("toggle class", function(done){
		let expected = find("#id-3.class-1").first();
		expect(expected).toBeDefined();
		expected.toggleClass("class-1");
		let element = find("#id-3.class-1").first();
		expect(element).toBeUndefined();
		
		expected.toggleClass("class-1");
		element = find("#id-3.class-1").first();
		expect(element).toBeDefined();
		expect(element).toBe(expected);	
		
		done();
	});
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});