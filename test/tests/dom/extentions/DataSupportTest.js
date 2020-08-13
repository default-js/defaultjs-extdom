import Utils from "@test/helpers/Utils";

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
	
	afterAll(async () => {
		window.document.body.innerHTML = "";
		
	});
});