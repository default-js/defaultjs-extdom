import Utils from "../../../helpers/Utils";

describe("DataSupport Tests", () => {
	beforeAll(async () => {
		window.document.body.innerHTML = window.__html__["test/sites/DataSupportTest.html"];		
	});
	
	it("get all data", async () => {
		let element = find("#id-1").first();
		let data = element.data();
		expect(data).toBeDefined();
		expect(data).toEqual({
			"test-1":"value-1",
			"test-2":"value-2", 
			"test-3":"value-3", 
			"test-4":"{test:'value'}"
		});		
	});
	
	
	it("set data and get data", async () => {
		let element = find("#id-2").first();
		let key = Utils.uuid();
		let expected = {test: "hallo", value : Utils.uuid()};
		element.data(key , expected);
		let data = element.data(key);
		expect(data).toBeDefined();
		expect(data).toEqual(expected);
	});
	
	it("get data by key", async () => {
		let element = find("#id-1").first();
		let data = element.data("test-1");
		expect(data).toBeDefined();
		expect(data).toEqual("value-1");
		data = element.data("test-1");
		expect(data).toBeDefined();
		expect(data).toEqual("value-1");
		
	});
	
	it("delete data by null", async () => {
		let element = find("#id-3").first();
		let key = Utils.uuid();
		element.data(key, Utils.uuid());
		let data = element.data(key);
		expect(data).toBeDefined();
		
		element.data(key, null);
		data = element.data(key);
		expect(data).toBeUndefined();
	});
	
	it("delete data by undefined", async () => {
		let element = find("#id-3").first();
		let key = Utils.uuid();
		element.data(key, Utils.uuid());
		let data = element.data(key);
		expect(data).toBeDefined();
		
		element.data(key, undefined);
		data = element.data(key);
		expect(data).toBeUndefined();
	});
	
	it("delete data from \"data-\" - attributes but not reflecting into dom", async () => {
		let element = find("#id-3").first();		
		element.data("test-1", undefined);
		let data = element.data("test-1");
		expect(data).toBeUndefined();		
		expect(element.attr("data-test-1")).toBeDefined();
		expect(element.attr("data-test-1")).toBe("value-1");		
	});	
	
	it("data(true) reloads values added to the dom", async () => {
		let element = create("<div data-test-1=\"value-1\"></div>").first();
		expect(element.data()).toEqual({"test-1" : "value-1"});

		element.attr("data-test-2", "value-2");
		expect(element.data()).toEqual({"test-1" : "value-1"});
		expect(element.data(true)).toEqual({"test-1" : "value-1", "test-2" : "value-2"});
	});

	it("data(true) reloads values changed in the dom", async () => {
		let element = create("<div data-test-1=\"value-1\"></div>").first();
		element.data();

		element.attr("data-test-1", "value-2");
		expect(element.data(true)).toEqual({"test-1" : "value-2"});
	});

	it("data(true) keeps values removed from the dom", async () => {
		let element = create("<div data-test-1=\"value-1\" data-test-2=\"value-2\"></div>").first();
		element.data();

		element.attr("data-test-1", null);
		expect(element.data(true)).toEqual({"test-1" : "value-1", "test-2" : "value-2"});
	});

	it("data(true) keeps values never been in the dom", async () => {
		let element = create("<div data-test-1=\"value-1\"></div>").first();
		element.data("test-2", "value-2");

		expect(element.data(true)).toEqual({"test-1" : "value-1", "test-2" : "value-2"});
	});

	it("data(false) does not reload", async () => {
		let element = create("<div data-test-1=\"value-1\"></div>").first();
		element.data();

		element.attr("data-test-2", "value-2");
		expect(element.data(false)).toEqual({"test-1" : "value-1"});
	});

	it("data() throws by a first argument beside string and boolean", async () => {
		let element = create("<div data-test-1=\"value-1\"></div>").first();

		expect(() => element.data(0)).toThrow();
		expect(() => element.data({})).toThrow();
	});

	it("data() does not write to the global name", async () => {
		window.name = "my-window";
		let element = create("<div data-test-1=\"value-1\"></div>").first();
		element.data();

		expect(window.name).toBe("my-window");
	});

	afterAll(async () => {
		window.document.body.innerHTML = "";

	});
});