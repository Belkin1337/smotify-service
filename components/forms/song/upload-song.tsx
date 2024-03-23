"use client"

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useScopedI18n } from "@/locales/client";
import { useToast } from "@/lib/hooks/ui/use-toast";
import { Button } from "@/ui/button";
import { createSongSchema } from "@/lib/schemas/song/create-song";
import { Form, FormField } from "@/ui/form";
import { useCreateSong } from "@/lib/hooks/actions/song/use-create-song";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useRef, useState } from "react";
import { FormFieldItem } from "@/ui/form-field";
import { Typography } from "@/ui/typography";
import Image from "next/image";
import { IoMdMusicalNote } from "react-icons/io";

type uploadSchema = z.infer<typeof createSongSchema>

export const UploadSongForm = () => {
  const [preview, setPreview] = useState<{
    title?: string,
    author?: string,
    album?: string,
    genre?: string,
    image?: string
  }>({
    title: '',
    author: '',
    album: '',
    genre: '',
    image: ''
  });

  const { toast } = useToast()
  const { uploadSong } = useCreateSong();

  const imageRef = useRef<HTMLInputElement | null>(null);
  const songRef = useRef<HTMLInputElement | null>(null);

  const uploadModalLocale = useScopedI18n('main-service.main-part.config')

  const form = useForm<uploadSchema>({
    resolver: zodResolver(createSongSchema),
    defaultValues: {
      author: "",
      title: "",
      album: "",
      genre: "",
      image: null,
      song: null
    }
  });

  const handleImageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreview({
          image: reader.result as string
        });
      };
    }
  }, [])

  const handleInputChange = useCallback((fieldName: keyof uploadSchema) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreview(prevState => ({ ...prevState, [fieldName]: e.target.value }));
  }, []);

  const onSubmit = async (values: uploadSchema) => {
    try {
      if (!values.song || !values.image) {
        toast({
          title: "Что-то не так"
        })
        return null;
      }

      if (!imageRef.current) {
        toast({
          title: "Выберите файл обложки"
        });
        return;
      }

      if (!songRef.current) {
        toast({
          title: "Выберите аудиофайл"
        });
        return;
      }

      const songFile = songRef.current.files ? songRef.current.files[0] : null;
      const imageFile = imageRef.current.files ? imageRef.current.files[0] : null;

      if (songFile && imageFile) {
        uploadSong.mutateAsync({
          title: values.title,
          author: values.author,
          song: songFile,
          image: imageFile,
          album: values.album,
          genre: values.genre
        });
      }
    } catch (error) {
      toast({
        title: String(error)
      })
    }
  }


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-6"
      >
        <div className="flex lg:flex-row flex-col gap-x-4 gap-y-6 items-center justify-stretch">
          <div className="flex flex-col gap-y-8 w-full">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormFieldItem
                  label={uploadModalLocale('song-attributes.song-name')}
                  input={{
                    placeholder: uploadModalLocale('placeholder.fields.example') + ' Awakening',
                    name: "song_title",
                    autoComplete: 'false',
                    autoCorrect: 'false',
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('title')(e)
                  }}
                />
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormFieldItem
                  label={uploadModalLocale('song-attributes.song-author')}
                  input={{
                    placeholder: uploadModalLocale('placeholder.fields.example') + ' Sidewalks and Skeletons',
                    name: "song_author",
                    autoComplete: 'false',
                    autoCorrect: 'false',
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('author')(e)
                  }}
                />
              )}
            />
            <FormField
              control={form.control}
              name="album"
              render={({ field }) => (
                <FormFieldItem
                  label="Альбом (опционально)"
                  input={{
                    placeholder: "ex. Avatar Album",
                    name: "song_album",
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('album')(e)
                  }}
                />
              )}
            />
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormFieldItem
                  label="Жанр"
                  input={{
                    placeholder: "ex. Phonk",
                    name: "song_genre",
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('genre')(e)
                  }}
                />
              )}
            />
            <FormField
              control={form.control}
              name="song"
              render={({ field: { ref, ...field } }) => (
                <FormFieldItem
                  label={`${uploadModalLocale('song-attributes.song-file')} (mp3)`}
                  input={{
                    name: "song_file",
                    accept: ".mp3",
                    type: "file",
                    ref: songRef,
                  }}
                />
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field: { ref, ...field } }) => (
                <FormFieldItem
                  label={`${uploadModalLocale('song-attributes.song-image')} (webp, jpeg, jpg, png)`}
                  input={{
                    name: "song_image",
                    accept: "image/*",
                    type: "file",
                    ref: imageRef,
                    onChange: handleImageChange
                  }}
                />
              )}
            />
            <Button type="submit" variant="form">
              <Typography>
                {uploadModalLocale('modal.submit')}
              </Typography>
            </Button>
          </div>
          <div className="flex flex-col items-center gap-y-4 w-1/4 h-full">
            <Typography>
              Предварительный результат
            </Typography>
            <div className="flex justify-center items-center w-[240px] h-[240px] bg-neutral-800 rounded-xl overflow-hidden">
              {preview.image ? (
                <Image
                  src={preview.image}
                  alt="Track"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              ) : (
                <IoMdMusicalNote size={42} />
              )}
            </div>
            <div className="flex flex-col gap-y-2">
              <Typography>
                {preview.title || 'Без названия'}
              </Typography>
              <Typography className="text-md !text-neutral-400">
                {preview.author || 'Неизвестен'}
              </Typography>
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}