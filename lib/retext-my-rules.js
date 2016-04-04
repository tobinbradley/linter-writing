var nlcstToString = require('nlcst-to-string');
var search = require('nlcst-search');
var quotation = require('quotation');
var options = require('../data').myrulesConfig;

var rules = {};

options.forbidden.forEach(function(word) {
    rules[word] = { forbid: true };
});

options.acronyms.forEach(function(word) {
    rules[word] = { cased: true, replace: [word] };
});

/**
 * Transformer.
 *
 * @param {NLCSTNode} cst - Syntax tree.
 * @param {VFile} file - Virtual file.
 */
function transformer(tree, file) {

    // visit(cst, 'ParagraphNode', factory(file));
    search(tree, rules, function(match, position, parent, phrase) {
        var pattern = rules[phrase];
        var replace = pattern.replace;
        var matchedString = nlcstToString(match);
        var value = quotation(matchedString, '`', '`');		
        var message = undefined;

        if (pattern.forbid === true) {
            message = 'Remove ' + value;
        } else if (!pattern.cased || matchedString !== replace[0]) {
            message = 'Replace ' + value + ' with ' + quotation(replace, '`', '`').join(', ');
			if (pattern.omit) {
				message += ', or remove it';
			}
        }

        if (message) {
            message = file.warn(message, {
                'start': match[0].position.start,
                'end': match[match.length - 1].position.end
            });

            message.ruleId = phrase;
            message.source = 'mapbox';
        }
    });

    return tree;
}

/**
 * Attacher.
 *
 * @return {Function} - `transformer`.
 */
function attacher() { return transformer; }

/*
 * Expose.
 */
module.exports = attacher;