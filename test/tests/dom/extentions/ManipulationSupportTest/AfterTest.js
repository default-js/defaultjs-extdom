describe("ManipulationSupportTest after", () => {
	beforeAll(() =>{});	
	
	it("one node after an other", () => {		
		const container = create("<div><div></div></div>").first();		
		const target = container.children[0];
		const content = create("<div></div>").first();
		
		target.after(content);
		expect(container.children.length).toBe(2);		
		expect(container.children[0]).toBe(target);
		expect(container.children[1]).toBe(content);
	});
	
	it("multible nodes after an other", () => {
		const container = create("<div><div></div></div>").first();		
		const target = container.children[0];
		const content = create(	"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>");
		
		const length = content.length;
		
		target.after(content);
		expect(container.children.length > 1).toBe(true);
		expect(container.children.length).toBe(length + 1);		
		expect(container.children[0]).toBe(target);
		expect(content.length).toBe(0);
	});
	
	it("one nodes between two nodes", () => {
		const container = create("<div><div></div><div></div></div>").first();		
		const target = container.children.first();
		const last = container.children.last();
		const content = create(	"<div></div>").first();;
		
		target.after(content);
		expect(container.children.length).toBe(3);		
		expect(container.children.first()).toBe(target);
		expect(container.children.last()).toBe(last);
		expect(container.children[1]).toBe(content);
	});
	
	it("multible nodes between two nodes", () => {
		const container = create("<div><div></div><div></div></div>").first();
		const target = container.children.first();
		const last = container.children.last();
		const content = create(	"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>" +
								"<div></div>");

		const length = content.length;

		target.after(content);
		expect(container.children.length > 2).toBe(true);
		expect(container.children.length).toBe(length + 2);
		expect(container.children.first()).toBe(target);
		expect(container.children.last()).toBe(last);
		expect(content.length).toBe(0);
	});

	it("one node as string after a last node", () => {
		const container = create("<div><div></div></div>").first();
		const target = container.children[0];

		target.after("<div>test-1</div>");
		expect(container.children.length).toBe(2);
		expect(container.children[0]).toBe(target);
		expect(container.children[1].textContent).toBe("test-1");
	});

	it("one node as string between two nodes", () => {
		const container = create("<div><div></div><div></div></div>").first();
		const target = container.children.first();
		const last = container.children.last();

		target.after("<div>test-1</div>");
		expect(container.children.length).toBe(3);
		expect(container.children.first()).toBe(target);
		expect(container.children[1].textContent).toBe("test-1");
		expect(container.children.last()).toBe(last);
	});

	it("multible nodes as string between two nodes", () => {
		const container = create("<div><div></div><div></div></div>").first();
		const target = container.children.first();
		const last = container.children.last();

		target.after(	"<div>test-1</div>" +
						"<div>test-2</div>" +
						"<div>test-3</div>");

		expect(container.children.length).toBe(5);
		expect(container.children.first()).toBe(target);
		expect(container.children[1].textContent).toBe("test-1");
		expect(container.children[2].textContent).toBe("test-2");
		expect(container.children[3].textContent).toBe("test-3");
		expect(container.children.last()).toBe(last);
	});
});