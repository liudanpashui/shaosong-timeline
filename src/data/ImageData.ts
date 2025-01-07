import { formattedDateSingleLine } from "../utils/dateUtil";
import { TimelineDataItem } from "../utils/fileUtil";

export type ImageInfo = {
  name: string;
  title: string;
  src: string;
  author: string;
  link?: string;
};

const images = import.meta.glob("../images/*", { eager: true });

// Image view model
export const parseImageInfos = (
  item: TimelineDataItem
): ImageInfo[] | undefined => {
  if (!item.image) return undefined;
  const imageNames = item.image.split(",").map((name) => name.trim());
  const imageAuthors = (item.imageAuthor || "")
    .split(",")
    .map((author) => author.trim());
  const imageSources = (item.imageSource || "")
    .split(",")
    .map((source) => source.trim());

  const imageSrcs = imageNames.map((name) => {
    // Find the key where the basename matches `name`
    const matchedKey = Object.keys(images).find((key) =>
      key.includes(`/${name}`)
    );

    // Use the resolved URL from `default`
    return matchedKey
      ? (images[matchedKey] as { default: string }).default
      : "";
  });

  return imageNames.map((_, index) => {
    return {
      name: imageNames[index],
      title: formattedDateSingleLine(
        item.year,
        item.month || "",
        item.date || ""
      ),
      src: imageSrcs[index],
      author: imageAuthors[index],
      link: imageSources[index],
    };
  });
};
