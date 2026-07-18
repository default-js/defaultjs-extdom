describe("List Support Test - NodeList", () => {
	
	beforeAll(() => {});	
	
	it("filter()", () => {
		const content = create("<div></div>" +
								"<a></a>" +
								"<div></div>" +
								"<a></a>" +
								"<div></div>" +
								"<a></a>" +
								"<div></div>" +
								"<a></a>" +
								"<div></div>" +
								"<a></a");
		
		expect(content).toBeDefined();
		expect(content instanceof NodeList).toBe(true);
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
								"<div></div>");
		
		expect(content).toBeDefined();
		expect(content instanceof NodeList).toBe(true);
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
								"<div></div>");
		
		expect(content).toBeDefined();
		expect(content instanceof NodeList).toBe(true);
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
								"<a></a>");
		
		expect(content).toBeDefined();
		expect(content instanceof NodeList).toBe(true);
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
								"<div></div>");
		
		expect(content).toBeDefined();
		expect(content instanceof NodeList).toBe(true);
		expect(content.length).toBe(5);
		
		const expected = content.last();
		expect(expected).toBeDefined();
		expect(expected instanceof Node).toBe(true);
		expect(expected.tagName).toBe("DIV");
		
		content.remove();
	});
	
	it("filter() returns a NodeList", () => {
		const content = create("<div></div><a></a><div></div>");
		const expected = content.filter(node => node.tagName == "DIV");

		expect(expected instanceof NodeList).toBe(true);
		expect(expected.length).toBe(2);
	});

	it("filter() result stays chainable", () => {
		const content = create("<div></div><a></a><div></div>");
		const expected = content.filter(node => node.tagName == "DIV").addClass("class-1");

		expect(expected.length).toBe(2);
		expect(expected.first().classList.contains("class-1")).toBe(true);
		expect(content.last().classList.contains("class-1")).toBe(true);
	});

	it("forEach() is safe against a live collection", () => {
		const container = create("<div><a></a><a></a><a></a></div>").first();
		const children = container.children;
		let counter = 0;

		children.forEach(node => {
			counter = counter + 1;
			node.remove();
		});

		expect(counter).toBe(3);
		expect(container.children.length).toBe(0);
	});

	it("indexOf() honours a start index", () => {
		const content = create("<div></div><a></a><div></div>");
		const first = content.first();

		expect(content.indexOf(first)).toBe(0);
		expect(content.indexOf(first, 1)).toBe(-1);
	});

	it("includes()", () => {
		const content = create("<div></div><a></a>");
		const other = create("<div></div>").first();

		expect(content.includes(content.first())).toBe(true);
		expect(content.includes(other)).toBe(false);
	});

	it("some() and every()", () => {
		const content = create("<div></div><a></a><div></div>");

		expect(content.some(node => node.tagName == "A")).toBe(true);
		expect(content.some(node => node.tagName == "P")).toBe(false);
		expect(content.every(node => node instanceof Node)).toBe(true);
		expect(content.every(node => node.tagName == "DIV")).toBe(false);
	});

	it("reduce()", () => {
		const content = create("<div></div><a></a><div></div>");
		const expected = content.reduce((result, node) => result + node.tagName, "");

		expect(expected).toBe("DIVADIV");
	});

	afterAll(() => {});
});