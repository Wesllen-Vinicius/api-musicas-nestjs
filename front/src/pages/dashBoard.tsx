import { TabNavigation } from "../components/TabNavigation";

export default function DashBoard() {
  return (
    <div>
      <h1 className="text-grey-900 text-3xl font-extrabold leading-9 tracking-tight dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Cadastros
      </h1>
      <TabNavigation />
    </div>
  );
}
