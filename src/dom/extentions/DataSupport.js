import Extender from "../../utils/Extender";
const support = Extender("DataSupport", Prototype => {
	Prototype.data = function() {
		if (typeof this.___data___ === "undefined") {
			this.___data___ = {};
			if(typeof this.dataset !== "undefined")
				for (name in this.dataset)
					this.___data___[name] = this.dataset[name];
		}

		if (arguments.length == 0)
			return this.___data___;
		else if (arguments.length == 1)
			return this.___data___[arguments[0]] ;
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			delete this.___data___[arguments[0]];
		else
			this.___data___[arguments[0]] = arguments[1];
		
		return this;
	};
});
export default support;