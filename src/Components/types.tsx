// src/types/types.ts

export interface Item {
  isThumbsUp: any;
  id: string; // Must be string
  title: string;
  artist: string;
  album: string;
  isStarred?: boolean;
}
