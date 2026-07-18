import Utils from "../../../../helpers/Utils";

describe("ManipulationSupportTest content handling", () => {
	it("insert functions return this", () => {
		const container = create("<div><a></a></div>").first();
		const target = container.children.first();

		expect(container.append("<div></div>")).toBe(container);
		expect(container.prepend("<div></div>")).toBe(container);
		expect(target.before("<div></div>")).toBe(target);
		expect(target.after("<div></div>")).toBe(target);
	});

	it("insert functions stay chainable", () => {
		const container = create("<div></div>").first();
		container.append("<a></a>").prepend("<b></b>").addClass("class-1");

		expect(container.children.length).toBe(2);
		expect(container.children.first().tagName).toBe("B");
		expect(container.children.last().tagName).toBe("A");
		expect(container.classList.contains("class-1")).toBe(true);
	});

	it("replace returns this", () => {
		const container = create("<div><a></a></div>").first();
		const target = container.children.first();

		expect(target.replace(create("<div></div>").first())).toBe(target);
	});

	it("replace accepts a string", () => {
		const container = create("<div><a></a></div>").first();
		const target = container.children.first();

		target.replace("<div>test-1</div>");
		expect(container.children.length).toBe(1);
		expect(container.children.first().textContent).toBe("test-1");
	});

	it("replace a child by multiple contents", () => {
		const container = create("<div><a></a></div>").first();
		const target = container.children.first();

		container.replace(target, "<div>test-1</div>", create("<div>test-2</div>").first());
		expect(container.children.length).toBe(2);
		expect(container.children.first().textContent).toBe("test-1");
		expect(container.children.last().textContent).toBe("test-2");
	});

	it("insert functions accept mixed content", () => {
		const container = create("<div></div>").first();
		container.append("<a></a><b></b>", create("<i></i>"), ["<u></u>", create("<s></s>").first()]);

		expect(container.children.length).toBe(5);
		expect(container.children.map(node => node.tagName)).toEqual(["A", "B", "I", "U", "S"]);
	});

	it("insert functions report invalid content", () => {
		const container = create("<div></div>").first();

		expect(() => container.append(null)).toThrowError(/content/i);
		expect(() => container.append(0)).toThrowError(/content/i);
		expect(() => container.append()).toThrowError(/content/i);
		expect(() => container.prepend({})).toThrowError(/content/i);
		expect(() => container.append("<a></a>", null)).toThrowError(/content/i);
	});

	it("empty strings are valid content", () => {
		const container = create("<div></div>").first();

		expect(container.append("")).toBe(container);
		expect(container.childNodes.length).toBe(0);

		expect(container.append("   ")).toBe(container);
		expect(container.childNodes.length).toBe(1);
		expect(container.textContent).toBe("   ");
	});

	it("html keeps the content when the new one is invalid", () => {
		const container = create("<div><a></a></div>").first();

		expect(() => container.html(null)).toThrow();
		expect(container.children.length).toBe(1);
		expect(container.children.first().tagName).toBe("A");
	});
});

describe("ManipulationSupportTest Basic", function() {
	beforeAll(function(done){
		done();
	});	
	
	it("function: empty", function(done){
		let id = Utils.domId();
		let content = window.create("<div id=\"" + id + "\">test-3<div >test-2-1</div></div>");
		let element = content.first();
		document.body.append(content);
		let result = find("#" + id).first();
		expect(element).toBeDefined();
		expect(element).toBe(result);
		expect(result.childNodes.length).toBe(2);
		
		element = find("#" + id).first();
		element.empty();
		expect(element.childNodes.length).toBe(0);
		element.remove();
		done(); 
	});
	
	it("function: content", function(done){		
		expect(document.body.childNodes).toBe(document.body.content());
		done();
	});
	
	afterAll(function(done){
		done();
	});
});