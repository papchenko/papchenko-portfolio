import heroImg from "../../assets/author.svg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className="h-24 md:h-10"></div>

        <section
          id="home"
          className="scroll-mt-24 flex flex-col md:flex-row md:justify-between md:items-center gap-8 pb-22 md:pb-0 md:min-h-screen px-5 md:px-20 relative"
        >
        <div className="flex flex-col gap-4 max-w-lg">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight text-center md:text-start">
            Portfolio Software Developer
          </h1>
          <p className="text-white text-lg md:text-xl text-center md:text-start">
            I build fully-featured web platforms and interactive experiences, combining clean, modern interfaces with reliable functionality. My projects range from dynamic marketplaces to gamified web applications, showcasing scalable and maintainable frontend solutions.
          </p>

          <div className="flex gap-4 mt-4 flex-wrap items-center justify-center md:justify-start">
            <a
              href="/MykolaPapchenko_CV.pdf"
              download
              className="secondary-button border border-orange-600 px-6 py-2 rounded-full text-white hover:bg-orange-500 transition"
            >
              Download CV
            </a>

            <a
              href="https://github.com/papchenko"
              target="_blank"
              className="social-link w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mykola-papchenko-a424423b5/"
              target="_blank"
              className="social-link w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="mt-1 md:mt-0 flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Hero"
            className="w-56 md:w-96 h-auto rounded-full shadow-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;