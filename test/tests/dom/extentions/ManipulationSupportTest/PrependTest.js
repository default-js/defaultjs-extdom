import Utils from "test/helpers/Utils";

describe("ManipulationSupportTest Prepend", function() {
	beforeAll(function(done){
		done();
	});
	

	it("simple element", function(done){
		let id = Utils.domId();
		let content = window.create("<div id=\"" + id + "\">test-3</div>");
		let element = content.first();		
		document.body.prepend(content);
		let result = find("#" + id).first();
		expect(element).toBeDefined();
		expect(element).toBe(result);
		expect(document.body.childNodes[0]).toBe(result);
		element.remove();
		done();
	});
	
	it("complex element", function(done){
		let id = Utils.domId();
		let content = window.create("<div id=\"" + id + "\">test-4<div>test-4-1</div></div>");
		let element = content.first();
		document.body.prepend(content);
		let result = find("#" + id).first();
		expect(element).toBeDefined();
		expect(element).toBe(result);
		expect(result.childNodes.length).toBe(2);
		expect(document.body.childNodes[0]).toBe(result);
		element.remove();
		done();
	});
	
	afterAll(function(done){
		done();
	});
});