import OmamoriCard from "../OmamoriCard";

const OmamoriFeedContainer = () => {
    // Only for testing
    const testData = [
        { key: 1, shrineName: "Meiji Jingu", tag: "Good Luck" },
        { key: 2, shrineName: "Sensoji", tag: "Marriage" },
        { key: 3, shrineName: "Ryoanji", tag: "Good Luck" },
        { key: 4, shrineName: "Ryoanji", tag: "Traffic" },
        { key: 5, shrineName: "Ryoanji", tag: "Health" }
    ];

    return (
        <ul className="list-none pl-0 m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {testData.map((omamori) => (
                <OmamoriCard
                    key={omamori.key}
                    shrineName={omamori.shrineName}
                    tag={omamori.tag}
                />
            ))}
        </ul>
    );
};

export default OmamoriFeedContainer;
