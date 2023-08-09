import CardProject from "@/components/organisme/Card/CardProject";
import Contact from "@/components/organisme/Contact";
import Hero from "@/components/organisme/Hero";
import { useEffect, useState } from "react";

export default function Home() {
  const handleClick = () => {};
  // const [colorChange, setColorChange] = useState(false);
  // console.log(colorChange);
  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 80) {
  //     setColorChange(true);
  //   } else {
  //     setColorChange(false);
  //   }
  // };
  // useEffect(() => {
  //   changeNavbarColor();
  //   window.addEventListener("scroll", changeNavbarColor);
  // });
  return (
    <div className="pb-9">
      <Hero />
      <div
        id="Project"
        className="w-full flex flex-col items-center justify-center font-bold text-5xl my-20 "
      >
        Project
        <hr className="border-t-4 border-primary w-32 mt-3" />
      </div>
      <div className="w-full flex justify-center items-center gap-14 flex-col ">
        <CardProject
          title="Siaran"
          description="Menyiarkan program formal dan non formal dengan pendekatan yang menarik untuk menjangkau berbagai jenis audiens dan memberikan konten yang bervariasi dalam Menyiarkan berita harian nasional, internasional hingga entertaiment dan membahas isu-isu tertentu dari berbagai perspektif dengan metode"
          img="/pj1.jpg"
        />
        <CardProject
          title="Pekan Literasi (PELITA) 2021"
          description="Sebagai ketua plaksan dan pembicara diskusi kelompok pada acara Pekan Literasi yang merupakan program kerja dari Departemen Penelitian dan Pengembangan Himpunan Mahasiswa Program Studi Komunikasi dan Penyiaran Islam, Universitas Islam Negeri Syarif Hidayatullah Jakarta. Program ini bertujuan memberikan nilai-nilai akademis yang di fokuskan pada literasi anak dalam penciptaan serta pengabdian sebagai mahasiswa kepada bangsa."
          img="/pj2.jpg"
        />
        <CardProject
          title="RDK Roffair 2022"
          description="Menciptakan usaha dalam mengumpulkan dana atau sumber daya finansial dari berbagai sumber hingga terciptanya target yang di tuju dalam Project RDK Roffai"
          img="/pj3.jpg"
        />
      </div>
      <div
        id="Contact"
        className="w-full flex flex-col items-center justify-center font-bold text-5xl my-20 "
      >
        Contact
        <hr className="border-t-4 border-primary w-32 mt-3" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Contact
          linkSosmed="https://wa.me/+6285811283895"
          sosmed="0858-1128-3895"
          gambar="/whatsapp.png"
          bg="-ml-32 group-hover:-translate-x-16"
          geser="-translate-x-14  group-hover:translate-x-4"
        />
        <Contact
          linkSosmed="https://www.instagram.com/Juvasalma__/"
          sosmed="@Juvasalma__"
          gambar="/instagram.png"
          bg="-ml-32 group-hover:-translate-x-16"
          geser="-translate-x-14  group-hover:translate-x-4"
        />
        <Contact
          linkSosmed="mailto:juvasalmachotika@gmail.com"
          sosmed="juvasalmachotika@gmail.com"
          gambar="/gmail.png"
          bg="-ml-60 group-hover:-translate-x-20"
          geser="-translate-x-16  group-hover:translate-x-1"
        />
      </div>
    </div>
  );
}
