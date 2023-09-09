import { YoutubeVideo } from "../types";

interface YoutubeApiResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubeVideo[];
}

export const getYoutubeVideosFromPlaylistId = async (
  youtubePlaylistId: string
): Promise<YoutubeApiResponse | undefined> => {
  const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/playlistItems";

  const queryString = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${youtubePlaylistId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`;

  try {
    const res = await fetch(queryString);

    const data: YoutubeApiResponse = (await res.json()) as YoutubeApiResponse;

    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
