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
	
	it("parent(selector) returns null when nothing matches", function(){
		const content = create("<div><div><span></span></div></div>").first();
		const span = content.find("span").first();

		expect(span.parent(".not-there")).toBe(null);
	});

	it("parent(selector) throws by an invalid selector", function(){
		const content = create("<div><div><span></span></div></div>").first();
		const span = content.find("span").first();

		expect(() => span.parent("div(")).toThrow();
		expect(() => span.parent(".a:not(")).toThrow();
	});

	it("parents(selector) throws by an invalid selector", function(){
		const content = create("<div><div><span></span></div></div>").first();
		const span = content.find("span").first();

		expect(() => span.parents("div(")).toThrow();
	});

	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});