const selectorTest = function(aSelector){
	let expected = find(aSelector).first();
	let selector = expected.selector();
	let element = find(selector).first();
	expect(element).toBe(expected);
};

describe("QuerySupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/QuerySupportTest.html"];
		done();
	});
	
	it("selector of an element with id", function(done){
		selectorTest("#data-selector-test-3");		
		done();
	});	
	
	it("selector of an element with a parent with id", function(done){		
		selectorTest("[data-selector-test-1]");		
		done();
	});
	
	it("selector of an element with no id in hierarchy", function(done){
		selectorTest("[data-selector-test-2]");		
		done();
	});
	
	it("selector counts all element siblings", function(){
		const container = create("<div><a></a><p>x</p><p>y</p></div>").first();
		document.body.appendChild(container);

		const expected = container.find("p").last();
		const result = find(expected.selector());

		expect(result.length).toBe(1);
		expect(result.first()).toBe(expected);

		container.remove();
	});

	it("selector of a first sibling is unique", function(){
		const container = create("<div><p>x</p><p>y</p></div>").first();
		document.body.appendChild(container);

		const expected = container.find("p").first();
		const result = find(expected.selector());

		expect(result.length).toBe(1);
		expect(result.first()).toBe(expected);

		container.remove();
	});

	it("find processes every argument", function(){
		const container = create("<div><a></a><p></p></div>").first();
		document.body.appendChild(container);

		expect(container.find("a", "p").length).toBe(2);
		expect(container.find("p", "a").length).toBe(2);

		container.remove();
	});

	it("find skips empty selectors", function(){
		const container = create("<div><a></a><p></p></div>").first();
		document.body.appendChild(container);

		expect(container.find("a", "").length).toBe(1);
		expect(container.find("", "   ").length).toBe(0);
		expect(container.find().length).toBe(0);

		container.remove();
	});

	it("find throws by a selector beside a string", function(){
		const container = create("<div><a></a></div>").first();

		expect(() => container.find(null)).toThrowError("Invalid query!");
		expect(() => container.find(1)).toThrowError("Invalid query!");
		expect(() => container.find("a", {})).toThrowError("Invalid query!");

		container.remove();
	});

	it("find accepts a comma separated selector list", function(){
		const container = create("<div><a></a><p></p><span></span></div>").first();
		document.body.appendChild(container);

		expect(container.find("a, p").length).toBe(2);
		expect(container.find("[data=\"a,b\"], span").length).toBe(1);

		container.remove();
	});

	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});