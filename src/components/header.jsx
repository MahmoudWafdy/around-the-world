import Logo from "./Logo";
import ThemeSwithcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="mb-6 shadow bg-white dark:bg-gray-800 md:mb-12">
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <ThemeSwithcher />
        </div>
      </div>
    </header>
  );
};
export default Header;
