describe("ManipulationSupportTest html", () => {
	beforeAll(() =>{});

	it("get inner html", () => {
		const container = create("<div><span>test</span></div>").first();

		expect(container.html()).toBe("<span>test</span>");
	});

	it("get outer html", () => {
		const container = create("<div><span>test</span></div>").first();

		expect(container.html(true)).toBe("<div><span>test</span></div>");
	});

	it("get inner html by boolean", () => {
		const container = create("<div><span>test</span></div>").first();

		expect(container.html(false)).toBe("<span>test</span>");
	});

	it("set html by string", () => {
		const container = create("<div><span>test</span></div>").first();

		container.html("<div>test-1</div>");
		expect(container.children.length).toBe(1);
		expect(container.children[0].textContent).toBe("test-1");
	});

	it("set html by node", () => {
		const container = create("<div><span>test</span></div>").first();
		const content = create("<div>test-1</div>").first();

		container.html(content);
		expect(container.children.length).toBe(1);
		expect(container.children[0]).toBe(content);
	});

	it("set html by nodelist", () => {
		const container = create("<div><span>test</span></div>").first();
		const content = create(	"<div>test-1</div>" +
								"<div>test-2</div>");

		container.html(content);
		expect(container.children.length).toBe(2);
		expect(container.children[0].textContent).toBe("test-1");
		expect(container.children[1].textContent).toBe("test-2");
	});

	it("set html removes existing content", () => {
		const container = create("<div><span>test</span></div>").first();
		const content = container.children.first();

		container.html("<div>test-1</div>");
		expect(container.html()).toBe("<div>test-1</div>");
		expect(content.parentNode).toBe(null);
	});

	it("set html by multible strings", () => {
		const container = create("<div><span>test</span></div>").first();

		container.html(	"<div>test-1</div>",
						"<div>test-2</div>",
						"<div>test-3</div>");

		expect(container.children.length).toBe(3);
		expect(container.children[0].textContent).toBe("test-1");
		expect(container.children[1].textContent).toBe("test-2");
		expect(container.children[2].textContent).toBe("test-3");
	});

	it("set html by multible nodes", () => {
		const container = create("<div><span>test</span></div>").first();
		const first = create("<div>test-1</div>").first();
		const last = create("<div>test-2</div>").first();

		container.html(first, last);
		expect(container.children.length).toBe(2);
		expect(container.children.first()).toBe(first);
		expect(container.children.last()).toBe(last);
	});

	it("set html returns the node itself", () => {
		const container = create("<div></div>").first();

		expect(container.html("<div>test-1</div>")).toBe(container);
	});

	it("set html by null throws an error", () => {
		const container = create("<div><span>test</span></div>").first();

		expect(() => container.html(null)).toThrow();
	});
});
