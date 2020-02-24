import Utils from "@test/helpers/Utils";

describe("ManipulationSupportTest Prepend", function() {
	beforeAll(function(done){
		done();
	});
	
	it("prepend into empty container", function(){
		const container = window.create("<div id=\"" + Utils.domId() + "\"></div>").first();
		const element = window.create("<div id=\"" + Utils.domId() + "\"></div>").first();		
		container.prepend(element);
		
		expect(container.content().length).toBe(1);
		expect(container.content().first()).toBeDefined();
		expect(container.content().first()).toBe(element);
		container.remove();
	});
	
	
	it("prepend into filled container", function(){
		let container = window.create("<div id=\"" + Utils.domId() + "\"><div></div></div>").first();
		let element = window.create("<div id=\"" + Utils.domId() + "\"></div>").first();
		container.prepend(element);
		
		expect(container.content().length).toBe(2);
		expect(container.content().first()).toBeDefined();
		expect(container.content().first()).toBe(element);		
		container.remove();
	});
	
	it("complex element", function(){
		let id = Utils.domId();
		let container = window.create("<div id=\"" + Utils.domId() + "\"><div></div></div>").first();
		let element = window.create("<div id=\"" + Utils.domId() + "\">test-4<div>test-4-1</div></div>").first();
		container.prepend(element);
		
		expect(container.content().length).toBe(2);
		expect(container.content().first()).toBeDefined();
		expect(container.content().first()).toBe(element);		
		container.remove();
	});
	
	afterAll(function(done){
		done();
	});
});