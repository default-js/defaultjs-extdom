describe("JQuery compatibility Tests", function() {
	beforeAll(async () => {
		return await script("/static/jquery-2.2.4.min.js");
	});
	
	it("event test 1 -> event triggered by jquery", async () => {
		console.info("JQuery used his own event dispatching system... it's not compatible with native event dispatching!");
		
		/*Test this on a web page with jquery and nothig else!
		
		document.querySelector("#test").addEventListener("click", console.log);
		$("#trigger").trigger("click"); // event dosen't dispatched to native dom event listener -> no console log
		
		document.querySelector("#test").dispatchEvent(new Event("click",{bubble:true,cancable:true}));  // event is dispatched to native dom event listener -> result at console log		
		
		expect(true).toBe(true);
		*/
		const base = create("<div></div>").first();
		document.body.append(base);
		const button = create("<button>test</button>").first();
		base.append(button);	
		
		const actions = [];
		let errorJquery = false;	
		let errorNativ = false;
		$(base).on("click", () => errorJquery = true);
		base.on("click", () => errorNativ = true);
		actions.push(new Promise((resolve) => {
			button.on("click", (event) => {
				event.stopPropagation();
				resolve(true)
			});
		}));			
		actions.push(new Promise(
			(resolve) => {
				$(button).on("click", (event) => {
					event.stopPropagation();
					resolve(true)
				});
			}));
		
		setTimeout(() => {
			$(button).trigger("click");
			//button.trigger("click");
		}, 10);
		const result = await Promise.all(actions);
		expect(errorJquery).toBe(false);
		expect(errorNativ).toBe(false)
		expect(result[0]).toBe(true)
		expect(result[1]).toBe(true)
		
		base.remove();
	});
	
	
	/*it("event test 1 -> event triggered by jquery with jquery compatibility files", async () => {
		await import("../../../../compatibility/jquery/index.js");
		
		const base = create("<div></div>").first();
		document.body.append(base);
		const button = create("<button>test</button>").first();
		base.append(button);	
		
		const actions = [];
		let errorJquery = false;	
		let errorNativ = false;
		$(base).on("click", () => errorJquery = true);
		base.on("click", () => errorNativ = true);
		actions.push(new Promise((resolve) => {
			button.on("click", (e) => {
				e.preventDefault();
				e.stopPropagation();
				resolve(true)
			});
		}));			
		actions.push(new Promise(
			(resolve) => {
				$(button).on("click", (e) => {
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
					resolve(true)
				});
			}));
		
		setTimeout(() => {
			$(button).trigger("click");
			//button.trigger("click");
		}, 10);
		const result = await Promise.all(actions);
		expect(errorJquery).toBe(false);
		expect(errorNativ).toBe(false)
		expect(result[0]).toBe(true)
		expect(result[1]).toBe(true)
		
		base.remove();
	});*/
	
	
	it("event test 2 -> event triggered with defaultjs-extdom", async () => {	
		const base = create("<div></div>").first();
		document.body.append(base);
		const button = create("<button>test</button>").first();
		base.append(button);	
		
		const actions = [];
		let errorJquery = false;	
		let errorNativ = false;
		$(base).on("click", () => errorJquery = true);
		base.on("click", () => errorNativ = true);
		actions.push(new Promise((resolve) => {
			button.on("click", (e) => {
				e.preventDefault();
				e.stopPropagation();
				resolve(true)
			});
		}));			
		actions.push(new Promise(
			(resolve) => {
				$(button).on("click", (e) => {
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
					resolve(true)
				});
			}));
		
		setTimeout(() => {
			//$(button).trigger("click");
			button.trigger("click");
		}, 10);
		const result = await Promise.all(actions);
		expect(errorJquery).toBe(false);
		expect(errorNativ).toBe(false)
		expect(result[0]).toBe(true)
		expect(result[1]).toBe(true)
		
		base.remove();
	});
});