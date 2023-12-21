export async function fetchData() {
  return await import("../data/data.json").then((res) => res.default);
}
