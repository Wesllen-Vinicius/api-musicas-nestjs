import Link from "../components/Link";

export default function PerfilArtista() {
  return (
    <>
      <div className="md:grid  md:gap-6 place-items-center">
        <div className="mt-5 md:mt-0 max-w-xl w-full">
          <form action="#" method="POST">
            <div className="shadow-xl sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white  dark:bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Dados Pessoais{" "}
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="w-[80px]  dark:text-black  inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        {" "}
                        Author{" "}
                      </span>
                      <input
                        id="author"
                        name="author"
                        type="text"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Author name"
                      />
                    </div>
                    <div className="mt-2 flex rounded-md shadow-sm ">
                      <span className="w-[80px]  dark:text-black  inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300  bg-gray-50 text-gray-500 text-sm">
                        {" "}
                        Titulo{" "}
                      </span>
                      <input
                        id="titulo"
                        name="titulo"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="titulo"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Foto de Perfil
                  </label>
                  <div className="mt-1 flex items-center">
                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <button
                      type="button"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Alterar
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="button">
                  Enviar
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
