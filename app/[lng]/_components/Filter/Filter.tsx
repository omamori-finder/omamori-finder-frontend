import { useEffect, useRef, useState } from "react";
import { useStore } from "@/app/[lng]/_utils/store";

const Filter = () => {
  // Filter choices
  const { area, setArea, luckType, setLuckType, beliefType, setBeliefType } =
    useStore();

  // Toggles
  const [isAreaClicked, setIsAreaClicked] = useState(false);

  const setAreaClicked = () => {
    setIsAreaClicked(!isAreaClicked);
    setIsLuckClicked(false);
    setIsBeliefClicked(false);
  };

  const [isLuckClicked, setIsLuckClicked] = useState(false);

  const setLuckClicked = () => {
    setIsLuckClicked(!isLuckClicked);
    setIsAreaClicked(false);
    setIsBeliefClicked(false);
  };

  const [isBeliefClicked, setIsBeliefClicked] = useState(false);

  const setBeliefClicked = () => {
    setIsBeliefClicked(!isBeliefClicked);
    setIsLuckClicked(false);
    setIsAreaClicked(false);
  };

  // Handle click outside dropdowns
  const areaRef = useRef<HTMLDivElement>(null);
  const luckRef = useRef<HTMLDivElement>(null);
  const beliefRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (areaRef.current && !areaRef.current.contains(e.target as Node)) {
      setIsAreaClicked(false);
    }
    if (luckRef.current && !luckRef.current.contains(e.target as Node)) {
      setIsLuckClicked(false);
    }
    if (beliefRef.current && !beliefRef.current.contains(e.target as Node)) {
      setIsBeliefClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative bg-[var(--background)] block md:grid grid-cols-3 lg:grid-cols-4 gap-4 text-[var(--filter-text-color)] -ml-8 md:ml-0 md:pl-10">
      <div
        className="relative bg-[var(--background)] hover:text-[var(--foreground)] transition-colors duration-300 md:w-full"
        ref={areaRef}
      >
        <div className="cursor-pointer z-40" onClick={setAreaClicked}>
          <div
            className={`mb-0 pb-0 ${
              isAreaClicked ? "filter-border-no-b" : "transparent-border"
            }`}
          >
            <div
              id="area-toggle-button"
              className={`inline-grid grid-flow-col items-center h-16 gap-6 whitespace-normal pl-8 ${
                isAreaClicked ? "text-[var(--foreground)]" : ""
              }`}
            >
              <div>Area</div>
              <svg
                width="7"
                height="5"
                viewBox="0 0 7 5"
                className={`transition-transform duration-300 ${
                  isAreaClicked ? "rotate-[-90deg]" : ""
                }`}
              >
                <path d="M0 2.5L7 0v5L0 2.5z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </div>
        {isAreaClicked && (
          <div
            id="area-dropdown"
            className={`z-50 absolute bg-[var(--background)] text-[var(--foreground)] px-8 pb-6 mt-0 pt-0 md:w-full max-h-80 overflow-y-auto ${
              isAreaClicked ? "filter-border-no-t" : "transparent-border"
            }`}
          >
            <label
              htmlFor="bAreaAll"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bAreaAll"
                type="radio"
                name="japan-regions"
                value="all"
                checked={area === "all"}
                onChange={() => setArea("all")}
              />
              <span>All</span>
            </label>
            <label
              htmlFor="bHokkaido"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bHokkaido"
                type="radio"
                name="japan-regions"
                checked={area === "hokkaido"}
                onChange={() => setArea("hokkaido")}
              />
              <span>Hokkaido</span>
            </label>
            <label
              htmlFor="bTohoku"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bTohoku"
                type="radio"
                name="japan-regions"
                checked={area === "tohoku"}
                onChange={() => setArea("tohoku")}
              />
              <span>Tohoku</span>
            </label>
            <label
              htmlFor="bKanto"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bKanto"
                type="radio"
                name="japan-regions"
                checked={area === "kanto"}
                onChange={() => setArea("kanto")}
              />
              <span>Kanto</span>
            </label>
            <label
              htmlFor="bChubu"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bChubu"
                type="radio"
                name="japan-regions"
                checked={area === "chubu"}
                onChange={() => setArea("chubu")}
              />
              <span>Chubu</span>
            </label>
            <label
              htmlFor="bKansai"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bKansai"
                type="radio"
                name="japan-regions"
                checked={area === "kansai"}
                onChange={() => setArea("kansai")}
              />
              <span>Kansai</span>
            </label>
            <label
              htmlFor="bChugoku"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bChugoku"
                type="radio"
                name="japan-regions"
                checked={area === "chugoku"}
                onChange={() => setArea("chugoku")}
              />
              <span>Chugoku</span>
            </label>
            <label
              htmlFor="bShikoku"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bShikoku"
                type="radio"
                name="japan-regions"
                checked={area === "shikoku"}
                onChange={() => setArea("shikoku")}
              />
              <span>Shikoku</span>
            </label>
            <label
              htmlFor="bKyuOki"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bKyuOki"
                type="radio"
                name="japan-regions"
                checked={area === "kyuoki"}
                onChange={() => setArea("kyuoki")}
              />
              <span>Kyushu & Okinawa</span>
            </label>
          </div>
        )}
      </div>
      <div
        className="relative hover:text-[var(--foreground)] transition-colors duration-300 min-w-min md:w-full"
        ref={luckRef}
      >
        <div className="cursor-pointer z-40" onClick={setLuckClicked}>
          <div
            className={`mb-0 pb-0 ${
              isLuckClicked ? "filter-border-no-b" : "transparent-border"
            }`}
          >
            <div
              id="luck-toggle-button"
              className={`inline-grid grid-flow-col items-center h-16 gap-6 whitespace-normal pl-8 ${
                isLuckClicked ? "text-[var(--foreground)]" : ""
              }`}
            >
              <div>Luck Type</div>
              <svg
                width="7"
                height="5"
                viewBox="0 0 7 5"
                className={`transition-transform duration-300 ${
                  isLuckClicked ? "rotate-[-90deg]" : ""
                }`}
              >
                <path d="M0 2.5L7 0v5L0 2.5z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </div>
        {isLuckClicked && (
          <div
            id="luck-dropdown"
            className={`z-50 absolute bg-[var(--background)] text-[var(--foreground)] px-8 pb-6 mt-0 pt-0 md:w-full ${
              isLuckClicked ? "filter-border-no-t" : "transparent-border"
            }`}
          >
            <label
              htmlFor="bLuckAll"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bLuckAll"
                type="radio"
                name="luck-types"
                checked={luckType === "all"}
                onChange={() => setLuckType("all")}
              />
              <span>All</span>
            </label>
            <label
              htmlFor="bGood"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bGood"
                type="radio"
                name="luck-types"
                checked={luckType === "good"}
                onChange={() => setLuckType("good")}
              />
              <span>Good Luck</span>
            </label>
            <label
              htmlFor="bHealth"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bHealth"
                type="radio"
                name="luck-types"
                checked={luckType === "health"}
                onChange={() => setLuckType("health")}
              />
              <span>Health</span>
            </label>
            <label
              htmlFor="bCareer"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bCareer"
                type="radio"
                name="luck-types"
                checked={luckType === "career"}
                onChange={() => setLuckType("career")}
              />
              <span>Career</span>
            </label>
            <label
              htmlFor="bTraffic"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bTraffic"
                type="radio"
                name="luck-types"
                checked={luckType === "traffic"}
                onChange={() => setLuckType("traffic")}
              />
              <span>Traffic</span>
            </label>
            <label
              htmlFor="bMarriage"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bMarriage"
                type="radio"
                name="luck-types"
                checked={luckType === "marriage"}
                onChange={() => setLuckType("marriage")}
              />
              <span>Marriage</span>
            </label>
            <label
              htmlFor="bPregnancy"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="bPregnancy"
                type="radio"
                name="luck-types"
                checked={luckType === "pregnancy"}
                onChange={() => setLuckType("pregnancy")}
              />
              <span>Pregnancy</span>
            </label>
          </div>
        )}
      </div>
      <div
        className="relative hover:text-[var(--foreground)] transition-colors duration-300 md:w-full"
        ref={beliefRef}
      >
        <div className="cursor-pointer z-40" onClick={setBeliefClicked}>
          <div
            className={`mb-0 pb-0 ${
              isBeliefClicked ? "filter-border-no-b" : "transparent-border"
            }`}
          >
            <div
              className={`inline-grid grid-flow-col items-center h-16 gap-6 whitespace-normal pl-8 ${
                isBeliefClicked ? "text-[var(--foreground)]" : ""
              }`}
            >
              <div>Belief Type</div>
              <svg
                width="7"
                height="5"
                viewBox="0 0 7 5"
                className={`transition-transform duration-300 ${
                  isBeliefClicked ? "rotate-[-90deg]" : ""
                }`}
              >
                <path d="M0 2.5L7 0v5L0 2.5z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </div>
        {isBeliefClicked && (
          <div
            className={`z-50 absolute bg-[var(--background)] text-[var(--foreground)] px-8 pb-6 mt-0 pt-0 md:w-full ${
              isBeliefClicked ? "filter-border-no-t" : "transparent-border"
            }`}
          >
            <label
              htmlFor="shinto"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="shinto"
                type="radio"
                name="belief-types"
                checked={beliefType === "shinto"}
                onChange={() => {
                  setBeliefType("shinto");
                }}
              />
              <span>Shinto</span>
            </label>
            <label
              htmlFor="buddhist"
              className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer"
            >
              <input
                id="buddhist"
                type="radio"
                name="belief-types"
                checked={beliefType === "buddhist"}
                onChange={() => {
                  setBeliefType("buddhist");
                }}
              />
              <span>Buddhist</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
