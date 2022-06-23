import { useEffect } from "react";
import { Modal } from "./Modal";

interface FormMusicaProps {
  musicaId: number;
}

export function FormMusica({ musicaId }: FormMusicaProps) {
  useEffect(() => {}, [musicaId]);

  return (
    <Modal>
      <form className="space-y-3 w-full p-10" action="#">
      <h1 className="text-grey-900 text-3xl font-extrabold leading-9 tracking-tight dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Edição de Musica
        </h1>
        <div>
          <label
            htmlFor="email"
            className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          ></label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
          ></label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
          ></label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
          ></label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Confirmar Edição
        </button>
      </form>
    </Modal>
  );
}
