import Utils from "test/helpers/Utils";

describe("ManipulationSupportTest Basic", function() {
	beforeAll(function(done){
		done();
	});	
	
	it("function: empty", function(done){
		let id = Utils.domId();
		let content = window.create("<div id=\"" + id + "\">test-3<div >test-2-1</div></div>");
		let element = content.first();
		document.body.append(content);
		let result = find("#" + id).first();
		expect(element).toBeDefined();
		expect(element).toBe(result);
		expect(result.childNodes.length).toBe(2);
		
		element = find("#" + id).first();
		element.empty();
		expect(element.childNodes.length).toBe(0);
		element.remove();
		done(); 
	});
	
	it("function: content", function(done){		
		expect(document.body.childNodes).toBe(document.body.content());
		done();
	});
	
	afterAll(function(done){
		done();
	});
});