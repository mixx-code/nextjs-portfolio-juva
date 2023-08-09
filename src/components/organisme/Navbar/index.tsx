type NavbarProps = {
  className?: string;
};

const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <p className="text-3xl text-neutral-950">Juva</p>
      <div className="flex gap-5 text-neutral-950">
        <a href="#About" className="hover:underline decoration-slate-50">
          About
        </a>
        <a href="#Project" className="hover:underline decoration-slate-50">
          Project
        </a>
        <a href="" className="hover:underline decoration-slate-50">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
