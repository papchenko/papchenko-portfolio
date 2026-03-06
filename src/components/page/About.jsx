const About = () => {
  return (
      <section
        id="about"
        className="scroll-mt-14 consultation py-12 px-6 md:px-16 lg:px-32 bg-[radial-gradient(circle_at_top,_#0a0a0a,_#111)]"
      >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          About & Skills
        </h2>
        <p className="text-white/70 mt-4 text-xl md:text-2xl">
          Hi! I’m Mykola Papchenko, a frontend developer creating high-quality, production-ready web applications.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">

          <div className="flex-1">
            <p className="text-white/80 leading-relaxed text-lg md:text-xl">
              I specialize in building modern, responsive, and performant web applications using <strong>JavaScript</strong> and <strong>React</strong>.  
              My expertise includes state management with <strong>Redux</strong> and <strong>Context API</strong>, modular and scalable UI design with <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, and <strong>SASS</strong>, as well as implementing <strong>responsive layouts</strong>, <strong>animations</strong>, and <strong>UX enhancements</strong>.
              <br /><br />
              I actively use <strong>Git</strong> and <strong>GitHub</strong> for version control, managing branches, tracking changes, and maintaining structured repositories with clean commit history. My workflow also includes reliable deployment processes for production-ready applications.
              <br /><br />
              I work with modern build tools such as <strong>Vite</strong> and deploy applications using platforms like <strong>Firebase</strong>, <strong>Supabase</strong>, and <strong>GitHub Pages</strong>. I follow best practices for <strong>performance optimization</strong>, accessibility, and maintain clean, modular, and maintainable code.
              <br /><br />
              I also have a solid understanding of the fundamentals of <strong>TypeScript</strong> and continuously improve my skills by building and practicing with TypeScript-based projects to write more scalable and type-safe applications.
              <br /><br />
              My workflow includes working with APIs (<strong>REST</strong>), implementing <strong>unit and integration testing</strong>, and ensuring applications are production-ready across desktop and mobile devices.
            </p>
          </div>

          <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 mt-8 md:mt-0">
            <div className="px-6 py-3 bg-orange-500/20 text-orange-500 font-semibold rounded-full text-base md:text-lg hover:bg-orange-500/40 transition transform scale-100 hover:scale-105">JavaScript (ES6+)</div>
            <div className="px-6 py-3 bg-orange-500/20 text-orange-500 font-semibold rounded-full text-base md:text-lg hover:bg-orange-500/40 transition transform scale-100 hover:scale-105">TypeScript</div>
            <div className="px-6 py-3 bg-orange-500/20 text-orange-500 font-semibold rounded-full text-base md:text-lg hover:bg-orange-500/40 transition transform scale-100 hover:scale-105">React</div>
            <div className="px-6 py-3 bg-orange-500/20 text-orange-500 font-semibold rounded-full text-base md:text-lg hover:bg-orange-500/40 transition transform scale-100 hover:scale-105">Redux / Context API</div>
            <div className="px-6 py-3 bg-orange-500/20 text-orange-500 font-semibold rounded-full text-base md:text-lg hover:bg-orange-500/40 transition transform scale-100 hover:scale-105">Tailwind CSS</div>
            <div className="px-6 py-3 bg-orange-500/20 text-orange-500 font-semibold rounded-full text-base md:text-lg hover:bg-orange-500/40 transition transform scale-100 hover:scale-105">Bootstrap</div>
            <div className="px-6 py-3 bg-orange-500/20 text-orange-500 font-semibold rounded-full text-base md:text-lg hover:bg-orange-500/40 transition transform scale-100 hover:scale-105">Git</div>
            <div className="px-6 py-3 bg-orange-500/20 text-orange-500 font-semibold rounded-full text-base md:text-lg hover:bg-orange-500/40 transition transform scale-100 hover:scale-105">Vite</div>
            <div className="px-6 py-3 bg-orange-500/20 text-orange-500 font-semibold rounded-full text-base md:text-lg hover:bg-orange-500/40 transition transform scale-100 hover:scale-105">Firebase</div>
            <div className="px-6 py-3 bg-orange-500/20 text-orange-500 font-semibold rounded-full text-base md:text-lg hover:bg-orange-500/40 transition transform scale-100 hover:scale-105">Supabase</div>
            <div className="px-6 py-3 bg-orange-500/20 text-orange-500 font-semibold rounded-full text-base md:text-lg hover:bg-orange-500/40 transition transform scale-100 hover:scale-105">HTML / CSS / SASS</div>
            <div className="px-6 py-3 bg-orange-500/20 text-orange-500 font-semibold rounded-full text-base md:text-lg hover:bg-orange-500/40 transition transform scale-100 hover:scale-105">Responsive Design</div>
            <div className="px-6 py-3 bg-orange-500/20 text-orange-500 font-semibold rounded-full text-base md:text-lg hover:bg-orange-500/40 transition transform scale-100 hover:scale-105">UI Animations</div>
            <div className="px-6 py-3 bg-orange-500/20 text-orange-500 font-semibold rounded-full text-base md:text-lg hover:bg-orange-500/40 transition transform scale-100 hover:scale-105">Unit & Integration Testing</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;