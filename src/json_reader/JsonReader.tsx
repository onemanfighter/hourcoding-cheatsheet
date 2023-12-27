/**
 * Function to fetch the data from the data.json file.
 *
 * @returns Data from the data.json file.
 */
export async function fetchData() {
  return await import("../data/json/data.json").then((res) => res.default);
}

/**
 * Function to fetch the data from the datafile.json file.
 *
 * @returns Data from the datafile.json file.
 */
export async function fetchMainFileData() {
  return await import("../data/json/MainDetailDataFile.json").then(
    (res) => res.default
  );
}

/**
 * Function to fetch the data from the recent.json file.
 *
 * @returns Data from the recent.json file.
 */
export async function fetchRecentFileData() {
  return await import(`../data/json/recent.json`).then((res) => res.default);
}

/**
 * Function to fetch the data from the recent.json file.
 *
 * @returns Data from the recent.json file.
 */
export async function fetchLangFileData() {
  return await import(`../data/json/recent.json`).then((res) => res.default);
}

/**
 * Function to fetch the data from the overapi.json file.
 *
 * @returns Data from the overapi.json file.
 */
export async function fetchOverApiData() {
  return await import(`../data/json/DocMdData.json`).then((res) => res.default);
}
