const ThemeButton = () => {
    return (
        <button
            className="px-4 py-2 rounded-lg
                 bg-gray-900 text-white
                 dark:bg-gray-100 dark:text-black
                 transition-colors duration-300 cursor-pointer"
        >
            Toggle Theme
        </button>
    );
};

export default ThemeButton;
