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
		try {
			let handler = function(event) { };
						
			container.on("test", handler);
			container.removeOn(handler);
			expect(container.__wrapperhandlemap__.size).toBe(0);

			container.on("test", handler);
			container.removeOn(handler, "test");
			expect(container.__wrapperhandlemap__.size).toBe(0);
			
			container.on(["test1", "test2", "test3"], handler);
			container.removeOn(handler, ["test1", "test2", "test3"]);			
			expect(container.__wrapperhandlemap__.size).toBe(0);
		} catch (e) {
			expect(e).toBeUndefined();
		}

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

	afterAll(() => {
		container.remove();
	});
});
