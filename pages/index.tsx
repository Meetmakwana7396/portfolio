import Fade from "@/components/Animation/Fade";

export default function Home() {
  return (
    <div className="container max-w-6xl">
      <section className="pt-40 h-screen">
        <div className="space-y-6">
          <Fade delay={0.3}>
            <div className="text-xl">
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
        <div
          className=''
        >
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-xl leading-relaxed">
            I'm a creative frontend developer with a passion for crafting
            stunning and user-friendly web experiences.
          </p>
        </div>
      </section>
      {/* <Portfolio /> */}
    </div>
  );
}
