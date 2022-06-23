import Card from "../components/Card";

const MAX_DISPLAY = 5;
const posts = [];

export default function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-grey-900 text-3xl font-extrabold leading-9 tracking-tight dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Inicio - Bem Vindo!
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Encontre as musicas que combinem com voce!
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-12"></li>
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <a
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            Todos os Albuns &rarr;
          </a>
        </div>
      )}
    </>
  );
}
