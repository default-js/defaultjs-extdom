import Extender from "../../utils/Extender";

const HIDEVALUE = "none";

/**
 * Whether the element is hidden by its own inline display, a display coming from
 * a css rule is not seen.
 *
 * @param {HTMLElement} element
 * @returns {boolean}
 */
const isHidden = (element) => {
	return element.style.display === HIDEVALUE
};

/**
 * Replaces show and hide on the element by versions bound to it, capturing the
 * display to restore on show.
 *
 * The display is read once, on the first show or hide, and kept from then on -
 * the bound methods shadow the prototype, so init does not run again. A display
 * set directly afterwards is not picked up. When the element is hidden at that
 * first call the captured value is the empty string, falling back to the css.
 *
 * @param {HTMLElement} element
 * @returns {HTMLElement} the element
 */
const init = (element) => {
	let display = !isHidden(element) ? element.style.display : "";

	element.show = (function(){
		this.style.display = display;
		return this;
	}).bind(element);

	element.hide = (function(){
		this.style.display = HIDEVALUE;
		return this;
	}).bind(element);

	return element;
};


const support = Extender("ShowHideSupport", Prototype => {
	/**
	 * Shows the element by restoring the display captured before it was hidden.
	 *
	 * @returns {HTMLElement} this
	 */
	Prototype.show = function() {
		return init(this).show.apply(null, arguments)
	};

	/**
	 * Hides the element by setting its display to none.
	 *
	 * @returns {HTMLElement} this
	 */
	Prototype.hide = function() {
		return init(this).hide.apply(null, arguments)
	};

	/**
	 * Shows the element when it is hidden, hides it otherwise.
	 *
	 * Only an inline display of none counts as hidden, so an element hidden by a
	 * css rule is hidden inline first before it shows.
	 *
	 * @returns {HTMLElement} this
	 */
	Prototype.toggleShow = function() {
		return isHidden(this) ? this.show() : this.hide();
	};

});
export default support;