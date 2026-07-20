let READYEVENT_FIRED = false;
document.ready(() => {
	READYEVENT_FIRED = true;	
});

describe("Ready Event Support Tests", () => {
	beforeAll(() => {});
	
	it("ready event fired", () => {
		expect(READYEVENT_FIRED).toBe(true);
	});
	
	it("late ready function", () => {
		return new Promise(r => {
			document.ready(r);
		});
	});	
	
	it("the ready event name is queryable on the global namespace", () => {
		expect(defaultjs.extdom.READYEVENT).toBe("defaultjs--event--ready");
	});

	it("ready returns the document", () => {
		expect(document.ready(() => {})).toBe(document);
	});

	it("ready without once fires on every ready event", () => {
		let count = 0;
		document.ready(() => count++);
		expect(count).toBe(1);

		document.trigger(defaultjs.extdom.READYEVENT);
		expect(count).toBe(2);
	});

	it("ready with once fires only once", () => {
		let count = 0;
		document.ready(() => count++, true);
		expect(count).toBe(1);

		document.trigger(defaultjs.extdom.READYEVENT);
		expect(count).toBe(1);
	});

	afterAll(() => {});
});