const extendPrototype = function(){
	const args = 	Array.from(arguments);
	const type = args.shift();	
	while(args.length > 0){
		const extender = args.shift();
		extender(type);
	}
};

export default extendPrototype;