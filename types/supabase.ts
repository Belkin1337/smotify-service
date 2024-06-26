export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      album_artists: {
        Row: {
          album_id: string | null
          artist_id: string | null
          created_at: string
          id: string
        }
        Insert: {
          album_id?: string | null
          artist_id?: string | null
          created_at?: string
          id?: string
        }
        Update: {
          album_id?: string | null
          artist_id?: string | null
          created_at?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_album_artists_album_id_fkey"
            columns: ["album_id"]
            isOneToOne: false
            referencedRelation: "albums"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_album_artists_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
        ]
      }
      albums: {
        Row: {
          created_at: string
          id: string
          image_url: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          image_url?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_albums_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      artists: {
        Row: {
          avatar_path: string | null
          cover_image_path: string | null
          created_at: string
          description: string | null
          followers: number | null
          id: string
          listeners: number | null
          name: string | null
          user_id: string | null
        }
        Insert: {
          avatar_path?: string | null
          cover_image_path?: string | null
          created_at?: string
          description?: string | null
          followers?: number | null
          id?: string
          listeners?: number | null
          name?: string | null
          user_id?: string | null
        }
        Update: {
          avatar_path?: string | null
          cover_image_path?: string | null
          created_at?: string
          description?: string | null
          followers?: number | null
          id?: string
          listeners?: number | null
          name?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_artists_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      credits: {
        Row: {
          artist_id: string | null
          id: string
          no_artist_name: string | null
          role_id: number | null
          song_id: string | null
        }
        Insert: {
          artist_id?: string | null
          id?: string
          no_artist_name?: string | null
          role_id?: number | null
          song_id?: string | null
        }
        Update: {
          artist_id?: string | null
          id?: string
          no_artist_name?: string | null
          role_id?: number | null
          song_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_credits_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_credits_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_credits_song_id_fkey"
            columns: ["song_id"]
            isOneToOne: false
            referencedRelation: "songs"
            referencedColumns: ["id"]
          },
        ]
      }
      followed_albums: {
        Row: {
          album_id: string | null
          created_at: string
          id: number
          user_id: string | null
        }
        Insert: {
          album_id?: string | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Update: {
          album_id?: string | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_followed_albums_album_id_fkey"
            columns: ["album_id"]
            isOneToOne: false
            referencedRelation: "albums"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_followed_albums_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      followed_artists: {
        Row: {
          artist_id: string
          created_at: string
          id: number
          user_id: string
        }
        Insert: {
          artist_id?: string
          created_at?: string
          id?: number
          user_id?: string
        }
        Update: {
          artist_id?: string
          created_at?: string
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_followed_artists_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_followed_artists_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      followed_playlists: {
        Row: {
          created_at: string
          id: string
          playlist_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          playlist_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          playlist_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_followed_playlists_playlist_id_fkey"
            columns: ["playlist_id"]
            isOneToOne: false
            referencedRelation: "playlists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_followed_playlists_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      followed_users: {
        Row: {
          created_at: string
          id: number
          initiator_id: string | null
          responder_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          initiator_id?: string | null
          responder_id: string
        }
        Update: {
          created_at?: string
          id?: number
          initiator_id?: string | null
          responder_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_followed_users_user_id_fkey"
            columns: ["initiator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      genres: {
        Row: {
          description: string
          id: number
          image_path: string | null
          name: string
          route: string | null
        }
        Insert: {
          description: string
          id?: number
          image_path?: string | null
          name: string
          route?: string | null
        }
        Update: {
          description?: string
          id?: number
          image_path?: string | null
          name?: string
          route?: string | null
        }
        Relationships: []
      }
      liked_songs: {
        Row: {
          created_at: string
          id: number
          song_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          song_id?: string
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: number
          song_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_liked_songs_song_id_fkey"
            columns: ["song_id"]
            isOneToOne: false
            referencedRelation: "songs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_liked_songs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      playlists: {
        Row: {
          attributes: Json | null
          created_at: string
          id: string
          image_path: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          attributes?: Json | null
          created_at?: string
          id?: string
          image_path?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          attributes?: Json | null
          created_at?: string
          id?: string
          image_path?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_playlists_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      recent_artists: {
        Row: {
          artist_id: string | null
          created_at: string
          id: string
          user_id: string | null
        }
        Insert: {
          artist_id?: string | null
          created_at?: string
          id?: string
          user_id?: string | null
        }
        Update: {
          artist_id?: string | null
          created_at?: string
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_recent_artists_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_recent_artists_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          description: string | null
          id: number
          name: string | null
        }
        Insert: {
          description?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      singles: {
        Row: {
          created_at: string
          id: string
          image_url: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          image_url?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_single_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      singles_artists: {
        Row: {
          artist_id: string | null
          created_at: string
          id: string
          single_id: string | null
        }
        Insert: {
          artist_id?: string | null
          created_at?: string
          id?: string
          single_id?: string | null
        }
        Update: {
          artist_id?: string | null
          created_at?: string
          id?: string
          single_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_singles_artists_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_singles_artists_single_id_fkey"
            columns: ["single_id"]
            isOneToOne: false
            referencedRelation: "singles"
            referencedColumns: ["id"]
          },
        ]
      }
      singles_songs: {
        Row: {
          created_at: string
          id: string
          single_id: string | null
          song_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          single_id?: string | null
          song_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          single_id?: string | null
          song_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_singles_songs_single_id_fkey"
            columns: ["single_id"]
            isOneToOne: false
            referencedRelation: "singles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_singles_songs_song_id_fkey"
            columns: ["song_id"]
            isOneToOne: false
            referencedRelation: "songs"
            referencedColumns: ["id"]
          },
        ]
      }
      song_albums: {
        Row: {
          album_id: string | null
          created_at: string
          id: string
          song_id: string | null
        }
        Insert: {
          album_id?: string | null
          created_at?: string
          id?: string
          song_id?: string | null
        }
        Update: {
          album_id?: string | null
          created_at?: string
          id?: string
          song_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_song_albums_album_id_fkey"
            columns: ["album_id"]
            isOneToOne: false
            referencedRelation: "albums"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_song_albums_song_id_fkey"
            columns: ["song_id"]
            isOneToOne: false
            referencedRelation: "songs"
            referencedColumns: ["id"]
          },
        ]
      }
      song_artists: {
        Row: {
          artist_id: string | null
          created_at: string
          id: string
          song_id: string
        }
        Insert: {
          artist_id?: string | null
          created_at?: string
          id?: string
          song_id: string
        }
        Update: {
          artist_id?: string | null
          created_at?: string
          id?: string
          song_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_song_artists_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_song_artists_song_id_fkey"
            columns: ["song_id"]
            isOneToOne: false
            referencedRelation: "songs"
            referencedColumns: ["id"]
          },
        ]
      }
      song_genres: {
        Row: {
          created_at: string
          genre_id: number | null
          id: string
          song_id: string | null
        }
        Insert: {
          created_at?: string
          genre_id?: number | null
          id?: string
          song_id?: string | null
        }
        Update: {
          created_at?: string
          genre_id?: number | null
          id?: string
          song_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_song_genres_genre_id_fkey"
            columns: ["genre_id"]
            isOneToOne: false
            referencedRelation: "genres"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_song_genres_song_id_fkey"
            columns: ["song_id"]
            isOneToOne: false
            referencedRelation: "songs"
            referencedColumns: ["id"]
          },
        ]
      }
      song_playlists: {
        Row: {
          created_at: string
          id: string
          playlist_id: string | null
          song_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          playlist_id?: string | null
          song_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          playlist_id?: string | null
          song_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_song_playlists_playlist_id_fkey"
            columns: ["playlist_id"]
            isOneToOne: false
            referencedRelation: "playlists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_song_playlists_song_id_fkey"
            columns: ["song_id"]
            isOneToOne: false
            referencedRelation: "songs"
            referencedColumns: ["id"]
          },
        ]
      }
      song_singles: {
        Row: {
          created_at: string
          id: string
          single_id: string | null
          song_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          single_id?: string | null
          song_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          single_id?: string | null
          song_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_song_singles_single_id_fkey"
            columns: ["single_id"]
            isOneToOne: false
            referencedRelation: "singles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_song_singles_song_id_fkey"
            columns: ["song_id"]
            isOneToOne: false
            referencedRelation: "songs"
            referencedColumns: ["id"]
          },
        ]
      }
      songs: {
        Row: {
          created_at: string
          genre: string | null
          id: string
          image_path: string | null
          lyrics: string | null
          song_path: string | null
          title: string | null
          type: string | null
          user_id: string | null
          youtube_video_url: string | null
        }
        Insert: {
          created_at?: string
          genre?: string | null
          id?: string
          image_path?: string | null
          lyrics?: string | null
          song_path?: string | null
          title?: string | null
          type?: string | null
          user_id?: string | null
          youtube_video_url?: string | null
        }
        Update: {
          created_at?: string
          genre?: string | null
          id?: string
          image_path?: string | null
          lyrics?: string | null
          song_path?: string | null
          title?: string | null
          type?: string | null
          user_id?: string | null
          youtube_video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_songs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          attributes: Json
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          id: string
        }
        Insert: {
          attributes?: Json
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
        }
        Update: {
          attributes?: Json
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

