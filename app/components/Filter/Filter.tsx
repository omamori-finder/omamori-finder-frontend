import { useState } from "react";

const Filter = () => {
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

    return (
        <div className="relative bg-[var(--background)] block md:grid grid-cols-3 lg:grid-cols-4 gap-4 text-[var(--filter-text-color)] -ml-8 md:ml-0 md:pl-10">
            <div className="relative bg-[var(--background)] hover:text-[var(--foreground)] transition-colors duration-300 md:w-full">
                <div className="cursor-pointer z-40" onClick={setAreaClicked}>
                    <div className={`mb-0 pb-0 ${isAreaClicked ? 'filter-border-no-b' : 'transparent-border'}`}>
                        <div id="area-toggle-button" className={`inline-grid grid-flow-col items-center h-16 gap-6 whitespace-normal pl-8 ${isAreaClicked ? 'text-[var(--foreground)]' : '' }`}>
                            <div>Area</div>
                            <svg width="7" height="5" viewBox="0 0 7 5" className={`transition-transform duration-300 ${isAreaClicked ? 'rotate-[-90deg]' : ''}`}>
                                <path d="M0 2.5L7 0v5L0 2.5z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                {isAreaClicked && (
                    <div id="area-dropdown" className={`z-50 absolute bg-[var(--background)] text-[var(--foreground)] px-8 pb-6 mt-0 pt-0 md:w-full max-h-80 overflow-y-auto ${isAreaClicked ? 'filter-border-no-t' : 'transparent-border'}`}> 
                        <label htmlFor="bAreaAll" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bAreaAll" type="radio" name="japan-regions"/>
                            <span>All</span>
                        </label>
                        <label htmlFor="bHokkaido" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bHokkaido" type="radio" name="japan-regions"/>
                            <span>Hokkaido</span>
                        </label>
                        <label htmlFor="bTohoku" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bTohoku" type="radio" name="japan-regions"/>
                            <span>Tohoku</span>
                        </label>
                        <label htmlFor="bKanto" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bKanto" type="radio" name="japan-regions"/>
                            <span>Kanto</span>
                        </label>
                        <label htmlFor="bChubu" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bChubu" type="radio" name="japan-regions"/>
                            <span>Chubu</span>
                        </label>
                        <label htmlFor="bKansai" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bKansai" type="radio" name="japan-regions"/>
                            <span>Kansai</span>
                        </label>
                        <label htmlFor="bChugoku" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bChugoku" type="radio" name="japan-regions"/>
                            <span>Chugoku</span>
                        </label>
                        <label htmlFor="bShikoku" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bShikoku" type="radio" name="japan-regions"/>
                            <span>Shikoku</span>
                        </label>
                        <label htmlFor="bKyuOki" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bKyuOki" type="radio" name="japan-regions"/>
                            <span>Kyushu & Okinawa</span>
                        </label>
                    </div>
                )}
            </div>
            <div className="relative hover:text-[var(--foreground)] transition-colors duration-300 min-w-min md:w-full">
                <div className="cursor-pointer z-40" onClick={setLuckClicked}>
                    <div className={`mb-0 pb-0 ${isLuckClicked ? 'filter-border-no-b' : 'transparent-border'}`}>
                        <div id="luck-toggle-button" className={`inline-grid grid-flow-col items-center h-16 gap-6 whitespace-normal pl-8 ${isLuckClicked ? 'text-[var(--foreground)]' : '' }`}>
                            <div>Luck Type</div>
                            <svg width="7" height="5" viewBox="0 0 7 5" className={`transition-transform duration-300 ${isLuckClicked ? 'rotate-[-90deg]' : ''}`}>
                                <path d="M0 2.5L7 0v5L0 2.5z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                {isLuckClicked && (
                    <div id="luck-dropdown" className={`z-50 absolute bg-[var(--background)] text-[var(--foreground)] px-8 pb-6 mt-0 pt-0 md:w-full ${isLuckClicked ? 'filter-border-no-t' : 'transparent-border'}`}> 
                        <label htmlFor="bLuckAll" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bLuckAll" type="radio" name="luck-types"/>
                            <span>All</span>
                        </label>
                        <label htmlFor="bGood" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bGood" type="radio" name="luck-types"/>
                            <span>Good Luck</span>
                        </label>
                        <label htmlFor="bHealth" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bHealth" type="radio" name="luck-types"/>
                            <span>Health</span>
                        </label>
                        <label htmlFor="bCareer" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bCareer" type="radio" name="luck-types"/>
                            <span>Career</span>
                        </label>
                        <label htmlFor="bTraffic" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bTraffic" type="radio" name="luck-types"/>
                            <span>Traffic</span>
                        </label>
                        <label htmlFor="bMarriage" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bMarriage" type="radio" name="luck-types"/>
                            <span>Marriage</span>
                        </label>
                        <label htmlFor="bPregnancy" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bPregnancy" type="radio" name="luck-types"/>
                            <span>Pregnancy</span>
                        </label>
                    </div>
                )}
            </div>
            <div className="relative hover:text-[var(--foreground)] transition-colors duration-300 md:w-full">
                <div className="cursor-pointer z-40" onClick={setBeliefClicked}>
                    <div className={`mb-0 pb-0 ${isBeliefClicked ? 'filter-border-no-b' : 'transparent-border'}`}>
                        <div className={`inline-grid grid-flow-col items-center h-16 gap-6 whitespace-normal pl-8 ${isBeliefClicked ? 'text-[var(--foreground)]' : '' }`}>
                            <div>Belief Type</div>
                            <svg width="7" height="5" viewBox="0 0 7 5" className={`transition-transform duration-300 ${isBeliefClicked ? 'rotate-[-90deg]' : ''}`}>
                                <path d="M0 2.5L7 0v5L0 2.5z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                {isBeliefClicked && (
                    <div className={`z-50 absolute bg-[var(--background)] text-[var(--foreground)] px-8 pb-6 mt-0 pt-0 md:w-full ${isBeliefClicked ? 'filter-border-no-t' : 'transparent-border'}`}> 
                        <label htmlFor="bLuckAll" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bLuckAll" type="radio" name="luck-types"/>
                            <span>Shinto</span>
                        </label>
                        <label htmlFor="bGood" className="grid grid-flow-col items-center gap-4 min-h-8 w-max cursor-pointer">
                            <input id="bGood" type="radio" name="luck-types"/>
                            <span>Buddhist</span>
                        </label>
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default Filter;