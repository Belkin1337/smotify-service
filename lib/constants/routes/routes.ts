export const song_route = (id: string) => { return `/home/track/${id}` }
export const single_route = (id: string) => { return `/home/single/${id}` }
export const album_route = (id: string) => { return `/home/album/${id}` }
export const playlist_route= (id: string) => { return `/home/playlist/${id}` }

export const profile_route = (id: string) => { return `/home/profile/${id}` }
export const profile_route_following = (id: string) => { return `/home/profile/${id}/following` }
export const profile_route_followers = (id: string) => { return `/home/profile/${id}/followers` }

export const home_route = "/home";
export const settings_route = "/home/preferences"
export const followed_songs = "/home/collection/tracks"
export const search_route = "/home/search"
export const search_route_all_artist = "/home/search/all-artists"
export const auth_route = "/auth";

export const for_authors_route = "/home/for-authors"
export const for_authors_route_create_song = "/home/for-authors/create-song"
export const for_authors_route_create_album = "/home/for-authors/create-album"
export const for_authors_route_create_artist = "/home/for-authors/create-artist"

export const for_authors_route_artists = (id: string) => { return `${profile_route(id)}/artists` }

export const for_authors_route_tracks = (id: string) => { return `${profile_route(id)}/tracks` }

export const for_authors_route_albums = (id: string) => { return `${profile_route(id)}/albums` }

export const genre_route = (id: string) => { return `/home/genre/${id}` }

export const artist_route_profile = "/home/artist"
export const artist_route_liked_songs = (id: string) => { return `/home/artist/${id}/liked-songs` };
export const artist_route_discography_all = (id: string) => { return `/home/artist/${id}/discography/all` }
export const artist_route_discography_albums = (id: string) => { return `/home/artist/${id}/discography/albums` }
export const artist_route_discography_singles = (id: string) => { return `/home/artist/${id}/discography/singles` }