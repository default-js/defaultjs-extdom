/**
 * Applies extensions to the prototype of a type.
 *
 * @param {Function} aType - the type whose prototype gets extended
 * @param {...function(Function):void} theExtenders - the wrapped extensions to apply, in order
 */
const extendPrototype = function(){
	const args = Array.from(arguments);
	const type = args.shift();
	while(args.length > 0){
		const extender = args.shift();
		extender(type);
	}
};

export default extendPrototype;