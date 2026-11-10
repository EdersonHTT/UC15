import { NavigatorScreenParams } from "@react-navigation/native";

export type InicioStackParamList = {
  Anime: undefined;
  Mangas: undefined;
  Detalhes: { animeId: number };
};

export type AppTabParamList = {
  Inicio: NavigatorScreenParams<InicioStackParamList>;
  Mangas: undefined;
  Configurations: undefined;
};

export type AppDrawerParamList = {
  Animes: NavigatorScreenParams<AppTabParamList>;
  Mangas: undefined;
  Configurations: undefined;
};