import type { FC } from "react";
import type { YoutubeVideo } from "./types";
import YoutubeIframe from "./YoutubeIframe";

interface VideosProps {
  videos: YoutubeVideo[];
  title: string;
  id: string;
}
const Videos: FC<VideosProps> = ({ videos, title, id }) => {
  return (
    <section id={id} className="flex flex-col w-full pt-4 pr-2 max-w-screen">
      <h2 className="text-2xl font-bold font-subtitle">{title}</h2>
      <ul className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 xl:grid-cols-3 ">
        {videos?.map((video) => {
          return (
            <li key={video.id} className="w-full mx-auto mt-6">
              <h3
                key={video.snippet.title}
                className={`text-lg font-normal truncate max-w-[650px]`}
              >
                {video.snippet.title}
              </h3>
              <YoutubeIframe
                thumbnail={video.snippet.thumbnails.high.url}
                videoId={video.snippet.resourceId.videoId}
                videoTitle={video.snippet.title}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Videos;
