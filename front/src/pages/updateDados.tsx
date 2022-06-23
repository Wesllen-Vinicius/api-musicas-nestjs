import { useForm, SubmitHandler } from "react-hook-form";
import { Toast } from "../utils/toast";
import { useEffect, useState } from "react";
import { api } from "../services/axios";
import { Modal } from "../components/Modal";
import { FormMusica } from "../components/FormMusica";
import { FormAlbum } from "../components/FormAlbum";
import { FormArtista } from "../components/FormArtista";

interface Album {
  id: number;
  nome_album: string;
  albumId: number;
  autor: string;
}

interface Artista {
  id: number;
  f_name: string;
  l_name: string;
}

interface Musica {
  id: number;
  titulo: string;
  date_created: string;
  albumId: string;
  artistaId: string;
  Artista?: Artista;
  Album?: Album;
}

interface IFormValues {
  titulo: string;
  albumId: number;
  artistaId: number;
}

export default function updateDados() {
  const [albuns, setAlbuns] = useState<Album[]>([]);
  const [artista, setArtista] = useState<Artista[]>([]);
  const [musicas, setMusicas] = useState<Musica[]>([]);

  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    try {
      await api.post("musicas", {
        titulo: data.titulo,
        albumId: Number(data.albumId),
        artistaId: Number(data.artistaId),
      });
      Toast.fire({
        icon: "success",
        title: "Cadastro realizado com sucesso!",
      });
    } catch (e: any) {
      Toast.fire({
        icon: "error",
        title: e.message,
      });
    }
  };
  useEffect(() => {
    api.get("albums").then((res) => {
      const albuns = res.data;
      setAlbuns(albuns);
    });
    api.get(`artistas`).then((res) => {
      const artista = res.data;
      setArtista(artista);
    });
    api.get("musicas").then((res) => {
      const musicas = res.data;
      setMusicas(musicas);
    });
  }, []);

  return (
    <>
      {/* MUSICAS */}
      <div>
        <h1 className="text-grey-900 text-3xl font-extrabold leading-9 tracking-tight dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Musica
        </h1>
        <div className="mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Titulo Musica
                </th>
                <th scope="col" className="px-6 py-3">
                  Artista
                </th>
                <th scope="col" className="px-6 py-3">
                  Album
                </th>
                <th scope="col" className="px-6 py-3">
                  Id Musica
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {musicas.map((musica) => (
                <tr
                  key={musica.id}
                  className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {musica.titulo}
                  </th>
                  <td className="px-6 py-4">{musica.Artista?.f_name}</td>
                  <td className="px-6 py-4">{musica.Album?.nome_album}</td>
                  <td className="px-6 py-4">{musica.id}</td>
                  <td className="px-6 py-4 text-right">
                    <FormMusica musicaId={musica.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ALBUM */}
      <div>
        <h1 className="text-grey-900 text-3xl font-extrabold leading-9 tracking-tight dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Album
        </h1>
        <div className="mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3">
                  Artista
                </th>
                <th scope="col" className="px-6 py-3">
                  ID Album
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {albuns.map((album) => (
                <tr
                  key={album.id}
                  className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {album.nome_album}
                  </th>
                  <td className="px-6 py-4">{album.autor}</td>
                  <td className="px-6 py-4">{album.id}</td>
                  <td className="px-6 py-4 text-right">
                    <FormAlbum albumId={album.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ARTISTAS */}
      <div>
        <h1 className="text-grey-900 text-3xl font-extrabold leading-9 tracking-tight dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Artista
        </h1>
        <div className="mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Primeiro Nome
                </th>
                <th scope="col" className="px-6 py-3">
                  ULtimo Nome
                </th>
                <th scope="col" className="px-6 py-3">
                  ID Artista
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {artista.map((artistas) => (
                <tr
                  key={artistas.id}
                  className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {artistas.f_name}
                  </th>
                  <td className="px-6 py-4">{artistas.l_name}</td>
                  <td className="px-6 py-4">{artistas.id}</td>
                  <td className="px-6 py-4 text-right">
                    <FormArtista artistaId={artistas.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
