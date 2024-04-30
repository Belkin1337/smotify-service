import { useDialog } from "../ui/use-dialog";
import { AuthForm } from "@/components/forms/auth/components/auth-form";
import { SongEntity } from "@/types/song";
import { useCallback } from "react";
import { useAudio } from "@/components/player/hooks/use-audio";
import { useHowler } from "@/components/player/hooks/use-howler";
import { useAudioStateQuery } from "@/lib/query/player/audio-state-query";
import { usePlayer } from "@/components/player/hooks/use-player";
import { useUserQuery } from "@/lib/query/user/user-query";
import { getSongUrl } from "@/lib/queries/song/single/get-song-url";
import { createClient } from "@/lib/utils/supabase/client/supabase-client";
import { useStopPlayAudio } from "@/components/player/hooks/use-stop-play-audio";
import { useSetActiveSongSongs } from "@/components/player/hooks/use-set-active-song-songs";

const supabase = createClient();

type OnPlayType = {
	song: SongEntity,
	songs: SongEntity[]
}

export const usePlay = () => {
	const { data: user } = useUserQuery();
	const { audioAttributes } = useAudioStateQuery()
	const { setAudioAttributes } = useAudio();
	const { setPlayerAttributes } = usePlayer()
	const { createHowlInstance } = useHowler();
	const { openDialog } = useDialog();
	const { stop } = useStopPlayAudio()
	const { setActive } = useSetActiveSongSongs()

	const howl = audioAttributes.howl;
	const currentSongUrl = audioAttributes.songUrl;

	const onPlay = useCallback(async ({ song, songs }: OnPlayType) => {
		if (!user) openDialog({ dialogChildren: <AuthForm/> })

		if (user) {
			const { data } = await getSongUrl(supabase, song?.song_path);
			const targetSongUrl = data.publicUrl;

			if (currentSongUrl !== targetSongUrl) {
				if (targetSongUrl) {
					await setActive(song, songs, targetSongUrl)
				}
			} else if (currentSongUrl === targetSongUrl && howl) {
				stop(howl);
			}
		}
	}, [
		setActive,
		stop,
		currentSongUrl,
		howl,
		openDialog,
		setAudioAttributes,
		setPlayerAttributes,
		createHowlInstance
	])

	return { onPlay }
}