import Fade from "@/components/Animation/Fade";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container max-w-6xl">
      <section className="mt-40">
        <div className="space-y-6">
          <Fade delay={0.3}>
            <div className="text-xl">
              <p>Meet Makwana</p>
              <p>Frontend Developer.</p>
            </div>
          </Fade>

          <Fade>
            <p className="text-[90px] max-w-[750px] leading-snug font-bold">
              Designing interfaces that{' '}
              <span className="text-primary tracking-wider">{`"speak"`}</span> the language
              of users.
            </p>
          </Fade>
        </div>
      </section>
    </div>
  );
}
