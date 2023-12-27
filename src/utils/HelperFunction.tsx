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

/**
 * Function to process the date from the name.
 *
 * @param name Name of the cheatsheet.
 * @returns Processed date.
 */
export function processDateFromName(name: string) {
  return (
    name.match(/\d{4}-\d{2}-\d{2}/g) ? name.slice(11) : name
  ).toUpperCase();
}
