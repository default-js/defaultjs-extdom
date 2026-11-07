import Utils, { div, texts } from "../../../../helpers/Utils";

describe("ManipulationSupportTest Prepend", function() {
	beforeAll(function(done){
		done();
	});
	
	it("prepend into empty container", function(){
		const container = window.create("<div id=\"" + Utils.domId() + "\"></div>").first();
		const element = window.create("<div id=\"" + Utils.domId() + "\"></div>").first();		
		container.prepend(element);
		
		expect(container.content().length).toBe(1);
		expect(container.content().first()).toBeDefined();
		expect(container.content().first()).toBe(element);
		container.remove();
	});
	
	
	it("prepend into filled container", function(){
		let container = window.create("<div id=\"" + Utils.domId() + "\"><div></div></div>").first();
		let element = window.create("<div id=\"" + Utils.domId() + "\"></div>").first();
		container.prepend(element);
		
		expect(container.content().length).toBe(2);
		expect(container.content().first()).toBeDefined();
		expect(container.content().first()).toBe(element);		
		container.remove();
	});
	
	it("complex element", function(){
		let id = Utils.domId();
		let container = window.create("<div id=\"" + Utils.domId() + "\"><div></div></div>").first();
		let element = window.create("<div id=\"" + Utils.domId() + "\">test-4<div>test-4-1</div></div>").first();
		container.prepend(element);
		
		expect(container.content().length).toBe(2);
		expect(container.content().first()).toBeDefined();
		expect(container.content().first()).toBe(element);		
		container.remove();
	});
	
	it("prepend string into empty container", function(){
		let container = window.create("<div id=\"" + Utils.domId() + "\"></div>").first();
		container.prepend("<div>test-1</div>");

		expect(container.content().length).toBe(1);
		expect(container.content().first().textContent).toBe("test-1");
		container.remove();
	});

	it("prepend string into filled container", function(){
		let container = window.create("<div id=\"" + Utils.domId() + "\"><div></div></div>").first();
		let element = container.content().first();
		container.prepend("<div>test-1</div>");

		expect(container.content().length).toBe(2);
		expect(container.content().first().textContent).toBe("test-1");
		expect(container.content().last()).toBe(element);
		container.remove();
	});

	it("prepend string of multible nodes into filled container", function(){
		let container = window.create("<div id=\"" + Utils.domId() + "\"><div></div></div>").first();
		let element = container.content().first();
		container.prepend("<div>test-1</div><div>test-2</div><div>test-3</div>");

		expect(container.content().length).toBe(4);
		expect(container.content()[0].textContent).toBe("test-1");
		expect(container.content()[1].textContent).toBe("test-2");
		expect(container.content()[2].textContent).toBe("test-3");
		expect(container.content().last()).toBe(element);
		container.remove();
	});

	describe("arrays and lists", function() {
		it("array of nodes", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const first = div("test-1");
			const last = div("test-2");
			container.prepend([first, last]);

			expect(texts(container)).toEqual(["test-1", "test-2", "test-0"]);
			expect(container.content()[0]).toBe(first);
			expect(container.content()[1]).toBe(last);
		});

		it("nested arrays", function(){
			const container = create("<div><div>test-0</div></div>").first();
			container.prepend([div("test-1"), [div("test-2"), [div("test-3")]]]);

			expect(texts(container)).toEqual(["test-1", "test-2", "test-3", "test-0"]);
		});

		it("array of mixed content", function(){
			const container = create("<div><div>test-0</div></div>").first();
			container.prepend([div("test-1"), "<div>test-2</div>", create("<div>test-3</div><div>test-4</div>"), [div("test-5")]]);

			expect(texts(container)).toEqual(["test-1", "test-2", "test-3", "test-4", "test-5", "test-0"]);
		});

		it("array between further arguments", function(){
			const container = create("<div><div>test-0</div></div>").first();
			container.prepend(div("test-1"), [div("test-2"), div("test-3")], "<div>test-4</div>");

			expect(texts(container)).toEqual(["test-1", "test-2", "test-3", "test-4", "test-0"]);
		});

		it("all nodes of a live HTMLCollection", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const source = create("<div><div>test-1</div><div>test-2</div><div>test-3</div></div>").first();
			container.prepend(source.children);

			expect(texts(container)).toEqual(["test-1", "test-2", "test-3", "test-0"]);
			expect(source.childNodes.length).toBe(0);
		});

		it("all nodes of a live NodeList", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const source = create("<div><div>test-1</div><div>test-2</div><div>test-3</div></div>").first();
			container.prepend(source.childNodes);

			expect(texts(container)).toEqual(["test-1", "test-2", "test-3", "test-0"]);
			expect(source.childNodes.length).toBe(0);
		});
	});

	describe("strings are content, not iterables", function() {
		it("plain text becomes one text node", function(){
			const container = create("<div></div>").first();
			container.prepend("test-1");

			expect(container.childNodes.length).toBe(1);
			expect(container.firstChild.nodeType).toBe(Node.TEXT_NODE);
			expect(container.firstChild.textContent).toBe("test-1");
		});

		it("plain text within an array becomes one text node", function(){
			const container = create("<div></div>").first();
			container.prepend(["test-1"]);

			expect(container.childNodes.length).toBe(1);
			expect(container.firstChild.textContent).toBe("test-1");
		});
	});

	describe("iterables", function() {
		it("Set", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const first = div("test-1");
			const last = div("test-2");
			container.prepend(new Set([first, last]));

			expect(texts(container)).toEqual(["test-1", "test-2", "test-0"]);
			expect(container.content()[0]).toBe(first);
			expect(container.content()[1]).toBe(last);
		});

		it("generator", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const generator = function* () {
				yield div("test-1");
				yield div("test-2");
			};
			container.prepend(generator());

			expect(texts(container)).toEqual(["test-1", "test-2", "test-0"]);
		});

		it("iterator of Map values", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const map = new Map([["a", div("test-1")], ["b", div("test-2")]]);
			container.prepend(map.values());

			expect(texts(container)).toEqual(["test-1", "test-2", "test-0"]);
		});

		it("custom iterable object", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const iterable = {
				*[Symbol.iterator]() {
					yield div("test-1");
					yield div("test-2");
				}
			};
			container.prepend(iterable);

			expect(texts(container)).toEqual(["test-1", "test-2", "test-0"]);
		});

		it("arguments object", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const args = (function() { return arguments; })(div("test-1"), div("test-2"));
			container.prepend(args);

			expect(texts(container)).toEqual(["test-1", "test-2", "test-0"]);
		});

		it("nested iterables", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const generator = function* () {
				yield div("test-2");
				yield new Set([div("test-3")]);
			};
			container.prepend([new Set([div("test-1")]), generator(), new Set([[div("test-4")], create("<div>test-5</div>")])]);

			expect(texts(container)).toEqual(["test-1", "test-2", "test-3", "test-4", "test-5", "test-0"]);
		});

		it("strings within an iterable are parsed, not iterated", function(){
			const container = create("<div></div>").first();
			container.prepend(new Set(["<div>test-1</div>", "test-2"]));

			expect(container.childNodes.length).toBe(2);
			expect(container.childNodes[0].nodeName).toBe("DIV");
			expect(container.childNodes[0].textContent).toBe("test-1");
			expect(container.childNodes[1].nodeType).toBe(Node.TEXT_NODE);
			expect(container.childNodes[1].textContent).toBe("test-2");
		});

		it("generator over a live NodeList", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const source = create("<div><div>test-1</div><div>test-2</div><div>test-3</div></div>").first();
			const generator = function* () {
				yield* source.childNodes;
			};
			container.prepend(generator());

			expect(texts(container)).toEqual(["test-1", "test-2", "test-3", "test-0"]);
			expect(source.childNodes.length).toBe(0);
		});
	});

	describe("null and undefined are ignored", function() {
		it("as only argument", function(){
			const container = create("<div><div>test-0</div></div>").first();

			expect(container.prepend(null)).toBe(container);
			expect(container.prepend(undefined)).toBe(container);
			expect(container.prepend(null, undefined)).toBe(container);
			expect(texts(container)).toEqual(["test-0"]);
		});

		it("between further arguments", function(){
			const container = create("<div><div>test-0</div></div>").first();
			container.prepend(null, div("test-1"), undefined, "<div>test-2</div>", null);

			expect(texts(container)).toEqual(["test-1", "test-2", "test-0"]);
		});

		it("within arrays", function(){
			const container = create("<div><div>test-0</div></div>").first();
			container.prepend([null, div("test-1"), [undefined, div("test-2"), [null]]]);

			expect(texts(container)).toEqual(["test-1", "test-2", "test-0"]);
		});

		it("within iterables", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const generator = function* () {
				yield null;
				yield div("test-2");
				yield undefined;
			};
			container.prepend(new Set([div("test-1"), null, undefined]), generator());

			expect(texts(container)).toEqual(["test-1", "test-2", "test-0"]);
		});
	});

	describe("invalid content", function() {
		it("throws without content", function(){
			const container = create("<div></div>").first();

			expect(() => container.prepend()).toThrow();
		});

		it("throws on values that are no content", function(){
			const container = create("<div></div>").first();

			expect(() => container.prepend(1)).toThrow();
			expect(() => container.prepend(true)).toThrow();
			expect(() => container.prepend({})).toThrow();
			expect(container.childNodes.length).toBe(0);
		});

		it("throws on an invalid item within an array and inserts nothing", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const element = div("test-1");

			expect(() => container.prepend([element, [1]])).toThrow();
			expect(texts(container)).toEqual(["test-0"]);
			expect(element.parentNode).not.toBe(container);
		});

		it("throws on an invalid item within an iterable and inserts nothing", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const element = div("test-1");

			expect(() => container.prepend(new Set([element, {}]))).toThrow();
			expect(texts(container)).toEqual(["test-0"]);
			expect(element.parentNode).not.toBe(container);
		});
	});

	afterAll(function(done){
		done();
	});
});