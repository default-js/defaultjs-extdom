describe("EventSupport Test", () => {
	const container = create("<div></div>");

	beforeAll(() => {
		container.append(create(window.__html__["test/sites/EventSupportTest.html"]));
	});

	it('is "on" function available', () => {
		expect(typeof Document.prototype.on).toBe("function");
		expect(typeof HTMLElement.prototype.on).toBe("function");
	});

	it("test addEventListener", () => {
		let result = [
			new Promise((r) => {
				window.addEventListener("click", (event) => {
					expect(event).toBeDefined();
					r();
				});
			}),
			new Promise((r) => {
				document.addEventListener("click", (event) => {
					expect(event).toBeDefined();
					r();
				});
			}),
		];
		result = Promise.all(result);
		document.trigger("click");
		return result;
	});

	it("test on with multiple events as string", async () => {
		const container = create("<div><button></button></div>").first();
		const button = container.find("button").first();

		return new Promise((resolve, reject) => {
			let counter = 0;
			button.on("test-a test-b", (event) => {
				counter = counter + 1;
			});

			button.trigger("test-a");
			button.trigger("test-b");
			setTimeout(() => {
				container.remove();
				if (counter != 2) reject();
				else resolve();
			}, 1000);
		});
	});

	it("test on with multiple event as array", async () => {
		const container = create("<div><button></button></div>").first();
		const button = container.find("button").first();

		return new Promise((resolve, reject) => {
			let counter = 0;
			button.on(["test-a", "test-b"], (event) => {
				counter = counter + 1;
			});

			button.trigger("test-a");
			button.trigger("test-b");
			setTimeout(() => {
				container.remove();
				if (counter != 2) reject();
				else resolve();
			}, 1000);
		});
	});

	it("test removeOn", () => {
		let container = create("<div>").first();
		let counter = 0;
		let handler = function(event) { counter = counter + 1; };

		container.on("test", handler);
		container.removeOn(handler, "test");
		container.trigger("test");
		expect(counter).toBe(0);

		container.on(["test1", "test2", "test3"], handler);
		container.removeOn(handler, ["test1", "test2", "test3"]);
		container.trigger("test1");
		container.trigger("test2");
		container.trigger("test3");
		expect(counter).toBe(0);

		container.remove();
	});

	it("test removeOn without events removes all events", () => {
		let container = create("<div>").first();
		let counter = 0;
		let handler = function(event) { counter = counter + 1; };

		container.on(["test1", "test2", "test3"], handler);
		container.removeOn(handler);

		container.trigger("test1");
		container.trigger("test2");
		container.trigger("test3");
		expect(counter).toBe(0);

		container.remove();
	});

	it("test removeOn without events removes all registrations of a handle", () => {
		let container = create("<div>").first();
		let counter = 0;
		let handler = function(event) { counter = counter + 1; };

		container.on(["test-a", "test-b"], handler);
		container.on("test-c", handler);
		container.removeOn(handler);

		container.trigger("test-a");
		container.trigger("test-b");
		container.trigger("test-c");
		expect(counter).toBe(0);

		container.remove();
	});

	it("test on with an array of multiple event types per entry", () => {
		let container = create("<div>").first();
		let counter = 0;
		let handler = function(event) { counter = counter + 1; };

		container.on(["test-a", "test-b test-c", "test-d,test-e"], handler);
		container.trigger("test-a");
		container.trigger("test-b");
		container.trigger("test-c");
		container.trigger("test-d");
		container.trigger("test-e");
		expect(counter).toBe(5);

		container.remove();
	});

	it("test on throws by invalid event types", () => {
		let container = create("<div>").first();
		let handler = function(event) { };

		expect(() => container.on([""], handler)).toThrow();
		expect(() => container.on(["   "], handler)).toThrow();
		expect(() => container.on(["test", ""], handler)).toThrow();
		expect(() => container.on([null], handler)).toThrow();
		expect(() => container.on([0], handler)).toThrow();
		expect(() => container.on({}, handler)).toThrow();

		container.remove();
	});

	it("test on with surrounding whitespaces", () => {
		let container = create("<div>").first();
		let counter = 0;
		let handler = function(event) { counter = counter + 1; };

		container.on(" test-a test-b ", handler);
		container.trigger("test-a");
		container.trigger("test-b");
		expect(counter).toBe(2);

		container.remove();
	});

	it("test on throws by an empty array of event types", () => {
		let container = create("<div>").first();
		let handler = function(event) { };

		expect(() => container.on([], handler)).toThrow();

		container.remove();
	});

	it("test on throws by missing event types", () => {
		let container = create("<div>").first();
		let handler = function(event) { };

		expect(() => container.on("", handler)).toThrow();
		expect(() => container.on("   ", handler)).toThrow();
		expect(() => container.on(null, handler)).toThrow();

		container.remove();
	});

	it("test removeOn of one event only", () => {
		let container = create("<div>").first();
		let counter = 0;
		let handler = function(event) { counter = counter + 1; };

		container.on(["test1", "test2"], handler);
		container.removeOn(handler, "test1");

		container.trigger("test1");
		expect(counter).toBe(0);

		container.trigger("test2");
		expect(counter).toBe(1);

		container.remove();
	});

	it("test removeOn of a handle used for multiple registrations", () => {
		let container = create("<div>").first();
		let counter = 0;
		let handler = function(event) { counter = counter + 1; };

		container.on("test-a", handler);
		container.on("test-b", handler);
		container.removeOn(handler, ["test-a", "test-b"]);

		container.trigger("test-a");
		container.trigger("test-b");
		expect(counter).toBe(0);

		container.remove();
	});

	it("test removeOn of a handle registered by capture", () => {
		let container = create("<div>").first();
		let counter = 0;
		let handler = function(event) { counter = counter + 1; };

		container.on("test", handler, true);
		container.removeOn(handler, "test");

		container.trigger("test");
		expect(counter).toBe(0);

		container.remove();
	});

	it("test on with option once", () => {
		let container = create("<div>").first();
		let counter = 0;
		let handler = function(event) { counter = counter + 1; };

		container.on("test", handler, { once: true });
		container.trigger("test");
		container.trigger("test");
		expect(counter).toBe(1);

		container.remove();
	});

	it("test trigger with timeout", async () => {
		const container = create("<div><button></button></div>").first();
		const button = container.find("button").first();

		return new Promise((resolve, reject) => {
			const timeout = 100;
			const timeoutid = setTimeout(reject, timeout * 2);

			button.on("test", (event) => {
				clearTimeout(timeoutid);
				const start = event.detail;
				const end = performance.now();
				const diff = end - start;

				container.remove();

				if (timeout > diff && diff > timeout * 2) reject();
				else resolve();
			});

			button.trigger(timeout, "test", performance.now());
		});
	});

	it("test trigger with timeout - prevent multi trigger", async () => {
		const container = create("<div><button></button></div>").first();
		const button = container.find("button").first();

		return new Promise((resolve, reject) => {
			let counter = 0;
			button.on("test", (event) => {
				counter = counter + 1;
			});

			button.trigger(10, "test");
			button.trigger(10, "test");
			button.trigger(10, "test");
			setTimeout(() => {
				container.remove();
				if (counter > 1) reject();
				else resolve();
			}, 1000);
		});
	});


	it("test trigger with event.detail data", async () => {
		const container = create("<div><button></button></div>").first();
		const button = container.find("button").first();

		const promise = new Promise((resolve, reject) => {			
			button.on("test", (event) => {
				expect(event.detail).toBeTrue();
				resolve();
			});
		});		

		button.trigger( "test", true);

		return promise;
	});

	it("test trigger with event.detail = 0", async () => {
		const container = create("<div><button></button></div>").first();
		const button = container.find("button").first();

		const promise = new Promise((resolve, reject) => {			
			button.on("test", (event) => {
				expect(event.detail).toBe(0);
				resolve();
			});
		});		

		button.trigger( "test", 0);

		return promise;
	});

	it("test trigger with event.detail = false", async () => {
		const container = create("<div><button></button></div>").first();
		const button = container.find("button").first();

		const promise = new Promise((resolve, reject) => {			
			button.on("test", (event) => {
				expect(event.detail).toBe(false);
				resolve();
			});
		});		

		button.trigger( "test", false);

		return promise;
	});

	it("on with multiple events as string registers only the given events", () => {
		const element = create("<div></div>").first();
		let counter = 0;
		const handler = function(event){ counter = counter + 1; };

		element.on("test-a test-b", handler);
		element.trigger("test-a");
		element.trigger("test-b");
		expect(counter).toBe(2);

		element.trigger(" ");
		element.trigger("undefined");
		expect(counter).toBe(2);
	});

	it("on with multiple events separated by comma", () => {
		const element = create("<div></div>").first();
		let counter = 0;
		const handler = function(event){ counter = counter + 1; };

		element.on("test-a, test-b", handler);
		element.trigger("test-a");
		element.trigger("test-b");
		expect(counter).toBe(2);
	});

	it("on with multiple events separated by comma and spaces", () => {
		const element = create("<div></div>").first();
		let counter = 0;
		const handler = function(event){ counter = counter + 1; };

		element.on("test-a , test-b", handler);
		element.trigger("test-a");
		element.trigger("test-b");
		expect(counter).toBe(2);

		element.trigger("");
		expect(counter).toBe(2);
	});

	afterAll(() => {
		container.remove();
	});
});
