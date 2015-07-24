# exotic-js
My solution for cutting down css usage.

## Usage
- Create an object that contains css selector or selectors as it's attribute.
- Create a new variable of exotic, with your object thrown into it as the function's parameter.

```
var custom_style = {
	'body' : {
		'backgroundColor' : 'rgba( 0, 0, 0, 1 )',
		'padding' : '0px',
		'margin' : '0px'
	},
	'#app' : {
		'width' : window.innerWidth,
		'height' : window.innerHeight
	},
	'p' : {
		'fontSize'	: '24px',
		'lineHeight' : '18px'
	},
	'a' : {
		'width' : function () {
			return this.a.height;
		},
		'height' : '20px'
	}
};
var styleMaster = new exotic( customStyle );
```

- Wherever you feel like it, most of the time it'll be at the end of a document, or on jQuery( document ).ready() event, you have to run the function.
- This would assign all of your element with an inline css object.

`
styleMaster.run();
`

- Should you need to overide some of your object's property, you can also run the function with a new object argument.
- This function uses jQuery.extend() method.

```
styleMaster.run( { 
	'a' : { 
		'width' : '2em', 
		'display' : 'block' 
	} 
} );
```

## Defaults
By defaults, exotic.js comes with it's own js object. This object is still on development, since I'm not sure of what to add there.
This object, uses the same way to run as your normal exotic variables. It's executed in jQuery( document ).ready() event, so you'll
have many chances to overide the object, or even disable it.

Stop autorunning typography defaults
`
_exotic.autorun.typography = false;
`

Edit typography value
`
_exotic.base.typography.h1 = { 'fontSize' : '4em' };
`