let PlusData = (function(){
	return "data:image/png;base64,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";
})();

export { PlusData };