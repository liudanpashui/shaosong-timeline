export type TimelineDataItem = {
  id: number;
  year: string;
  month?: string;
  date?: string;
  event: string;
  category?: string;
  level?: string;
  volume?: string;
  chapter?: string;
  detail?: string;
  image?: string;
  imageAuthor?: string;
  imageSource?: string;
};

export function parseTimelineData(text: string): TimelineDataItem[] {
  const delimiter = "\t";
  const lines = text.split("\n");
  const keys = lines[0].trim().split(delimiter);
  const items: TimelineDataItem[] = [];

  lines.shift();
  for (const line of lines) {
    if (line.length === 0) continue;
    const item: Partial<TimelineDataItem> = {}; // Use Partial for incremental assignment
    const entries = line.trim().split(delimiter);

    keys.forEach((key, index) => {
      if (entries[index]) {
        let value = entries[index];
        value = value.includes(",")
          ? value.replace(/["]/g, "").split(",").join(",")
          : value; // Handle CSV-style commas
        (item as any)[key] = value; // Assign dynamically
      }
    });
    items.push(item as TimelineDataItem); // Cast to TimelineItem before adding to array
  }
  return items;
}
