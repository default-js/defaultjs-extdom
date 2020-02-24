import Utils from "@test/helpers/Utils";

describe("DataSupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/DataSupportTest.html"];
		done();
	});
	
	it("get all data", function(done){
		let element = find("#id-1").first();
		let data = element.data();
		expect(data).toBeDefined();
		expect(data).toEqual({
			"test-1":"value-1",
			"test-2":"value-2", 
			"test-3":"value-3", 
			"test-4":"{test:'value'}"
		});
		done();
	});
	
	
	it("set data and get data", function(done){
		let element = find("#id-2").first();
		let key = Utils.uuid();
		let expected = {test: "hallo", value : Utils.uuid()};
		element.data(key , expected);
		let data = element.data(key);
		expect(data).toBeDefined();
		expect(data).toEqual(expected);
		done();
	});
	
	it("get data by key", function(done){
		let element = find("#id-1").first();
		let data = element.data("test-1");
		expect(data).toBeDefined();
		expect(data).toEqual("value-1");
		done();
	});
	
	it("delete data by null", function(done){
		let element = find("#id-3").first();
		let key = Utils.uuid();
		element.data(key, Utils.uuid());
		let data = element.data(key);
		expect(data).toBeDefined();
		
		element.data(key, null);
		data = element.data(key);
		expect(data).toBeUndefined();
		
		done();
	});
	
	it("delete data by undefined", function(done){
		let element = find("#id-3").first();
		let key = Utils.uuid();
		element.data(key, Utils.uuid());
		let data = element.data(key);
		expect(data).toBeDefined();
		
		element.data(key, undefined);
		data = element.data(key);
		expect(data).toBeUndefined();
		
		done();
	});
	
	it("delete data from \"data-\" - attributes but not reflecting into dom", function(done){
		let element = find("#id-3").first();		
		element.data("test-1", undefined);
		let data = element.data("test-1");
		expect(data).toBeUndefined();		
		expect(element.attr("data-test-1")).toBeDefined();
		expect(element.attr("data-test-1")).toBe("value-1");
		done();
	});	
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});