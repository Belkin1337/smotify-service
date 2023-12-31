import getLikedSongs from "@/actions/get-liked-songs";
import { Navbar } from "@/components/navbar/navbar";

import { LikedContent } from "./components/liked";
import { getScopedI18n } from "@/locales/server";

import Image from "next/image";

export const revalidate = 0;

export default async function Liked() {
  const songs = await getLikedSongs();
  const likedPageLocale = await getScopedI18n('main-service.pages.liked-content.navbar')

  return (
    <div className="bg-DARK_SECONDARY_BACKGROUND rounded-lg w-full h-full overflow-hidden overflow-y-auto">
      <Navbar>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="relative h-32 w-32 lg:h-44 lg:w-44">
              <Image fill src="/images/liked.png" alt="Playlist" className="object-cover"/>
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden md:block text-white font-semibold text-xl">
                {likedPageLocale('welcome-message')}
              </p>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
                {likedPageLocale('subtitle-message')}
              </h1>
            </div>
          </div>
        </div>
      </Navbar>
      <LikedContent songs={songs}/>
    </div>
  );
}