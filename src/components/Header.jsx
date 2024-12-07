const Header = ({ title, subtitle }) => (
    <header className="bg-green-500 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && <p className="text-lg mt-2">{subtitle}</p>}
    </header>
);

export default Header;
    