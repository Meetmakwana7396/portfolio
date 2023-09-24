import Fade from "@/components/Animation/Fade";
import { getRecentTracks } from "@/utils/spotify";
import { useEffect, useState } from "react";

export default function Home() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getRecentTracks().then((data) => {
      setTracks(data);
    });
  }, []);

  return (
    <div className="container max-w-6xl">
      <section className="pt-40 h-screen">
        <div className="space-y-6">
          <Fade delay={0.3}>
            <div className="text-2xl">
              <p>Meet Makwana</p>
              <p>Frontend Developer.</p>
            </div>
          </Fade>

          <Fade>
            <p className="text-[50px] md:text-[90px] max-w-[750px] leading-snug font-bold">
              Designing interfaces that{" "}
              <span className="text-primary tracking-wider">{`"speak"`}</span>{" "}
              the language of users.
            </p>
          </Fade>
        </div>
      </section>

      <section className="pt-40 h-screen">
        <div className="">
          <h2 className="text-[50px] md:text-[90px] font-bold mb-4">
            About Me
          </h2>
          <p className="text-2xl leading-relaxed">
            I&apos;m Meet, a 20-year-old from Surat, Gujarat, with a
            Bachelor&apos;s degree in Information Technology. My interests are
            diverse, ranging from music, cricket, and chess to drawing. Beyond
            technology, I have a keen interest in Indian scriptural knowledge
            and enjoy reading books on the subject. My journey in the tech world
            is inspired by the cultural fusion of my hometown and the relentless
            pace of technological advancement. I specialize in web development,
            where I aim to create captivating and user-friendly online
            experiences. With a passion for learning and a commitment to staying
            current with emerging trends, I look forward to contributing to the
            ever-evolving digital landscape.
          </p>
        </div>
      </section>
      {/* <Portfolio /> */}
    </div>
  );
}
