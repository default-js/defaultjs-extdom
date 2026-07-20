import Utils from "../../../helpers/Utils";

describe("AttributeSupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/AttributeSupportTest.html"];
		done();
	});
	
	it("get all attributes", function(done){
		let element = find("#id-1").first();
		let attr = element.attr();
		expect(attr).toBeDefined();
		expect(attr).toEqual({
			"id" : "id-1",
			"class" : "class-1 class-2",
			"data-test-1":"value-1", 
			"data-test-2":"{test:'value'}"
		});
		done();
	});
	
	
	it("set attr", function(done){
		let element = find("#id-2").first();
		let key = Utils.domId();
		element.attr(key , Utils.uuid());
		let attr = element.attr(key);
		expect(attr).toBeDefined();
		expect(element).toBe(find("[" + key + "]").first());
		done();
	});
	
	it("get attribute by key", function(done){
		let element = find("#id-1").first();
		let attr = element.attr("data-test-1");
		expect(attr).toBeDefined();
		expect(attr).toEqual("value-1");
		done();
	});
	
	it("delete attribute by null", function(done){
		let element = find("#id-3").first();
		let key = Utils.domId();
		element.attr(key , Utils.uuid());
		let attr = element.attr(key);
		expect(attr).toBeDefined();
		expect(element).toBe(find("[" + key + "]").first());
		element.attr(key, null);
		expect(find("[" + key + "]").first()).toBeUndefined();
		done();
	});
	
	it("delete attribute by undefined", function(done){
		let element = find("#id-3").first();
		let key = Utils.domId();
		element.attr(key , Utils.uuid());
		let attr = element.attr(key);
		expect(attr).toBeDefined();
		expect(element).toBe(find("[" + key + "]").first());
		element.attr(key, undefined);
		expect(find("[" + key + "]").first()).toBeUndefined();
		done();
	});	
	
	it("set attr to 0", function(done){
		let element = find("#id-2").first();
		let key = Utils.domId();
		element.attr(key , 0);
		expect(element.attr(key)).toBe("0");
		expect(element).toBe(find("[" + key + "]").first());
		done();
	});

	it("set attr to false", function(done){
		let element = find("#id-2").first();
		let key = Utils.domId();
		element.attr(key , false);
		expect(element.attr(key)).toBe("false");
		expect(element).toBe(find("[" + key + "]").first());
		done();
	});

	it("set attr to an empty string", function(done){
		let element = find("#id-2").first();
		let key = Utils.domId();
		element.attr(key , "");
		expect(element.attr(key)).toBe("");
		expect(element).toBe(find("[" + key + "]").first());
		done();
	});

	it("get empty attribute values over a nodelist", function(done){
		let elements = find("#id-4 span");
		expect(elements.length).toBe(2);

		let values = elements.attr("data-test-1");
		expect(values).toBeDefined();
		expect(values).toEqual(["", ""]);
		done();
	});

	it("get empty attribute values over a htmlcollection", function(done){
		let elements = find("#id-4").first().children;
		expect(elements.length).toBe(2);

		let values = elements.attr("data-test-1");
		expect(values).toBeDefined();
		expect(values).toEqual(["", ""]);
		done();
	});

	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});