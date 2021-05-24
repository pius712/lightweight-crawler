
/**
 * A simple way to check for HTML strings. Tests for a `<` within a string,
 * immediate followed by a letter and eventually followed by a `>`.
 *
 * @private
 */
const domRegex = /<[a-zA-Z][^]*>/;

/**
 * Check if string is HTML.
 *
 * @private
 * @category Utils
 * @param str - String to check.
 * @returns Indicates if `str` is HTML.
 */

function isHtml(str) {
    // Run the regex
    return domRegex.test(str);
}
function isNode(obj) {
    return (
        !!obj.name ||
        obj.type === 'root' ||
        obj.type === 'text' ||
        obj.type === 'comment'
    );
}



module.exports = {
    isHtml,
    isNode,
}
