import ButtonPrimary from "@/components/atom/Button/ButtonPrimary";

const CardHero = () => {
  return (
    <div className="flex w-64 flex-col gap-3 xl:w-2/5 md:flex">
      <p className="md:text-xl text-primary font-bold text-lg">
        Penyiar Radio <span className="text-slate-950">|</span> Pembawa Acara{" "}
        <span className="text-slate-950">|</span> customer relathion
      </p>
      <h1 className="md:text-6xl font-bold xl:mb-6 mb-4 text-xl">
        Hello, Nama saya Juva
      </h1>
      <p className="md:text-2xl text-justify text-slate-500">
        <span className="hidden md:block">
          seorang mahasiswa Komunikasi yang penuh semangat dan berbakat dalam
          bidang Public Relation. Saya percaya bahwa komunikasi yang efektif
          adalah kunci untuk menciptakan citra yang positif dan hubungan yang
          kuat.{" "}
        </span>
        Dengan pengalaman dan keterampilan yang saya miliki, saya siap
        memberikan warna baru dan energi positif di Pusat Karier UIN Jakarta.
        Bersama, mari ciptakan prestasi gemilang dan kesuksesan yang
        menginspirasi! 🚀😊
      </p>
      <div className="flex gap-3">
        <ButtonPrimary link="#contact">Contact</ButtonPrimary>
      </div>
    </div>
  );
};

export default CardHero;
