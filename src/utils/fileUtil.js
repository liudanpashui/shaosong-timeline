export function parseTimelineData(text) {
  const delimiter = "\t";
  const lines = text.split("\n");
  const keys = lines[0].trim().split(delimiter);
  let items = [];
  lines.shift();
  for (const line of lines) {
    if (line.length === 0) continue;
    let item = {};
    let entries = line.trim().split(delimiter);
    keys.forEach((key, index) => {
      if (entries[index]) {
        let value = entries[index];
        value.includes(",") && (value = value.replace(/["]/g, "").split(","));
        item[key] = value;
      }
    });
    items.push(item);
  }
  return items;
}
