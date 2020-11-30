export function parseTimelineData(text) {
  const delimiter = "\t";
  const lines = text.split("\n");
  const keys = lines[0].trim().split(delimiter);
  let events = [];
  lines.shift();
  for (const line of lines) {
    if (line.length === 0) continue;
    let event = {};
    let items = line.trim().split(delimiter);
    keys.forEach((key, index) => {
      if (items[index]) {
        event[key] = items[index];
      }
    });
    events.push(event);
  }
  return events;
}
