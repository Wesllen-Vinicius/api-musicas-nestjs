import { Tab } from "@headlessui/react";
import CadastroAlbum from "../pages/cadasAlbum";
import CadastroArtista from "../pages/cadasArtista";
import CadastroMusica from "../pages/cadasMusica";
import PerfilArtista from "../pages/perfilArtista";
import { AnimatedDiv } from "./animatedDiv";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const TabNavigation = () => {
  return (
    <div className="w-full  px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-300 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                " ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-[#ff405c] shadow"
                  : "text-[#ff405c] hover:bg-white/[0.12] hover:text-[#ff405ccc]"
              )
            }
          >
            Artista
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                " ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-[#ff405c] shadow"
                  : "text-[#ff405c] hover:bg-white/[0.12] hover:text-[#ff405ccc]"
              )
            }
          >
            Album
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                " ring-opacity-60 ring-offset-2 ring-offset-[#ff405c]focus:outline-none focus:ring-2",
                selected
                  ? "bg-white  text-[#ff405c] shadow"
                  : "text-[#ff405c] hover:bg-white/[0.12] hover:text-[#ff405ccc]"
              )
            }
          >
            Musica
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-transparent p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <AnimatedDiv key={1}>
              <CadastroArtista />
            </AnimatedDiv>
          </Tab.Panel>

          <Tab.Panel
            className={classNames(
              "rounded-xl bg-transparent p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <AnimatedDiv key={2}>
              <CadastroAlbum />
            </AnimatedDiv>
          </Tab.Panel>

          <Tab.Panel
            className={classNames(
              "rounded-xl bg-transparent  p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <AnimatedDiv key={3}>
              <CadastroMusica />
            </AnimatedDiv>
          </Tab.Panel>

          <Tab.Panel
            className={classNames(
              "rounded-xl bg-transparent  p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <AnimatedDiv key={4}>
              <PerfilArtista />
            </AnimatedDiv>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
