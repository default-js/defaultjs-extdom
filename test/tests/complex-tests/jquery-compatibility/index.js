describe("JQuery compatibility Tests", function() {
	beforeAll(() =>{});
	
	it("event test 1", () => {	
		const base = create("<div></div>").first();
		document.body.append(base);
		const button = create("<button>test</button>").first();
		base.append(button);	
		
		const actions = [];
		let errorJquery = false;	
		let errorNativ = false;
		script("/static/jquery-2.2.4.min.js")
		.then(() => {			
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
				button.trigger("click");
			}, 10);
			return Promise.all(actions);
		})
		.then((result) => {
			base.remove();
			if(!errorJquery && !errorNativ && result[0] && result[1])
				return Promise.resolve();
			
			return Promise.reject();
		});				
	});
});