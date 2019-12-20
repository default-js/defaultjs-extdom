import Utils from "test/helpers/Utils";

describe("QuerySupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/QuerySupportTest.html"];
		done();
	});
	
	it("parents (full hierachy)", function(done){
		let element = find("#id-1-3-1-1-1-1-1").first();
		
		let expected = 0;
		let parent = element.parentNode;
		while(parent){
			expected++;
			parent = parent.parentNode;
		}
		
		
		let parents = element.parents();
		expect(parents).toBeDefined();
		expect(parents.length).toBe(expected);
		
		done();
	});
	
	it("parents(:not(body))", function(done){
		let element = find("#id-1-3-1-1-1-1-1").first();
		let parents = element.parents(":not(body)");
		expect(parents).toBeDefined();
		expect(parents.length).toBe(7);
		
		done();
	});
	
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});