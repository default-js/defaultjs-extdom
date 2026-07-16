import Utils from "../../../../helpers/Utils";

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
	
	it("prepend string into empty container", function(){
		let container = window.create("<div id=\"" + Utils.domId() + "\"></div>").first();
		container.prepend("<div>test-1</div>");

		expect(container.content().length).toBe(1);
		expect(container.content().first().textContent).toBe("test-1");
		container.remove();
	});

	it("prepend string into filled container", function(){
		let container = window.create("<div id=\"" + Utils.domId() + "\"><div></div></div>").first();
		let element = container.content().first();
		container.prepend("<div>test-1</div>");

		expect(container.content().length).toBe(2);
		expect(container.content().first().textContent).toBe("test-1");
		expect(container.content().last()).toBe(element);
		container.remove();
	});

	it("prepend string of multible nodes into filled container", function(){
		let container = window.create("<div id=\"" + Utils.domId() + "\"><div></div></div>").first();
		let element = container.content().first();
		container.prepend("<div>test-1</div><div>test-2</div><div>test-3</div>");

		expect(container.content().length).toBe(4);
		expect(container.content()[0].textContent).toBe("test-1");
		expect(container.content()[1].textContent).toBe("test-2");
		expect(container.content()[2].textContent).toBe("test-3");
		expect(container.content().last()).toBe(element);
		container.remove();
	});

	afterAll(function(done){
		done();
	});
});