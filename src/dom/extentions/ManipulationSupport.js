import Extender from "../../utils/Extender";
import Utils from "../../utils/Utils";

/**
 * Content accepted by the insert functions. Strings are parsed to nodes by the
 * global create() function, lists are inserted item by item.
 *
 * @typedef {Node|NodeList|HTMLCollection|Node[]|string} Content
 */

const support = Extender("ManipulationSupport", Prototype => {
	/**
	 * Removes all child nodes.
	 *
	 * @returns {Node} this
	 */
	Prototype.empty = function(){
		let nodes = this.childNodes
		while(nodes.length != 0)			
			nodes[0].remove(true);
		
		return this;
	};
	
	/**
	 * @returns {NodeList} the live list of child nodes
	 */
	Prototype.content = function(){
		return this.childNodes;
	};	
	
	/**
	 * Gets or sets the markup of this node.
	 *
	 * html() returns the innerHTML, html(true) the outerHTML and html(false) the
	 * innerHTML. Any other argument replaces all children by the given content.
	 *
	 * @param {...(boolean|Content)} content - null or undefined throws
	 * @returns {string|Node} the markup, or this when content was set
	 */
	Prototype.html = function(){
		if(arguments.length == 0)			
			return this.innerHTML;
		else if(arguments.length == 1 && typeof arguments[0] === "boolean")
			if(arguments[0])
				return this.outerHTML;
			else
				return this.innerHTML;
		else {			
			this.empty();
			for(let i = 0; i < arguments.length; i++)
				this.append(arguments[i]);		
		}
			
		return this;
	};
	
	/**
	 * Appends the content as last children.
	 *
	 * @param {...Content} content
	 */
	const append = function(){
		const append = Prototype.appendChild.bind(this);
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(arg instanceof Node)
				this.appendChild(arg);
			else if(typeof arg === "string")
				create(arg).forEach(append);
			else if(typeof arg.forEach === "function")
				arg.forEach(append);
		}
	};	
	Prototype.append = append;
	
	/**
	 * @param {Node} aFirstElement - the node to insert before
	 * @param {Node} aElement - the node to insert
	 */
	const prepend = function(aFirstElement, aElement){
		this.insertBefore(aElement, aFirstElement);
	};

	/**
	 * Inserts the content as first children.
	 *
	 * @param {...Content} content
	 */
	Prototype.prepend = function(){
		if(this.childNodes.length == 0)
			append.apply(this, arguments);
		else {
			const first = this.childNodes.first();
			const insert = prepend.bind(this, first);
			for(let i = 0; i < arguments.length; i++){
				const arg = arguments[i];
				if(arg instanceof Node)
					insert(arg);
				else if(typeof arg === "string")
					create(arg).forEach(insert);
				else if(typeof arg.forEach === "function")
					arg.forEach(insert);
			}
		}
	};
	
	/**
	 * Replaces a node by the given content.
	 *
	 * Called with one argument, this node is replaced within its parent node.
	 * Called with two arguments, the first one - a child of this node - is
	 * replaced by the second one.
	 *
	 * Unlike the other insert functions this one does not accept html strings.
	 *
	 * @param {...(Node|NodeList|HTMLCollection|Node[])} content - the new content, or the old node followed by the new content
	 * @throws {Error} when called without arguments
	 */
	Prototype.replace = function(){
		if(arguments.length < 1)
			throw new Error("Insufficient arguments! One or two nodes required!");
		
		const parent = arguments.length == 1 ? this.parentNode : this;
		const oldNode = arguments.length == 1 ? this : arguments[0];
		const newNode = arguments.length == 1 ? arguments[0] : arguments[1];
		
		if(newNode instanceof Array || newNode instanceof NodeList || newNode instanceof HTMLCollection){
			newNode.forEach(aItem => parent.insertBefore(aItem, oldNode));
			oldNode.remove();
		}
		else
			parent.replaceChild(newNode,oldNode);
	};
	
	/**
	 * Inserts the content directly after this node.
	 *
	 * @param {...Content} content
	 * @throws {Error} when this node has no parent node
	 */
	Prototype.after = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes after this node! Parent node not available!");
		
		const parent = this.parentNode;
		const next = this.nextSibling;
		if(next)
			Prototype.before.apply(next, arguments);
		else
			Prototype.append.apply(parent, arguments);
	};	
	
	/**
	 * Inserts the content directly before this node.
	 *
	 * @param {...Content} content
	 * @throws {Error} when this node has no parent node
	 */
	Prototype.before = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes after this node! Parent node not available!");
		
		const parent = this.parentNode;
		const insert = (node) => {parent.insertBefore(node, this);}
		for(let i = 0; i < arguments.length; i++){
			const arg = arguments[i];
			if(arg instanceof Node)
				insert(arg);
			else if(typeof arg === "string")
				create(arg).forEach(insert);
			else if(typeof arg.forEach === "function")
				arg.forEach(insert);
		}
	};	
});
export default support;