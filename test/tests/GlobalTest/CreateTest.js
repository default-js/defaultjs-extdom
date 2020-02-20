describe("GlobalTest Create", function() {
	beforeAll(() => {});
	
	it("create a singele element", () => {	
		const content = window.create("<div>test-1</div>").first();
		expect(content).toBeDefined();
		expect(content instanceof Node).toBe(true);
		content.remove();
	});
	
	it("create a element with child elements)", () => {
		let content = window.create("<div>test-2" +
									"	<div>test-2-1</div>" +
									"</div>").first();
		expect(content).toBeDefined();
		expect(content instanceof Node).toBe(true);
		expect(content.childNodes.length).toBe(2);
		content.remove();
	});
	
	it("create multible elements", () => {
		let content = window.create("<div>test-1</div>" +
									"<div>test-2</div>");
		expect(content.length).toBe(2);
		expect(content instanceof NodeList).toBe(true);;
		content.remove();
	});
	
	
	it("create script tag", () => {
		let content = window.create("<script type=\"application/javascript\"></script>").first();
		expect(content).toBeDefined();
		expect(content instanceof HTMLScriptElement).toBe(true);
		content.remove();
	});
});