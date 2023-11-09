export type StickerRarity = "common" | "rare" | "legendary";

export interface StickerApiProps {
  id: number;
  src: string;
  top: number;
  left: number;
  description?: string;
  rarity: StickerRarity;
}

export interface AlbumPageApiProps {
  active: boolean;
  backgroundImage: string;
  stickers: StickerApiProps[];
}

class AlbumService {
  public async getFullPage(_page: number) {
    const albumPage: AlbumPageApiProps = {
      active: true,
      backgroundImage: "/assets/background_1.png",
      stickers: [
        {
          id: 1,
          src: "/assets/sticker_1.png",
          top: 23,
          left: 14,
          rarity: "common",
        },
        {
          id: 2,
          src: "/assets/sticker_2.png",
          top: 47,
          left: 54,
          rarity: "common",
        },
      ],
    };

    return Promise.resolve(albumPage);
  }
}

export const albumService = new AlbumService();
