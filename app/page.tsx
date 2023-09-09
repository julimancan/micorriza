import Hero from "./(components)/Hero";
import Bio from "./(components)/Bio";
import { getHomepageContent } from "@/sanity/queries/pages/homepage";
import { HomepageContentType } from "./(components)/types";
import { getYoutubeVideosFromPlaylistId } from "./(components)/helpers/getYoutubeVideosFromPlaylistId";
import Videos from "./(components)/Videos";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Home() {
  const homepageContent = (await getHomepageContent()) as HomepageContentType;

  const playlistUrl = new URL(homepageContent.youtubePlaylist.youtubePlaylistLink)
  const playlistId = playlistUrl.searchParams.get('list');
  
  if (!playlistId) return;
  
  const playlist = await getYoutubeVideosFromPlaylistId(
   playlistId
  );

  return (
    <main className="flex flex-col items-center justify-between min-h-screen overflow-x-hidden max-w-screen">
      <Hero content={homepageContent.hero} />
      <div className="grid gap-12 px-12 pt-12 lg:px-20 mx-auto  w-full">
        <Bio bio={homepageContent.bio} color="" />
        <div className="w-3/4 mx-auto h-[1px] bg-black"></div>
        {playlist && (
          <Videos
            id="music-videos"
            videos={playlist.items}
            title={homepageContent.youtubePlaylist.titulo}
          />
        )}
        <div className="w-3/4 mt-2 mx-auto h-[1px] bg-black"></div>
      </div>
    </main>
  );
}
