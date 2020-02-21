describe("EventSupport Test", () => {
	const container = create("<div></div>");
	
	beforeAll(() => {
		container.append(create(window.__html__["test/sites/EventSupportTest.html"]));
	});
	
	it("is \"on\" function available", () => {		
		expect(typeof Document.prototype.on).toBe("function");
		expect(typeof HTMLElement.prototype.on).toBe("function");
	});
	
	it("test addEventListener", () => {
		let result = [
			new Promise(r => {
				window.addEventListener("click", event => {
					expect(event).toBeDefined();
					r();
				});
			}),
			new Promise(r => {
				document.addEventListener("click", event => {
					expect(event).toBeDefined();
					r();
				});
			})
		];
		result = Promise.all(result);
		document.trigger("click");
		return result;
	});	
	
	it("test removeOn", () => {
	    let container = find("#remove-on");
	    let handler = function(event){ };
	    
	    container.on("test", handler);	    
	    container.removeOn("test");
	    
	    container.on("test", handler);     
        container.removeOn(handler);
        
        container.on("test", handler);      
        container.removeOn("test", handler);
    }); 
	
	afterAll(() => {
		container.remove();
	});
});