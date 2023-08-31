
import { PortableText } from "@portabletext/react";
import { BioType } from "./types";

const Bio = ({bio, color= "text-black"}: {bio: BioType; color?: string}) => {
  return (
    <section id="bio" className="">
      <h2 className={`text-2xl font-bold ${color} font-subtitle`}>
        {bio.title}
      </h2>
      <div className="font-normal">
        <PortableText value={bio.text} />
      </div>
    </section>
  );
};

export default Bio;
