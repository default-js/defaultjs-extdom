describe("GlobalTest Create", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
	
	it("create a singele element", function(done){	
		let content = window.create("<div>test-1</div>");
		let element = content.first();
		expect(element).toBeDefined();
		done();
	});
	
	it("create a element with child elements)", function(done){
		let content = window.create("<div>test-2<div>test-2-1</div></div>");
		let element = content.first();
		expect(element).toBeDefined();
		expect(element.childNodes.length).toBe(2);
		done();
	});
	
	it("create multible elements", function(done){
		let content = window.create("<div>test-1</div><div>test-2</div>");
		expect(content.length).toBe(2);
		done();
	});
});