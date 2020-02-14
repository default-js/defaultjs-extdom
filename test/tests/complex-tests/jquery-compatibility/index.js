describe("GlobalTest Create", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
	
	it("create a singele element", function(){	
		const base = create("<div></div>").first();
		document.body.append(base);
		const button = create("<button>test</button>").first();
		base.append(button);	
		
		const actions = [];
		let errorJquery = false;	
		let errorNativ = false;
		return new Promise(r => {
			const script = create("<script></script>").first();
			script.onload = () => {
				r()
			};			
			base.append(script);
			script.src = "/static/jquery-2.2.4.min.js";
		})
		.then(() => {			
			$(base).on("click", () => errorJquery = true);
			base.on("click", () => errorNativ = true);
			actions.push(new Promise((resolve) => {
				button.on("click", (e) => {
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
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
			}, 1000);
			return Promise.all(actions);
		})
		.then((result) => {
			if(!errorJquery && !errorNativ && result[0] && result[1])
				return Promise.resolve();
			
			return Promise.reject();
		});				
	});
});