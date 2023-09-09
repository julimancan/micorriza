"use client";
import Image from "next/image";
import { type FC, useState, useRef, useEffect } from "react";
import {AiOutlinePlayCircle} from "react-icons/ai"
interface Props {
  thumbnail: string;
  videoId: string;
  videoTitle: string;
}

const YoutubeIframe: FC<Props> = ({ thumbnail, videoId, videoTitle }) => {
  const [showVideo, setShowVideo] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const playVideo = () => {
    setShowVideo(true);
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage("play", "*");
    }
  };

  return (
    <div onClick={playVideo} className="mt-2 aspect-video w-full">
      {showVideo ? (
        <iframe
          className="w-full aspect-video"
          title={videoTitle}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          ref={iframeRef}
        />
      ) : (
        <div className="relative w-fit">
          <Image
            className="aspect-video min-h-[160px] max-w-full object-cover"
            src={thumbnail}
            alt={videoTitle}
            width={640}
            height={360}
            loading="lazy"
          />

          <AiOutlinePlayCircle className="absolute z-10 text-white -translate-x-1/2 -translate-y-1/2 cursor-pointer text-7xl top-1/2 left-1/2" />
        </div>
      )}
    </div>
  );
};

export default YoutubeIframe;
