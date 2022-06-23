import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../services/axios";
import { Toast } from "../utils/toast";
interface IFormValues {
  f_name: string;
  l_name: string;
}

export default function CadastroArtista() {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    try {
      await api.post("artistas", data);
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

  return (
    <>
      <div>
        <div className="md:grid  md:gap-6 place-items-center">
          <div className="mt-5 md:mt-0  max-w-xl w-full">
            <form onSubmit={handleSubmit(onSubmit)} method="POST">
              <div className="shadow-xl sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Artista
                      </label>
                      <div className="mt-2 flex rounded-md shadow-sm">
                        <label className="w-[180px] inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          Primeiro Nome
                        </label>
                        <input
                          {...register("f_name")}
                          type="text"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Primeiro Nome"
                        />
                      </div>
                      <div className="mt-2 flex rounded-md shadow-sm">
                        <label className="w-[180px] inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          Ultimo Nome
                        </label>
                        <input
                          {...register("l_name")}
                          type="text"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Ultimo Nome"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    
                   
                  </div>
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
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-700"></div>
        </div>
      </div>
    </>
  );
}
