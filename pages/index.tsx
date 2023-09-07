import Fade from "@/components/Animation/Fade";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <section className="mt-20">
        <div className="space-y-6">
          <Fade delay={0.3}>
            <div className="text-sm sm:text-xl flex gap-4">
              <div>
                <Image
                  src="/my-pfp.jpg"
                  width={56}
                  height={56}
                  className="h-full sm:w-14"
                  alt="Profile Picture"
                />
              </div>
              <div>
                <p>Meet Makwana</p>
                <p className="text-purple-500/70">Frontend Developer.</p>
              </div>
            </div>
          </Fade>

          <Fade>
            <p className="text-[40px] sm:text-[150px] leading-snug font-[800]">
              Building Websites People{" "}
              <span className="text-purple-500">{`{ Love }`}</span> To Use.
            </p>
          </Fade>

          <Fade delay={0.7}>
            <button className="px-20 py-4 border font-semibold hover:text-purple-500 hover:border-purple-500">
              Explore
            </button>
          </Fade>
        </div>
      </section>
    </div>
  );
}
