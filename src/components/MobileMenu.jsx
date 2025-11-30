export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },

    { href: "#contact", label: "Contact" },
  ];

  if (!menuOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black md:hidden">
      <div className="flex flex-col items-center justify-center h-full gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl hover:text-blue-500 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
