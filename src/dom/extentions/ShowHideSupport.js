import Extender from "../../utils/Extender";

const support = Extender("ShowHideSupport", Prototype => {
	Prototype.show = function(){
		if(this.___hidden__){
			this.style.display = this.___display___ || "";
			this.___hidden__ = false;
		}
		return this;
	};
	
	Prototype.hide = function(){
		if(!this.___hidden__){
			this.___display___ = this.style.display;
			this.style.display = "none";
			this.___hidden__ = true;
		}	
		
		return this;
	};
	
	Prototype.toggleShow = function(){
		if(this.___hidden__)
			return this.show();
		else
			return this.hide();
	};
	
});
export default support;