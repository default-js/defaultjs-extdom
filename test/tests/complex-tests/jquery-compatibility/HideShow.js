describe("hide show tests - ", function() {
	beforeAll(async () => {
		return script("/static/jquery-2.2.4.min.js");
	});
	
	it("$.hide test", async () => {	
		const container = create("<div><div></div></div>").first();
		const element = container.find("div").first();	
		const $element = $(element);
		
		expect(element).toBeDefined();
		expect($element).toBeDefined();
		expect($element[0]).toBeDefined();
		
		$element.hide();
		expect($element.css("display")).toBe("none");
		expect(element.style.display).toBe("none");
		
		$element.show();
		expect($element.css("display")).toBe("block");
		expect(element.style.display).toBe("block");
		
		element.hide();
		expect($element.css("display")).toBe("none");
		expect(element.style.display).toBe("none");
		
		element.show();
		expect($element.css("display")).toBe("block");
		expect(element.style.display).toBe("block");
		
		container.remove();
	});
	
	
	it("$.show test", async () => {	
		const container = create("<div><div style=\"display:none;\"></div></div>").first();
		const element = container.find("div").first();	
		const $element = $(element);
		
		expect(element).toBeDefined();
		expect($element).toBeDefined();
		expect($element[0]).toBeDefined();
		
		$element.show();
		expect($element.css("display")).toBe("block");
		expect(element.style.display).toBe("block");
		
		$element.hide();
		expect($element.css("display")).toBe("none");
		expect(element.style.display).toBe("none");
		
		element.show();
		expect($element.css("display")).toBe("");
		expect(element.style.display).toBe("");
		
		element.hide();
		expect($element.css("display")).toBe("none");
		expect(element.style.display).toBe("none");
		
		container.remove();
	});
});