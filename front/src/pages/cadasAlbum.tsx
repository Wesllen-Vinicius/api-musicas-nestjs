import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../services/axios";
import { Toast } from "../utils/toast";
interface Artista {
  id: number;
  f_name: string;
  l_name: string;
}
interface IFormValues {
  nome_album: string;
  autor: string;
  artistaId: number;
}

export default function CadastroAlbum() {
  const { register, handleSubmit } = useForm<IFormValues>();
  const [artista, setArtista] = useState<Artista[]>([]);

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    try {
      await api.post("albums", {
        nome_album: data.nome_album,
        autor: data.artistaId,
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
    api.get(`artistas`).then((res) => {
      const artista = res.data;
      setArtista(artista);
    });
  }, []);

  return (
    <>
      <div className="md:grid  md:gap-6 place-items-center">
        <div className="mt-5 md:mt-0 max-w-xl w-full">
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="shadow-xl sm:rounded-md sm:overflow-hidden bg-white">
              <div className="px-4 py-5  space-y-6 sm:p-6 ">
                <div className="grid grid-cols-3 gap-6 ">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Album
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                      <span className="w-[80px]  inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        Titulo
                      </span>
                      <input
                        {...register("nome_album")}
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="titulo"
                      />
                    </div>
                    <div className="mt-2 flex rounded-md shadow-sm">
                      <span className="w-[80px]  inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        Artista
                      </span>
                      <select
                        {...register("artistaId")}
                        className="form-select appearance-none
                        w-full
                        px-3
                        py-1.5
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        mt-2
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option selected>Selecione um Artista</option>
                        {artista.map((artista) => (
                          <option key={artista.id} value={artista.id}>
                            {artista.f_name} {artista.l_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="button">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-700"></div>
        </div>
      </div>
    </>
  );
}
