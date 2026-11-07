import Utils, { div, texts } from "../../../../helpers/Utils";

describe("ManipulationSupportTest Append", function() {
	beforeAll(function(done){
		done();
	});
	
	it("single element", function(done){	
		let id = Utils.domId();
		let content = window.create("<div id=\"" + id + "\">test-1</div>");
		let element = content.first();		
		document.body.append(content);
		let result = find("#" + id).first();
		expect(element).toBeDefined();
		expect(element).toBe(result);
		element.remove();
		done();
	});	
	
	
	it("element with child elements", function(done){
		let id = Utils.domId();
		let content = window.create("<div id=\"" + id + "\">test-2<div id=\"test-2-1\">test-2-1</div></div>");
		let element = content.first();
		document.body.append(content);
		let result = find("#" + id).first();
		expect(element).toBeDefined();
		expect(element).toBe(result);
		expect(result.childNodes.length).toBe(2);
		element.remove();
		done();
	});
	
	it("single element as string", function(done){	
		let id = Utils.domId();	
		document.body.append("<div id=\"" + id + "\">test-1</div>");
		let element = find("#" + id).first();
		expect(element).toBeDefined();
		element.remove();
		done();
	});
	
	it("single complex element as string", function(done){	
		let id = Utils.domId();
		document.body.append("<div id=\"" + id + "\">test-1<div></div><span></span><input></div>");
		let element = find("#" + id).first();
		expect(element).toBeDefined();
		element.remove();
		done();
	});
	
	it("single multible elements as string", function(done){	
		let id = Utils.domId();	
		let element = window.create("<div id=\"" + id + "\">test-1</div>").first();
		document.body.append(element);
		expect(element.childNodes.length).toBe(1);
		element.append("<div></div><span></span><input>");
		expect(element.childNodes.length).toBe(4);
		element.remove();
		done();
	});
	
	it("node list", function(done){
		let id = Utils.domId();
		let element = window.create("<div id=\"" + id + "\">test-1</div>").first();		
		document.body.append(element);
		expect(element.childNodes.length).toBe(1);
		let content = create("<div>test-1-1</div><div>test-2</div>");
		element.append(content);
		expect(element.childNodes.length).toBe(3);
		element.remove();
		done();
	});	
	
	it("multible nodes", function(done){
		let id = Utils.domId();
		let element = window.create("<div id=\"" + id + "\">test-1</div>").first();
		document.body.append(element);
		expect(element.childNodes.length).toBe(1);
		let element1 = create("<div>test-1-1</div>").first();
		let element2 = create("<div>test-1-1</div>").first();
		let element3 = create("<div>test-1-1</div>").first();
		element.append(element1, element2, element3);
		expect(element.childNodes.length).toBe(4);
		element.remove();
		done();
	});	
	
	it("multible node elements, node list, multible nodes as String", function(done){
		let id = Utils.domId();
		let element = window.create("<div id=\"" + id + "\">test-1</div>").first();
		document.body.append(element);
		expect(element.childNodes.length).toBe(1);
		let element1 = create("<div>test-1-1</div>").first();
		let element2 = create("<div>test-1-1</div>").first();
		let element3 = create("<div>test-1-1</div>").first();
		let nodelist = window.create("<div>test-1-1</div><div>test-1-1</div><div>test-1-1</div>");			
		element.append(element1, element2, element3, nodelist, "<div>test-1-1</div><div>test-1-1</div><div>test-1-1</div>");
		expect(element.childNodes.length).toBe(10);
		element.remove();
		done();
	});

	describe("arrays and lists", function() {
		it("array of nodes", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const first = div("test-1");
			const last = div("test-2");
			container.append([first, last]);

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2"]);
			expect(container.content()[1]).toBe(first);
			expect(container.content()[2]).toBe(last);
		});

		it("nested arrays", function(){
			const container = create("<div><div>test-0</div></div>").first();
			container.append([div("test-1"), [div("test-2"), [div("test-3")]]]);

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2", "test-3"]);
		});

		it("array of mixed content", function(){
			const container = create("<div><div>test-0</div></div>").first();
			container.append([div("test-1"), "<div>test-2</div>", create("<div>test-3</div><div>test-4</div>"), [div("test-5")]]);

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2", "test-3", "test-4", "test-5"]);
		});

		it("array between further arguments", function(){
			const container = create("<div><div>test-0</div></div>").first();
			container.append(div("test-1"), [div("test-2"), div("test-3")], "<div>test-4</div>");

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2", "test-3", "test-4"]);
		});

		it("all nodes of a live HTMLCollection", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const source = create("<div><div>test-1</div><div>test-2</div><div>test-3</div></div>").first();
			container.append(source.children);

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2", "test-3"]);
			expect(source.childNodes.length).toBe(0);
		});

		it("all nodes of a live NodeList", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const source = create("<div><div>test-1</div><div>test-2</div><div>test-3</div></div>").first();
			container.append(source.childNodes);

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2", "test-3"]);
			expect(source.childNodes.length).toBe(0);
		});
	});

	describe("strings are content, not iterables", function() {
		it("plain text becomes one text node", function(){
			const container = create("<div></div>").first();
			container.append("test-1");

			expect(container.childNodes.length).toBe(1);
			expect(container.firstChild.nodeType).toBe(Node.TEXT_NODE);
			expect(container.firstChild.textContent).toBe("test-1");
		});

		it("plain text within an array becomes one text node", function(){
			const container = create("<div></div>").first();
			container.append(["test-1"]);

			expect(container.childNodes.length).toBe(1);
			expect(container.firstChild.textContent).toBe("test-1");
		});
	});

	describe("iterables", function() {
		it("Set", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const first = div("test-1");
			const last = div("test-2");
			container.append(new Set([first, last]));

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2"]);
			expect(container.content()[1]).toBe(first);
			expect(container.content()[2]).toBe(last);
		});

		it("generator", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const generator = function* () {
				yield div("test-1");
				yield div("test-2");
			};
			container.append(generator());

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2"]);
		});

		it("iterator of Map values", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const map = new Map([["a", div("test-1")], ["b", div("test-2")]]);
			container.append(map.values());

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2"]);
		});

		it("custom iterable object", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const iterable = {
				*[Symbol.iterator]() {
					yield div("test-1");
					yield div("test-2");
				}
			};
			container.append(iterable);

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2"]);
		});

		it("arguments object", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const args = (function() { return arguments; })(div("test-1"), div("test-2"));
			container.append(args);

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2"]);
		});

		it("nested iterables", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const generator = function* () {
				yield div("test-2");
				yield new Set([div("test-3")]);
			};
			container.append([new Set([div("test-1")]), generator(), new Set([[div("test-4")], create("<div>test-5</div>")])]);

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2", "test-3", "test-4", "test-5"]);
		});

		it("strings within an iterable are parsed, not iterated", function(){
			const container = create("<div></div>").first();
			container.append(new Set(["<div>test-1</div>", "test-2"]));

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
			container.append(generator());

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2", "test-3"]);
			expect(source.childNodes.length).toBe(0);
		});
	});

	describe("null and undefined are ignored", function() {
		it("as only argument", function(){
			const container = create("<div><div>test-0</div></div>").first();

			expect(container.append(null)).toBe(container);
			expect(container.append(undefined)).toBe(container);
			expect(container.append(null, undefined)).toBe(container);
			expect(texts(container)).toEqual(["test-0"]);
		});

		it("between further arguments", function(){
			const container = create("<div><div>test-0</div></div>").first();
			container.append(null, div("test-1"), undefined, "<div>test-2</div>", null);

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2"]);
		});

		it("within arrays", function(){
			const container = create("<div><div>test-0</div></div>").first();
			container.append([null, div("test-1"), [undefined, div("test-2"), [null]]]);

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2"]);
		});

		it("within iterables", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const generator = function* () {
				yield null;
				yield div("test-2");
				yield undefined;
			};
			container.append(new Set([div("test-1"), null, undefined]), generator());

			expect(texts(container)).toEqual(["test-0", "test-1", "test-2"]);
		});
	});

	describe("invalid content", function() {
		it("throws without content", function(){
			const container = create("<div></div>").first();

			expect(() => container.append()).toThrow();
		});

		it("throws on values that are no content", function(){
			const container = create("<div></div>").first();

			expect(() => container.append(1)).toThrow();
			expect(() => container.append(true)).toThrow();
			expect(() => container.append({})).toThrow();
			expect(container.childNodes.length).toBe(0);
		});

		it("throws on an invalid item within an array and inserts nothing", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const element = div("test-1");

			expect(() => container.append([element, [1]])).toThrow();
			expect(texts(container)).toEqual(["test-0"]);
			expect(element.parentNode).not.toBe(container);
		});

		it("throws on an invalid item within an iterable and inserts nothing", function(){
			const container = create("<div><div>test-0</div></div>").first();
			const element = div("test-1");

			expect(() => container.append(new Set([element, {}]))).toThrow();
			expect(texts(container)).toEqual(["test-0"]);
			expect(element.parentNode).not.toBe(container);
		});
	});

	afterAll(function(done){
		done();
	});
});