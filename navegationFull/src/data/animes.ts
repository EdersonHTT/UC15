import { Animes } from "../api/AnimeApi";

export interface Anime {
    id: number;
    title: {
        romaji: string;
        english: string;
    };
    description: string;
    coverImage: {
        large: string;
    };
}
async function createAnime(arr: Anime[], name: string){
    const anime: Anime = await Animes(name);
    arr.push(anime);
}

export const animes: Anime[] = []

export const mangas: Anime[] = []

createAnime(animes, 'One Piece');
createAnime(animes, 'Naruto');
createAnime(animes, 'Dragon Ball');

createAnime(mangas, 'One Piece');
createAnime(mangas, 'Naruto');
createAnime(mangas, 'Dragon Ball');