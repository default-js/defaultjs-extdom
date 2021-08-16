import Utils from "@test/helpers/Utils";

describe("QuerySupport Tests", () => {
	beforeAll(async () => {
		window.document.body.innerHTML = window.__html__["test/sites/QuerySupportTest.html"];
	});

	it("closest is a child element", async () => {
		let expected = find("#closest-nested-test-1 > span > span > span").first();
		let element = find("#closest-nested-test-1").first().closests("[data-closest-target]").first();
		expect(element).toBe(expected);
	});

	it("closest is a parent", async () => {
		let expected = find("#closest-nested-test-2 [data-closest-target]");
		let elements = find("#closest-nested-test-2 > span > span > span").first().closests("[data-closest-target]");
		expect(elements).toBeDefined();
		expect(elements.length).toBe(expected.length);
	});

	it("closest is the element your self", async () => {
		let expected = find("#closest-nested-test-1 [data-closest-target]").first();
		let element = find("#closest-nested-test-1 > span > span > span").first().closests("[data-closest-target]").first();
		expect(element).toBe(expected);
	});

	afterAll(async () => {
		window.document.body.innerHTML = "";
	});
});
