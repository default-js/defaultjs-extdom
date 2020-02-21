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
	
	afterAll(() => {});
});