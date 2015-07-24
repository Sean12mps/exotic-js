/* Ab */'use strict';

var exotic = function ( obj ) {
	
	var self = this;

	// 	Construct
	self.objStyle = obj;

	// 	Method
	self.run = function ( obj ) {

		var args;

		if ( arguments.length == 1 && typeof( arguments[0] ) == 'object' ) {

			self.objStyle = $.extend( true, self.objStyle, obj );;

		}

		if ( self.objStyle ) {

			for ( var selector in self.objStyle ) {

				var styleObj = self.objStyle[selector];

				for ( var cmd in styleObj ) {

					if ( typeof( styleObj[cmd] ) == 'function' ) {

						var temp = styleObj[cmd];

						styleObj[cmd] = temp.apply( self.objStyle );
					}
				}

				$( ''+ selector +'' ).css( self.objStyle[''+ selector +''] );
			}
		}
	};
};

var _exotic = new exotic();

_exotic.base = {

	// 	General Styling
	'general' : {
		'p' : {
			'fontSize' : '14px'
		}
	},

	// 	Typography
	'typography' : {
		'h1' : {
			'fontSize' : '26px'
		},
		'h2' : {
			'fontSize' : '24px'
		},
		'h3' : {
			'fontSize' : '20px'
		},
		'h4' : {
			'fontSize' : '18px'
		},
		'h5' : {
			'fontSize' : '16px'
		},
		'h6' : {
			'fontSize' : '14px'
		},
		'h1, h2, h3, h4, h5, h6' : {
			'lineHeight' : 'normal'
		}
	}
};

_exotic.autorun = {};

for ( var _exoName in _exotic.base ) {

	_exotic.autorun[_exoName] = true;
}

jQuery( document ).ready( function ( $ ) {

	for ( var baseName in _exotic.base ) {

		if ( _exotic.autorun[baseName] ) {

			_exotic.run( _exotic.base[baseName] );
		}
	}
} );
