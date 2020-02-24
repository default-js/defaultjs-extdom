import Utils from "@test/helpers/Utils";

describe("ManipulationSupportTest Replace", function() {
	beforeAll(function(done){
		done();
	});
	
	it("replace single element", function(){
		const container = window.create("<div id=\"" + Utils.domId() + "\">test-1</div>").first();
		const id1 = Utils.domId();
		const element1 = window.create("<div id=\"" + id1 + "\">test-1</div>").first();
		container.append(element1);
		

		const id2 = Utils.domId();
		const element2 = window.create("<div id=\"" + id2 + "\">test-1</div>").first();
		
		element1.replace(element2);
		
		let test = container.find("#" + id1);
		expect(test.length).toBe(0);
		test = container.find("#" + id2);
		expect(test.length).toBe(1);
		
		container.remove();
		
	});
	
	it("replace element with multible element", function(){		
		const container = window.create("<div id=\"" + Utils.domId() + "\">test-1</div>").first();
		const id1 = Utils.domId();
		const element1 = window.create("<div id=\"" + id1 + "\">test-1</div>").first();
		container.append(element1);
		

		const elements = [];
		for(let i = 0; i < 10; i++)
			elements.push(window.create("<div id=\"" + Utils.domId() + "\">test-1</div>").first());
		
		
		
		element1.replace(elements);
		
		let test = container.find("#" + id1);
		expect(test.length).toBe(0);
		test = container.find("*");
		expect(test.length).toBe(10);
		
		container.remove();
	});	
	
	afterAll(function(done){
		done();
	});
});