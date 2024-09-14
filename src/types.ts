// Type definition for an Item
export interface Item {
  id: number;
  title: string;
  artist: string;
  album: string;
  isStarred?: boolean; // Optional property to indicate if the item is "starred"
}
