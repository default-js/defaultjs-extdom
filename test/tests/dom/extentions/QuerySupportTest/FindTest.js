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
	
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});