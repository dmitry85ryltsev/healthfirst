$(document).ready(function() {
	$("a.tooltip").mouseenter(function() {
		$(this).data('title', $(this).attr('title'));
		$(this).removeAttr('title');
		var title = $(this).data('title');
		var tooltip = $('<div class="tooltip-box" >' + title + '</div>');
		tooltip.appendTo(this);
		tooltip.css({ top: $(this).offset().top - 50, left: $(this).offset().left - 15});
		tooltip.show(100).html(title);	
	});
	$("a.tooltip").mouseleave(function() {
		$(this).find(".tooltip-box").fadeOut('fast').remove();
	});
	
	if(navigator.appVersion.indexOf("MSIE 8.")!=-1) {
		$('input[type=checkbox],input[type=radio]').prettyCheckboxes();
	}
});