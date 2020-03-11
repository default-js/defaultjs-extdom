ready(() => {
	if ($) {
		const org$trigger = $.fn.trigger
		$.fn.trigger = function(type, data) {
			this.each(function() {
				this.trigger(type, data);
			});

			return org$trigger.apply(this, arguments);
		};
	}
});