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
	
	it("show and hide return this", async () => {
		const element = create("<div></div>").first();

		expect(element.hide()).toBe(element);
		expect(element.show()).toBe(element);
	});

	it("toggleShow toggles the visibility", async () => {
		const element = create("<div></div>").first();

		element.toggleShow();
		expect(element.style.display).toBe("none");
		element.toggleShow();
		expect(element.style.display).toBe("");
		element.toggleShow();
		expect(element.style.display).toBe("none");
	});

	it("show restores the display captured on the first call", async () => {
		const element = create("<div style=\"display:inline;\"></div>").first();

		element.hide();
		element.style.display = "flex";
		element.hide();
		element.show();
		expect(element.style.display).toBe("inline");
	});

	afterAll(async () => {});
});