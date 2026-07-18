import Utils from "../../../helpers/Utils";

describe("HtmlClassSupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/HtmlClassSupportTest.html"];
		done();
	});
	
	it("add class", function(done){
		let element = find("#id-1").first();
		let className = "class-" + Utils.uuid();
		element.addClass(className);
		expect(element).toBe(find("." + className).first());		
		done();
	});	
	
	it("remove class", function(done){
		let expected = find("#id-2.class-1").first();		
		expected.removeClass("class-1");
		let element = find("#id-2.class-1").first();
		expect(element).toBeUndefined();
		
		done();
	});
	
	it("toggle class", function(done){
		let expected = find("#id-3.class-1").first();
		expect(expected).toBeDefined();
		expected.toggleClass("class-1");
		let element = find("#id-3.class-1").first();
		expect(element).toBeUndefined();
		
		expected.toggleClass("class-1");
		element = find("#id-3.class-1").first();
		expect(element).toBeDefined();
		expect(element).toBe(expected);	
		
		done();
	});
	
	it("add class by multiple arguments containing multiple classes", function(done){
		let element = create("<div></div>").first();
		element.addClass("class-1 class-2", "class-3");
		expect(element.classList.contains("class-1")).toBe(true);
		expect(element.classList.contains("class-2")).toBe(true);
		expect(element.classList.contains("class-3")).toBe(true);
		done();
	});

	it("add class by surrounding whitespaces", function(done){
		let element = create("<div></div>").first();
		element.addClass(" class-1 ");
		expect(element.classList.contains("class-1")).toBe(true);
		expect(element.classList.length).toBe(1);
		done();
	});

	it("add class by an array", function(done){
		let element = create("<div></div>").first();
		element.addClass(["class-1", "class-2 class-3"]);
		expect(element.classList.contains("class-1")).toBe(true);
		expect(element.classList.contains("class-2")).toBe(true);
		expect(element.classList.contains("class-3")).toBe(true);
		done();
	});

	it("add class by mixed arguments", function(done){
		let element = create("<div></div>").first();
		element.addClass("class-1 class-2", ["class-3", "class-4 class-5"]);
		expect(element.classList.length).toBe(5);
		done();
	});

	it("remove class by multiple classes", function(done){
		let element = create("<div class=\"class-1 class-2 class-3\"></div>").first();
		element.removeClass("class-1 class-2");
		expect(element.classList.contains("class-1")).toBe(false);
		expect(element.classList.contains("class-2")).toBe(false);
		expect(element.classList.contains("class-3")).toBe(true);
		done();
	});

	it("toggle class by multiple classes", function(done){
		let element = create("<div class=\"class-1\"></div>").first();
		element.toggleClass("class-1 class-2");
		expect(element.classList.contains("class-1")).toBe(false);
		expect(element.classList.contains("class-2")).toBe(true);
		done();
	});

	it("class functions throw by invalid class names", function(done){
		let element = create("<div></div>").first();

		expect(() => element.addClass("")).toThrow();
		expect(() => element.addClass("   ")).toThrow();
		expect(() => element.addClass("class-1", "")).toThrow();
		expect(() => element.addClass([])).toThrow();
		expect(() => element.addClass([null])).toThrow();
		expect(() => element.addClass(null)).toThrow();
		expect(() => element.addClass()).toThrow();

		expect(() => element.removeClass("")).toThrow();
		expect(() => element.toggleClass("")).toThrow();
		done();
	});

	it("toggle class throws by a force flag", function(done){
		let element = create("<div class=\"class-1\"></div>").first();

		expect(() => element.toggleClass("class-1", true)).toThrow();
		expect(element.classList.contains("true")).toBe(false);
		done();
	});

	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});