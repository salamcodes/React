const Card = () => {
    return (
        <div
            className="p-6 rounded-xl
                 bg-white dark:bg-gray-900
                 text-gray-900 dark:text-gray-100
                 shadow-md transition-colors duration-300"
        >
            <h2 className="text-lg font-semibold mb-2">
                Card Title
            </h2>
            <p className="text-sm opacity-80">
                This card adapts to light and dark themes.
            </p>
        </div>
    );
};

export default Card;
