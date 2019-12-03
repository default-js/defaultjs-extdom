describe("EventSupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/EventSupportTest.html"];
		done();
	});
	
	it("is \"on\" function available", function(done){		
		expect(typeof Document.prototype.on).toBe("function");
		expect(typeof HTMLElement.prototype.on).toBe("function");
		done();
	});
	
	it("test addEventListener", function(done){
		window.addEventListener("click", function(event){
			expect(event).toBeDefined();
			done();
		});
		document.addEventListener("click", function(event){
			expect(event).toBeDefined();
			done();
		});
		
		document.trigger("click");
	});	
	
	it("test removeOn", function(done){
	    let container = find("#remove-on");
	    let handler = function(event){ };
	    
	    container.on("test", handler);	    
	    container.removeOn("test");
	    
	    container.on("test", handler);     
        container.removeOn(handler);
        
        container.on("test", handler);      
        container.removeOn("test", handler);

        
        done();
    }); 
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});