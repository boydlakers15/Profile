import { atom, useAtom } from "jotai";
import './UI.css';
export const currentPageAtom = atom("intro");

export const UISkills = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
      duration-500
      ${currentPage === "home" ? "" : "opacity-0"}`}
      >
        <div className="h-[60%]"></div>
        <button
          onClick={() => setCurrentPage("skills")}
          className="pointer-events-auto py-4 px-8 bg-orange-400 text-white font-black rounded-full hover:bg-orange-600 cursor-pointer transition-colors duration-500"
        >
          Résumé
        </button>
        <button
          onClick={() => setCurrentPage("home")}
          className="pointer-events-auto py-4 px-8 bg-orange-400 text-white font-black rounded-full hover:bg-orange-600 cursor-pointer transition-colors duration-500"
        >
          X
        </button>

      </section>
    </div>
  );
};