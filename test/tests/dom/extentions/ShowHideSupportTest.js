import Utils from "@test/helpers/Utils";

describe("ShowHideSupport Tests", function() {
	beforeAll(async () => {});
	
	it("show - test (no sytle display defined)", async () => {		
		const container = create("<div><div></div></div>").first();
		const element = container.children.first();
		expect(element.style.display).toBe("");
		element.show();
		expect(element.style.display).toBe("");
		element.show();
		expect(element.style.display).toBe("");
		
	});
	
	it("hide - test (no sytle display defined)", async () => {		
		const container = create("<div><div></div></div>").first();
		const element = container.children.first();
		expect(element.style.display).toBe("");
		element.hide();
		expect(element.style.display).toBe("none");
		element.hide();
		expect(element.style.display).toBe("none");
		
		container.remove();	
	});	
	
	it("show - test (sytle display none)", async () => {		
		const container = create("<div><div style=\"display:none;\"></div></div>").first();
		const element = container.children.first();
		expect(element.style.display).toBe("none");
		element.show();
		expect(element.style.display).toBe("");
		element.show();
		expect(element.style.display).toBe("");
		
		container.remove();		
	});
	
	it("hide - test (sytle display none)", async () => {		
		const container = create("<div><div style=\"display:none;\"></div></div>").first();
		const element = container.children.first();
		expect(element.style.display).toBe("none");
		element.hide();
		expect(element.style.display).toBe("none");
		element.hide();
		expect(element.style.display).toBe("none");
		
		container.remove();		
	});	
	
	
	it("hide -> show - test (no sytle display defined)", async () => {		
		const container = create("<div><div></div></div>").first();
		const element = container.children.first();
		expect(element.style.display).toBe("");
		element.hide();
		expect(element.style.display).toBe("none");
		element.show();
		expect(element.style.display).toBe("");
		
		container.remove();				
	});	
	
	it("show -> hide - test (no sytle display defined)", async () => {		
		const container = create("<div><div></div></div>").first();
		const element = container.children.first();
		expect(element.style.display).toBe("");
		element.show();
		expect(element.style.display).toBe("");
		element.hide();
		expect(element.style.display).toBe("none");
		
		container.remove();				
	});
	
	it("show -> hide -> show - test (sytle display none)", async () => {		
		const container = create("<div><div style=\"display:none;\"></div></div>").first();
		const element = container.children.first();
		expect(element.style.display).toBe("none");
		element.show();
		expect(element.style.display).toBe("");
		element.hide();
		expect(element.style.display).toBe("none");
		element.show();
		expect(element.style.display).toBe("");
		
		container.remove();		
	});
	
	it("hide -> show -> hide - test (sytle display none)", async () => {		
		const container = create("<div><div style=\"display:none;\"></div></div>").first();
		const element = container.children.first();
		expect(element.style.display).toBe("none");
		element.hide();
		expect(element.style.display).toBe("none");
		element.show();
		expect(element.style.display).toBe("");
		element.hide();
		expect(element.style.display).toBe("none");
		
		container.remove();		
	});
	
	it("hide -> show - test (sytle display inline)", async () => {		
		const container = create("<div><div style=\"display:inline;\"></div></div>").first();
		const element = container.children.first();
		expect(element.style.display).toBe("inline");
		element.hide();
		expect(element.style.display).toBe("none");
		element.show();
		expect(element.style.display).toBe("inline");
		
		container.remove();		
	});
	
	afterAll(async () => {});
});