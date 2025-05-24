const ThemeToggle = () => {
  const toggleTheme = () => {
    const html = document.documentElement;
    const setTheme = html.getAttribute("data-theme");
    const newTheme = setTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      <input type="checkbox" value="synthwave" className="toggle theme-controller" />
    </button>
  );
};

export default ThemeToggle;
