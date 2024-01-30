import { atom, useAtom } from "jotai";
import './UI.css';

export const currentPageAtom = atom("intro");

export const UISkills = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex flex-col items-end justify-center h-full
          duration-500
          ${currentPage === "home"}`}
      >
        <div >
          <div className="bubble">
            <button
              onClick={() => setCurrentPage("skills")}
              className="custom-button pointer-events-auto bg-orange-400 text-white font-black rounded-full hover:bg-orange-600 cursor-pointer transition-colors "
            >
              Resume
            </button>
          </div>
          <div className="bubble">
            <button
              onClick={() => setCurrentPage("cert")}
              className="custom-button pointer-events-auto bg-orange-400 text-white font-black rounded-full hover:bg-orange-600 cursor-pointer transition-colors "
            >
              Resume 2
            </button>
          </div>
          <div className="bubble">
            <button
              onClick={() => setCurrentPage("home")}
              className="custom-button pointer-events-auto bg-orange-400 text-white font-black rounded-full hover:bg-orange-600 cursor-pointer transition-colors "
            >
              X
            </button>
          </div>

          <div className="bubble">
            <button
              onClick={() => setCurrentPage("profile")}
              className="custom-button pointer-events-auto bg-orange-400 text-white font-black rounded-full hover:bg-orange-600 cursor-pointer transition-colors "
            >
              Profile
            </button>
          </div>

          
        </div>
      </section>
    </div>
  );
};
