export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4"></div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Wesllen Vinicius</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <a href="/">VOID</a>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <a href="#">SoundGarden</a>
        </div>
      </div>
    </footer>
  );
}
