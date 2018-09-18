/**
 * @author syt123450 / https://github.com/syt123450
 */

let CloseData = ( function() {

	return "data:image/png;base64,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";

} )();

export { CloseData };