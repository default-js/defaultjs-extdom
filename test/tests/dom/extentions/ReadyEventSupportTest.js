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
	
	afterAll(() => {});
});