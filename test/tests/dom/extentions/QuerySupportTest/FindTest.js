describe("QuerySupport Tests", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/QuerySupportTest.html"];
		done();
	});
	
	it("find by id", function(done){
		let expected = document.querySelector("#id-1");
		let element = document.find("#id-1");
		expect(element).toBeDefined();
		expect(element.length).toBe(1);		
		expect(element.first()).toBe(expected);
		done();
	});
	
	it("find all div's", function(done){
		let expected = document.querySelectorAll("div");
		let elements = document.find("div");
		expect(elements).toBeDefined();
		expect(elements.length).toBe(expected.length);
		expect(elements).toEqual(expected);
		done();
	});
	
	it("find child's ", function(done){
		let expected = document.querySelectorAll("#id-1 div");
		let elements = document.find("#id-1 div");
		expect(elements).toBeDefined();
		expect(elements.length).toBe(expected.length);
		expect(elements).toEqual(expected);
		done();
	});
	
	it("find(:parent) (custom pseudo selector)", function(done){
		let expected = document.querySelector("#id-3-1");
		let element = document.find("#id-3-1-1 :parent");
		expect(element).toBeDefined();
		expect(element.length).toBe(1);
		expect(element.first()).toBe(expected);
		done();
	});
	
	it("find(:parent :parent) (custom pseudo selector)", function(done){
		let expected = document.querySelector("#id-3");
		let element = document.find("#id-3-1-1 :parent :parent");
		expect(element).toBeDefined();
		expect(element.length).toBe(1);
		expect(element.first()).toBe(expected);
		done();
	});
	
	it("find(:parent(\".root-parent\")) (custom pseudo selector)", function(done){
		let expected = document.querySelector("#id-3");
		let element = document.find("#id-3-1-1 :parent(\".root-parent\")");
		expect(element).toBeDefined();
		expect(element.length).toBe(1);
		expect(element.first()).toBe(expected);
		done();
	});

	it("find(:parent ) - multible cases", async () => {
		const content = create(`<div selector-test-parent>
				<div>
					<span></span>
				</div>
				<p></p>
			</div>`).first();
		document.body.appendChild(content);

		const span = content.find("span").first();
		const p = content.find("p").first();
		
		let result = span.find(":parent( \"[selector-test-parent]\" ) p").first();		
		expect(result).toBe(p);
		result = span.find(":parent(\"[selector-test-parent]\") p").first();		
		expect(result).toBe(p);
		result = span.find(":parent('[selector-test-parent]') p").first();		
		expect(result).toBe(p);
		result = span.find(":parent( [selector-test-parent] ) p").first();		
		expect(result).toBe(p);
		result = span.find(":parent([selector-test-parent]) p").first();	
		expect(result).toBe(p);
		result = span.find(":parent([selector-test-parent]:not(p) ) p").first();		
		expect(result).toBe(p);
		result = span.find(":parent(\"[selector-test-parent]:not(p[data=\"test\"]) \" ) p").first();		
		expect(result).toBe(p);
		result = span.find(":parent('[selector-test-parent]:not(p[data=\"test\"]) ') p").first();		
		expect(result).toBe(p);


		content.remove();
	});
	
	
	it("find(:parent) with a nested bracket group", async () => {
		const content = create(`<div class="root" data-nested><div><p></p><span></span></div></div>`).first();
		document.body.appendChild(content);

		const span = content.find("span").first();

		expect(span.find(":parent(div:has(p):not(span))").first()).toBe(span.parentElement);
		expect(span.find(":parent([data-nested]:has(span))").first()).toBe(content);

		content.remove();
	});

	it("find(:parent) followed by a bracket group", async () => {
		const content = create(`<div data-followed><span></span><p class="target"></p></div>`).first();
		document.body.appendChild(content);

		const span = content.find("span").first();
		const target = content.find("p").first();

		expect(span.find(":parent p:not(.x)").first()).toBe(target);
		expect(span.find(":parent([data-followed]) p:not(.x)").first()).toBe(target);

		content.remove();
	});

	it("find(:parent) with a bracket inside a string", async () => {
		const content = create(`<div data-bracket="a)b"><span></span></div>`).first();
		document.body.appendChild(content);

		const span = content.find("span").first();

		expect(span.find(":parent([data-bracket=\"a)b\"])").first()).toBe(content);

		content.remove();
	});

	it("find(:parent) without a bracket group returns the parent", async () => {
		const content = create(`<div data-plain><span></span></div>`).first();
		document.body.appendChild(content);

		const span = content.find("span").first();

		expect(span.find(":parent").first()).toBe(content);
		expect(span.find(":parent()").first()).toBe(content);
		expect(span.find(":parent(   )").first()).toBe(content);

		content.remove();
	});

	it("find(:parent) ignores a token inside a string or a group", async () => {
		const content = create(`<div data-token=":parent"><span></span></div>`).first();
		document.body.appendChild(content);

		expect(content.find("[data-token=\":parent\"]").length).toBe(0);
		expect(document.find("[data-token=\":parent\"]").first()).toBe(content);

		content.remove();
	});

	it("find(:parent) throws by an unclosed bracket group", async () => {
		const content = create(`<div><span></span></div>`).first();
		const span = content.find("span").first();

		expect(() => span.find(":parent(div")).toThrowError("Invalid query!");
	});

	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});