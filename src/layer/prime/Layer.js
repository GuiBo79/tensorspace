import { colorUtils } from "../../utils/ColorUtils";

function Layer(config) {
	this.scene = undefined;
	this.layerIndex = undefined;
	this.center = undefined;
	this.nextLayer = undefined;
	this.lastLayer = undefined;

	// store all neural value as an array

	this.neuralValue = undefined;

	this.activation = undefined;
	this.neuralNum = undefined;
	this.outputShape = [];
	this.neuralGroup = undefined;

	// store all 2d maps in layer
	this.fmList = [];

	// store the reference placeholder object
	this.layerPlaceHolder = undefined;

	this.name = config.name;

	// output index to fit the layer
	this.resourceOutputIndex = undefined;

	// color for layer neural visualization
	this.color = undefined;
}

Layer.prototype = {

	setNextLayer: function(layer) {
		this.nextLayer = layer;
	},

	setLastLayer: function(layer) {
		this.lastLayer = layer;
	},

	setEnvironment: function(scene) {
		this.scene = scene;
	},

	clear: function() {

		if (this.neuralValue !== undefined) {

			if (this.isOpen) {

				let zeroValue = new Int8Array(this.neuralValue.length);
				let zeroColors = colorUtils.getAdjustValues(zeroValue);
				this.updateValue(zeroColors);

			}

			this.neuralValue = undefined;

		}

	}

};


export { Layer };