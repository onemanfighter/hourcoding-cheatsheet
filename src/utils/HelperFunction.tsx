/**
 * Function to remove extension from the string.
 *
 * @param str String to remove extension from.
 * @returns String without extension.
 */
export function removeExtenstionFromString(str: string) {
  return str.match(/.*(?=\.)/g);
}

/**
 * Function to remove curly braces content from the string.
 *
 * @param str String to remove curly braces content from.
 * @returns String without curly braces content.
 */
function removeCurlyBracesContent(str: string) {
  let newData = str;
  newData = newData.replace(/{[^{}]+(?=})}/g, "");
  return newData;
}

/**
 * Function to remove metadata from the string.
 *
 * @param str String to remove metadata from.
 * @returns String without metadata.
 */
function removeMetaData(str: string) {
  let newData = str;
  newData = newData.replace(/^---([\s\S]*?)---/g, "");
  return newData;
}

/**
 * Function to fix the markdown file string.
 *
 * @param str String to fix.
 * @returns Fixed string.
 */
export function fixMdFileString(str: string) {
  return removeCurlyBracesContent(removeMetaData(str));
}
