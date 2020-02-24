import Utils from "@test/helpers/Utils";

describe("ValueSupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/ValueSupportTest.html"];
		done();
	});
	
	it("val all values", function(done){
		let elements = find("#value-support-test-1 > *");
		expect(elements).toBeDefined();
		expect(elements.length).toBe(12);
		let values = elements.val();
		
		expect(values).toBeDefined();
		expect(values.size).toBe(7);
		
		expect(values.get("text")).toBeDefined();
		expect(values.get("text")).toBe("text");
		
		expect(values.get("select")).toBeDefined();
		expect(values.get("select").length).toBe(3);
		expect(values.get("select")).toEqual(["option-1", "option-2", "option-3"]);
		
		expect(values.get("radio-1")).toBeDefined();
		expect(values.get("radio-1")).toBe("radio-1-2");
		
		expect(values.get("radio-2")).toBeDefined();
		expect(values.get("radio-2")).toBe(true);
		
		expect(values.get("checkbox-1")).toBeDefined();
		expect(values.get("checkbox-1")).toBe(true);
		
		expect(values.get("checkbox-2")).toBeUndefined();
		
		expect(values.get("checkbox-3")).toBeDefined();
		expect(values.get("checkbox-3")).toBe("checkbox-3");
		
		expect(values.get("textarea")).toBeDefined();
		expect(values.get("textarea")).toBe("textarea");
		
		done();
	});		
	
	
	it("val set value to select", function(done){
		let element = find("#value-support-test-2 select").first();
		let expected = ["option-4", "option-5"]
		let values = element.val(expected);
		
		values = element.val();
		expect(values).toBeDefined();
		expect(values).toEqual(expected);
		
		done();
	});	
	
	it("val set value to input[type=text]", function(done){
		let element = find("#value-support-test-3 input").first();
		let expected = Utils.uuid();
		element.val(expected);
		let value = element.val();
		expect(value).toBeDefined();
		expect(value).toBe(expected);				
		
		done();
	});	
	
	it("val set value to input[type=radio]", function(done){
		let element = find("#value-support-test-4 input");
		let expected = "radio-3-1";
		element.val(expected)
		let value = element.val().get("radio-3");
		expect(value).toBeDefined();
		expect(value).toBe(expected);		

		expected = "radio-3-3";
		element.val([expected])
		value = element.val().get("radio-3");
		expect(value).toBeDefined();
		expect(value).toBe(expected);		

		expected = "radio-3-3";
		element.val([expected, "radio-3-1"])
		value = element.val().get("radio-3");
		expect(value).toBeDefined();
		expect(value).toBe(expected);		
		
		done();
	});	

	it("val set value to input[type=checkbox]", function(done){
		let element = find("#value-support-test-5 [name=\"checkbox-1\"]").first();			
		element.val(true)
		expect(element.val()).toBe(true);		
		element.val(false)
		expect(element.val()).toBe(false);
		
		element = find("#value-support-test-5 [name=\"checkbox-2\"]").first();			
		element.val(true)
		expect(element.val()).toBe("checkbox-value-2");		
		element.val(false)
		expect(element.val()).toBeUndefined();
		
		element = find("#value-support-test-5 [name=\"checkbox-2\"]").first();			
		element.val("checkbox-value-2")
		expect(element.val()).toBe("checkbox-value-2");		
		element.val(false)
		expect(element.val()).toBeUndefined();
		
		
		done();
	});	
	
	it("val set value to textarea", function(done){
		let element = find("#value-support-test-6 textarea").first();
		expect(element.val()).toBe("textarea");
		
		let expected = Utils.uuid();
		element.val(expected);
		expect(element.val()).toBe(expected);
		
		done();
	});	
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});