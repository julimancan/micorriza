import SocialIcons from "./SocialIcons";
import { HeroProps, VideoType } from "./types";

const Hero = async ({ content }: { content: HeroProps }) => {
  return (
    <section
      id="hero"
      className="relative flex flex-col h-[80vh] max-h-[80vh] overflow-hidden items-center justify-center w-full aspect-video"
    >
      <div className="absolute z-10 text-orange-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h1 className="text-4xl font-bold text-center font-title">
          {content.title}
        </h1>
        <h2 className="text-2xl font-bold text-center font-subtitle">
          {content.subtitle}
        </h2>
        <SocialIcons
          color="text-orange-200"
          socialIcons={content.socialLinks}
        />
      </div>
      <Video video={content.bgVideo} />
    </section>
  );
};

const Video = ({ video }: { video: VideoType }) => {
  return (
    <>
      {!video.url && !video.fallback ? (
        <img src={video.fallbackImage} alt={video.alt} className="object-cover w-full h-full" />
      ) : (
        <video className="object-cover w-full h-full" autoPlay loop muted>
          <source src={video.url} type="video/webm" />
          <source src={video.fallback} type="video/mp4" />
          <img src={video.fallbackImage} alt={video.alt} />
        </video>
      )}
    </>
  );
};

export default Hero;
