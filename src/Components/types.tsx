// src/types.ts

export interface Item {
  id: string;
  title: string;
  artist: string;
  album: string;
  isStarred: boolean;
  // Remove isThumbsUp if it’s not required
}
