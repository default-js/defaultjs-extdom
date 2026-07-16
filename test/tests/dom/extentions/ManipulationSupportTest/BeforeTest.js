describe("ManipulationSupportTest before", () => {
	beforeAll(() =>{});	
	
	it("one node before an other", () => {		
		const container = create("<div><div></div></div>").first();		
		const target = container.children[0];
		const content = create("<div></div>").first();
		
		target.before(content);
		expect(container.children.length).toBe(2);		
		expect(container.children[1]).toBe(target);
		expect(container.children[0]).toBe(content);
	});
	
	it("multible nodes before an other", () => {
		const container = create("<div><div></div></div>").first();		
		const target = container.children[0];
		const content = create(	"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>");
		
		const length = content.length;
		
		target.before(content);
		expect(container.children.length > 1).toBe(true);
		expect(container.children.length).toBe(length + 1);		
		expect(container.children.last()).toBe(target);
		expect(content.length).toBe(0);
	});
	
	it("one nodes between two nodes", () => {
		const container = create("<div><div></div><div></div></div>").first();		
		const target = container.children.last();
		const first = container.children.first();
		const content = create(	"<div></div>").first();;
		
		target.before(content);
		expect(container.children.length).toBe(3);
		expect(container.children.first()).toBe(first);
		expect(container.children.last()).toBe(target);
		expect(container.children[1]).toBe(content);
	});
	
	it("multible nodes between two nodes", () => {
		const container = create("<div><div></div><div></div></div>").first();
		const target = container.children.last();
		const first = container.children.first();
		const content = create(	"<div>test</div>" +
								"<div>test</div>" +
								"<div>test</div>" +
								"<div>test</div>" +
								"<div>test</div>");

		const length = content.length;

		target.before(content);
		expect(container.children.length > 2).toBe(true);
		expect(container.children.length).toBe(length + 2);
		expect(container.children.first()).toBe(first);
		expect(container.children.last()).toBe(target);
		expect(content.length).toBe(0);
	});

	it("one node as string before an other", () => {
		const container = create("<div><div></div></div>").first();
		const target = container.children[0];

		target.before("<div>test-1</div>");
		expect(container.children.length).toBe(2);
		expect(container.children[0].textContent).toBe("test-1");
		expect(container.children[1]).toBe(target);
	});

	it("multible nodes as string before an other", () => {
		const container = create("<div><div></div></div>").first();
		const target = container.children[0];

		target.before(	"<div>test-1</div>" +
						"<div>test-2</div>" +
						"<div>test-3</div>");

		expect(container.children.length).toBe(4);
		expect(container.children[0].textContent).toBe("test-1");
		expect(container.children[1].textContent).toBe("test-2");
		expect(container.children[2].textContent).toBe("test-3");
		expect(container.children.last()).toBe(target);
	});
});