import { Typography } from "@/ui/typography";
import {
	SearchSimilarArtistsList
} from "@/components/search/result/similar/components/list/search-similar-artists-list";
import { ArtistEntity } from "@/types/artist";

type SearchSimilarArtistsProps = Partial<{
	searchedArtists: ArtistEntity[]
}>

export const SearchSimilarArtists = ({
	searchedArtists
}: SearchSimilarArtistsProps) => {
	if (!searchedArtists?.length) return;

	return (
		<div className="flex gap-y-2 flex-col">
			<Typography className="text-2xl" font="bold">
				Artists
			</Typography>
			<SearchSimilarArtistsList searchedArtists={searchedArtists}/>
		</div>
	)
}