import { useUserQuery } from "@/lib/query/user/user-query";
import { createClient } from "@/lib/utils/supabase/client/supabase-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PlaylistEntity } from "@/types/playlist";
import { userPlaylistsQueryKey } from "@/lib/querykeys/user";
import { useRouter } from "next/navigation";
import { useDialog } from "@/lib/hooks/ui/use-dialog";
import { home_route } from "@/lib/constants/routes/routes";

const supabase = createClient();

export const useDeletePlaylist = () => {
	const queryClient = useQueryClient()

	const { push } = useRouter()
	const { closeDialog } = useDialog()

	const { data: user } = useUserQuery();

	const deletePlaylistMutation = useMutation({
		mutationFn: async (playlist: PlaylistEntity) => {
			if (user) {
				if (user.id === playlist.user_id) {
					try {
						const { data, error } = await supabase
							.from("playlists")
							.delete()
							.eq("id", playlist.id)
							.eq("user_id", user.id)
							.select()

						if (error) throw error;

						return data as PlaylistEntity[];
					} catch (error) {
						throw error;
					}
				}
			}
		},
		onSuccess: async (data) => {
			if (data) {
				closeDialog()
				push(home_route)
			}

			await queryClient.invalidateQueries({
				queryKey: userPlaylistsQueryKey(user?.id, true)
			})

			await queryClient.invalidateQueries({
				queryKey: userPlaylistsQueryKey(user?.id, false)
			})
		}
	})

	return { deletePlaylistMutation }
}