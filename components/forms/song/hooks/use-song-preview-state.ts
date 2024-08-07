import { usePreviewSong } from "@/components/forms/song/hooks/use-preview-song";
import { SongEntity } from "@/types/song";
import { useSongArtistListQuery } from "@/lib/query/song/song-artist-list-query";
import { useLoadImage } from "@/lib/hooks/image/use-load-image";
import { usePreviewSongQuery } from "@/components/forms/song/hooks/use-preview-song-query";

export const useSongPreviewState = ({
	song
}: {
	song?: SongEntity,
}) => {
	const { data: songImage } = useLoadImage(song?.image_path || '');
	const { data: artists } = useSongArtistListQuery(song?.id || '');

	const { setSongPreviewAttributes} = usePreviewSong();
	const { songPreviewState } = usePreviewSongQuery({
		title: song ? song.title : '',
		genre: song ? song.genre : null,
		image: song ? songImage?.url : '',
		artists: song ? artists?.artists : [],
		credits: []
	})
	
	return { songPreviewState, setSongPreviewAttributes }
}