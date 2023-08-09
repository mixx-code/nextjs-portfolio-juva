/* eslint-disable @next/next/no-img-element */
type cotactProps = {
  linkSosmed: string;
  sosmed: string;
  gambar: string;
  bg?: string;
  geser?: string;
};
const Contact = (props: cotactProps) => {
  const { linkSosmed, sosmed, gambar, bg, geser } = props;
  return (
    <div className=" h-20 w-full group flex items-center justify-center  ">
      <a
        href={linkSosmed}
        target="_blank"
        className={`scale-x-0  ${geser} group-hover:scale-100 group-hover:text-black transition duration-500 `}
      >
        {sosmed}
      </a>
      <div
        className={`w-20 h-20 flex items-center justify-center ${bg} group-hover:rotate-[360deg] transition ease-in-out duration-700 rounded-full `}
      >
        <img src={gambar} alt="gamabr sosmed" className="w-16 h-16" />
      </div>
    </div>
  );
};

export default Contact;
