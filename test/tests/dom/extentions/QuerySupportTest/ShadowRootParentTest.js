import { domId } from "@test/helpers/Utils";


customElements.define("test-query-support-shadow-element-1", class extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: 'open' });

		shadow.append(`
			<div class="0-1">
				<div class="1-1"></div>
				<div class="1-2"></div>
			</div>
			<div class="0-2">
				<div class="2-1"></div>
				<div class="2-2"></div>
			</div>
		`);

	}
});


describe("QuerySupport - parent tests (shadow root)", () => {
	beforeAll(async () => { });

	it("get parent with respect shadow root as braek (normal mode)", async () => {		
		const parentClass = domId();
		const container = create(`<div class="${parentClass}">
				<test-query-support-shadow-element-1></test-query-support-shadow-element-1>
			</div>
		`).first();
		document.body.append(container);		
		const element1 = container.children[0].shadowRoot.children[0];		
		expect(container.parent(true)).toBeDefined();
		
		expect(element1.parent() instanceof ShadowRoot).toBe(true);	
		expect(element1.parent(true) instanceof HTMLElement).toBe(true);
		
		expect(element1.parent(`.${parentClass}`)).toBe(null);			
		expect(element1.parent(`.${parentClass}`, true)).toBeDefined();
		
		container.remove();
	});

	afterAll(async () => { });
});