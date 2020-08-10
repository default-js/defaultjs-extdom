import Extender from "../../utils/Extender";

const isHidden = (element) =>{
	if(typeof element.___hidden__ == "undefined")
		element.___hidden__ = element.style.display === "none"
	
	return element.___hidden__;
}

const support = Extender("ShowHideSupport", Prototype => {
	Prototype.show = function(){
		if(isHidden(this)){
			this.style.display = this.___display___ || "";
			this.___hidden__ = false;
		}
		return this;
	};
	
	Prototype.hide = function(){
		if(!isHidden(this)){
			this.___display___ = this.style.display !== "none" ? this.style.display : undefined;
			this.style.display = "none";
			this.___hidden__ = true;
		}	
		
		return this;
	};
	
	Prototype.toggleShow = function(){
		return isHidden(this) ? this.show() : this.hide();
	};
	
});
export default support;