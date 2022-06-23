import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../services/axios";
import { Toast } from "../utils/toast";
import { Modal } from "./Modal";

interface FormAlbumProps {
  albumId: number;
}
interface IFormValues {
  nome_album: string;
}

export function FormAlbum({ albumId }: FormAlbumProps) {
  const { register, handleSubmit, setValue } = useForm<IFormValues>();

  const onSubmit = (fn: () => void) => {
    const submit: SubmitHandler<IFormValues> = async (data) => {
      try {
        await api.put(`albums/${albumId}`, data);
        Toast.fire({
          icon: "success",
          title: "Cadastro realizado com sucesso!",
        });
        fn();
      } catch (e: any) {
        Toast.fire({
          icon: "error",
          title: e.message,
        });
      }
      console.log(data);
    };
    return submit;
  };
  const loadData = () => {
    api.get<IFormValues>(`albums/${albumId}`).then((res) => {
      setValue("nome_album", res.data.nome_album);
    });
  };

  return (
    <Modal onOpen={loadData}>
      {({ handleCloseModal }) => {
        return (
          <form
            className="space-y-3 w-full p-10"
            onSubmit={handleSubmit(onSubmit(handleCloseModal))}
          >
            <h1 className="text-grey-900 text-3xl font-extrabold leading-9 tracking-tight dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Edição de Album
            </h1>
            <div>
              <label
                htmlFor="text"
                className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              ></label>
              <input
                {...register("nome_album")}
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              Confirmar Edição
            </button>
          </form>
        );
      }}
    </Modal>
  );
}
