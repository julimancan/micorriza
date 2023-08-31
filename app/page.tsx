import { type FC } from "react";
import Hero from "./(components)/Hero";
import Bio from "./(components)/Bio";
import { getHomepageContent } from "@/sanity/queries/pages/homepage";
import { HomepageContentType } from "./(components)/types";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Home() {
  const homepageContent = (await getHomepageContent()) as HomepageContentType;

  return (
    <main className="flex flex-col items-center justify-between min-h-screen overflow-x-hidden max-w-screen">
      <Hero content={homepageContent.hero} />
      <div className="grid gap-12 px-12 pt-12 lg:px-20">
        <Bio bio={homepageContent.bio} color="" />
        <div className="w-3/4 mx-auto h-[1px] bg-black"></div>
      </div>
    </main>
  );
}