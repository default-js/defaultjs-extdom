describe("List Support Test - HTMLCollection", () => {
	
	beforeAll(() => {});	
	
	it("filter()", () => {
		let content = create("<div></div>" +
								"<a></a>" +
								"<div></div>" +
								"<a></a>" +
								"<div></div>" +
								"<a></a>" +
								"<div></div>" +
								"<a></a>" +
								"<div></div>" +
								"<a></a", true).content.children;
		
		expect(content).toBeDefined();
		expect(content instanceof HTMLCollection).toBe(true);
		expect(content.length).toBe(10);
		
		const expected = content.filter(node => node.tagName == "DIV");
		expect(expected).toBeDefined();
		expect(expected.length).toBe(5);
		expect(expected.filter(node => node.tagName != "DIV").length).toBe(0);
		
		content.remove();
	});	
	
	it("map()", () => {
		const content = create("<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>", true).content.children;
		
		expect(content).toBeDefined();
		expect(content instanceof HTMLCollection).toBe(true);
		expect(content.length).toBe(10);
		
		const expected = content.map(node => node.tagName);	
		
		expect(expected).toBeDefined();
		expect(expected.length).toBe(10);
		expect(expected.filter(e => e == "DIV").length).toBe(10);
		content.remove();
	});
	
	it("forEach()", () => {
		const content = create("<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>", true).content.children;
		
		expect(content).toBeDefined();
		expect(content instanceof HTMLCollection).toBe(true);
		expect(content.length).toBe(10);
		
		content.forEach(node => {
			expect(node.tagName).toBe("DIV");
		});	
		
		content.remove();
	});
	
	it("first()", () => {
		const content = create("<div></div>" +
								"<a></a>" +
								"<a></a>" +
								"<a></a>" +
								"<a></a>", true).content.children;
		
		expect(content).toBeDefined();
		expect(content instanceof HTMLCollection).toBe(true);
		expect(content.length).toBe(5);
		
		const expected = content.first();
		expect(expected).toBeDefined();
		expect(expected instanceof Node).toBe(true);
		expect(expected.tagName).toBe("DIV");
		
		content.remove();
	});
	
	it("last()", () => {
		const content = create(	"<a></a>" +
								"<a></a>" +
								"<a></a>" +
								"<a></a>" +
								"<div></div>", true).content.children;
		
		expect(content).toBeDefined();
		expect(content instanceof HTMLCollection).toBe(true);
		expect(content.length).toBe(5);
		
		const expected = content.last();
		expect(expected).toBeDefined();
		expect(expected instanceof Node).toBe(true);
		expect(expected.tagName).toBe("DIV");
		
		content.remove();
	});
	
	it("filter() returns a HTMLCollection", () => {
		const content = create("<div></div><a></a><div></div>", true).content.children;
		const expected = content.filter(node => node.tagName == "DIV");

		expect(expected instanceof HTMLCollection).toBe(true);
		expect(expected.length).toBe(2);
	});

	it("filter() result stays chainable", () => {
		const content = create("<div></div><a></a><div></div>", true).content.children;
		const expected = content.filter(node => node.tagName == "DIV").addClass("class-1");

		expect(expected.length).toBe(2);
		expect(content.first().classList.contains("class-1")).toBe(true);
		expect(content[1].classList.contains("class-1")).toBe(false);
	});

	it("some(), every() and reduce()", () => {
		const content = create("<div></div><a></a><div></div>", true).content.children;

		expect(content.some(node => node.tagName == "A")).toBe(true);
		expect(content.every(node => node.tagName == "DIV")).toBe(false);
		expect(content.reduce((result, node) => result + node.tagName, "")).toBe("DIVADIV");
	});

	it("applyTo calls a function with each node", () => {
		const content = create("<div></div><a></a><div></div>", true).content.children;
		const tags = [];

		content.applyTo(node => tags.push(node.tagName));

		expect(tags).toEqual(["DIV", "A", "DIV"]);
	});

	it("applyTo calls a method by name and collects its results", () => {
		const content = create("<div class=\"class-1\"></div><a></a><div class=\"class-1\"></div>", true).content.children;

		const result = content.applyTo("is", ".class-1");

		expect(result).toEqual([true, false, true]);
	});

	afterAll(() => {});
});