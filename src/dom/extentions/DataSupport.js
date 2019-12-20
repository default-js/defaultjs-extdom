import Extender from "../../utils/Extender";
const support = Extender("DataSupport", function(Prototype) {
	Prototype.data = function() {
		if (typeof this.__data__ === "undefined") {
			this.__data__ = {};
			if(typeof this.dataset !== "undefined")
				for (name in this.dataset)
					this.__data__[name] = this.dataset[name];
		}

		if (arguments.length == 0)
			return this.__data__;
		else if (arguments.length == 1)
			return this.__data__[arguments[0]] ;
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			delete this.__data__[arguments[0]];
		else
			this.__data__[arguments[0]] = arguments[1];
		
		return this;
	};
});
export default support;