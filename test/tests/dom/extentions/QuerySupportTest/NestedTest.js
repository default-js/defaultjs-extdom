describe("QuerySupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/QuerySupportTest.html"];
		done();
	});
	
	it("nested are child elements", function(done){		
		let expected = find("#closest-nested-test-1 [data-closest-target]");
		let elements = find("#closest-nested-test-1").first().nested("[data-closest-target]");
		expect(elements).toBeDefined();
		expect(elements.length).toBe(expected.length);
		
		done();
	});
	
	it("nested is a parent", function(done){		
		let expected = find("#closest-nested-test-2");
		let elements = find("#closest-nested-test-2 > span > span").first().nested("[data-closest-target]");
		expect(elements).toBeDefined();
		expect(elements.length).toBe(expected.length);	
		
		done();
	});
	
	it("nested is the element your self", function(done){		
		let expected = find("#closest-nested-test-1 > span > span > span");
		let elements = find("#closest-nested-test-1 > span > span > span").first().nested("[data-closest-target]");		
		expect(elements).toBeDefined();
		expect(elements.length).toBe(expected.length);	
		
		done();
	});
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});