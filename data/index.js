module.exports = {
    simplifyConfig: {
        ignore: [
            'address', // geocoder
            'request', // technical
            'interface', // technical
            'render', // technical
            'forward', // technical
            'maximum', // technical
            'minimum', // technical
            'type', // technical
            'initial', // technical
            'selection', // technical
            'contains', // technical
            'implement', // technical
            'parameters', // technical
            'function', // technical
            'option', // technical
            'effect', // technical
            'submit', // technical
            'additional', // sales
            'might', // may does not have identical connotation
            'multiple', // many is not equivalent
            'equivalent', // equal does not have identical connotation
            'combined', // no good alternative
            'provide', // i don't think this is really that complicated a word
            'delete', // this is what the UI says
            'it is', // no good alternative
            'there are', // no good alternative
            'require' // technical
        ]
    },
    equalityConfig: {
        ignore: [
            'disabled', // technical
            'masterpiece', // not offensive enough
            'host' // technical
        ]
    },
    lintConfig: {
		"maximum-line-length": false
    },
	readabilityConfig: {
		'age': 18
	},
	profanitiesConfig: {
		ignore: [
			'killing'
		]
	},
	myrulesConfig: {
		acronyms:  [
			'GeoJSON',
			'PNG',
			'SVG',
			'JPEG',
			'JPG',
			'MBTiles',
			'PDF',
			'API',
			'GL',
			'HTTP',
			'HTTPS',
			'TileJSON',
			'OpenStreetMap',
			'UTFGrid',
			'CORS',
			'JSON',
			'S3',
			'AWS'
		],
		forbidden: [
			'easy',
			'easily',
			'simply',
			'simple',
			'obviously',
			'just',
			'basically',
			'procure',
			'sexy',
			'insane',
			'clearly'
		]
	}
};
