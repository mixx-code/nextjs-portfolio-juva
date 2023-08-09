/* eslint-disable @next/next/no-img-element */
type IlustrasiProps = {
  className?: string;
};
const Ilustrasi = (props: IlustrasiProps) => {
  const { className } = props;
  return (
    <>
      <div className={className}>
        <img src="/pp2.png" alt="bgyelow" />
      </div>
      <div className="animate-goyang skew-y-6 absolute right-60 top-3 w-32 md:right-[550px] md:top-[130px] md:w-52 -z-10 ">
        <img src="/icon1.png" alt="icon1" />
      </div>
      <div className="animate-goyang absolute right-1 bottom-[42%] w-24 md:right-[-30px] md:bottom-[35%] md:w-52 -z-10 ">
        <img src="/icon2.png" alt="icon2" />
      </div>
      <div className="animate-goyang absolute top-[-10px] -right-24 w-[370px] md:right-[-20px] md:top-[-50px] md:w-[500px] -z-10 ">
        <img src="/icon3.png" alt="icon3" className="rotate-45" />
      </div>
    </>
  );
};

export default Ilustrasi;
