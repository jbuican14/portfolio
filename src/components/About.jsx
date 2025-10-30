const About = () => {
  return (
    <section id="about" className="py-12 px-6 lg:py-20 lg:px-20 flex items-center min-h-screen">
      <div className="w-full">
        <h1 className="mb-0">
          Jutiporn
          <span className="text-primary"> Buican</span>
        </h1>

        <div className="mb-12">
          <div className="social-icons text-3xl mb-12">
            <a href="mailto:jbuican19@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/jutiporn-buican-b7606a77/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/jbuican14"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="!bg-cover !bg-center"
              style={{ backgroundImage: "url(/img/myAvatar.png)" }}
            >
              <i className="fab invisible"></i>
            </a>
          </div>
        </div>

        <p className="text-xl mb-12 leading-relaxed">A mid-weight frontend web developer.</p>

        <div className="mb-8">
          <div className="text-2xl mb-6 font-heading font-bold uppercase">Programming Languages & Tools</div>
          <div className="space-y-4">
            <p>JavaScript & JavaScript Framework/Libraries (React, Redux), CSS3, HTML5, Web Technologies and web services, APIs, Webpack, Debugging (TDD), Augmented Reality for web, Adobe Media encoder, Adobe Photoshop</p>
            <p>Rich Media Ads (Celtra, ADTECH)</p>
          </div>
        </div>

        <div className="mb-8">
          <p className="mb-2">React, Redux [project list]</p>
          <p className="ml-4">
            - <a href="https://videos-hooks-six-lac.vercel.app" target="_blank" rel="noopener noreferrer" className="underline">video search</a> : React custom hooks, fetch Youtube API with Axios
          </p>
        </div>

        <div className="text-2xl mb-6 font-heading font-bold uppercase">Workflow</div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <i className="fa fa-check text-primary mr-3 mt-1"></i>
            <span>Cross Browser Testing & Debugging (including Web Technologies)</span>
          </li>
          <li className="flex items-start">
            <i className="fa fa-check text-primary mr-3 mt-1"></i>
            <span>Mobile-First, Responsive Design</span>
          </li>
          <li className="flex items-start">
            <i className="fa fa-check text-primary mr-3 mt-1"></i>
            <span>Cross Functional Teams</span>
          </li>
          <li className="flex items-start">
            <i className="fa fa-check text-primary mr-3 mt-1"></i>
            <span>Agile Development & Scrum</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
