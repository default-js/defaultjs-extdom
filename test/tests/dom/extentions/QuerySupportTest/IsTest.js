describe("QuerySupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/QuerySupportTest.html"];
		done();
	});
	
	it("is", function(done){		
		let element = find("#id-1").first();
		expect(element.is("#id-1")).toBe(true);
		expect(element.is(".class-1")).toBe(true);
		expect(element.is("[data-test-1]")).toBe(true);
		expect(element.is("#id-1.class-1")).toBe(true);
		expect(element.is("#id-1.class-1[data-test-1]")).toBe(true);
		expect(element.is("div")).toBe(true);
		
		done();
	});
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});