import Utils from "../../../src/utils/Utils";

describe("utils/Utils Tests", function() {	
	it("global == window", function(done){
		expect(Utils.global).toBe(window);
		done();
	});
	
	it("globalVar", function(done){
		window.__test__var__1 = {};
		expect(Utils.globalVar("__test__var__1")).toBe(window.__test__var__1);
		
		const testVar2 = {};
		expect(Utils.globalVar("__test__var__2", testVar2)).toBe(testVar2);
		expect(window.__test__var__2).toBe(testVar2);
		
		done();
	});
});