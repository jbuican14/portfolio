const About = () => {
  return (
    <section id="about" className="py-12 px-6 lg:py-20 lg:px-20 flex items-center min-h-screen">
      <div className="w-full">
        <h1 className="mb-0">
          Juti
          <span className="text-primary"> Buican</span>
        </h1>

        <div className="mb-8">
          <div className="text-2xl mb-6 font-heading font-medium">Frontend Developer at Bottomline Technologies</div>
        </div>

        <div className="mb-12">
          <div className="social-icons text-3xl mb-12">
            <a href="mailto:jbuican19@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/juti-bb7606a77/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://juti.thehackneywick.co.uk/" target="_blank" rel="noopener noreferrer" aria-label="Personal Website">
              <i className="fas fa-globe"></i>
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

        <div className="mb-12">
          <h3 className="text-2xl mb-4">About Me</h3>
          <p className="text-lg mb-4 leading-relaxed">
            I'm a Frontend Engineer with over 8 years of experience building performant, scalable, and user-centered web applications. My journey began in the fast-paced world of online advertising platforms, where I developed a deep appreciation for performance and precision in UI engineering.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Today, I'm part of Bottomline Technologies in EMEA, where I'm actively contributing to the company's modernisation efforts — from upgrading build tools like Webpack 4 → 5, Babel, and React Router, to utilising internal libraries and improving developer workflows.
          </p>
          <p className="text-lg leading-relaxed">
            I love translating business needs into elegant, maintainable solutions — whether that means refining frontend architecture, improving performance metrics, or simplifying user flows. Collaboration and code quality are central to my work: I actively participate in code reviews, share knowledge with teammates, and contribute to a supportive engineering culture.
          </p>
        </div>

        <div className="mb-8">
          <div className="text-2xl mb-6 font-heading font-bold uppercase">Technical Skills</div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Core Technologies</h4>
              <p>JavaScript/TypeScript, React, Redux, GraphQL, HTML5, CSS3, Tailwind CSS</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Build Tools & Development</h4>
              <p>Webpack, Vite, Babel, npm/yarn, Git, Agile/Scrum methodologies</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Testing & Quality Assurance</h4>
              <p>Jest, React Testing Library, Cypress Component Testing, TDD practices</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Architecture & Patterns</h4>
              <p>Micro Frontends, Advanced React Hooks, Performance Optimization, Accessibility (A11y)</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Additional Experience</h4>
              <p>Augmented Reality (AR) for web, 3D visualizations, Rich Media Ads, Mobile-first responsive design</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl mb-4 font-heading font-bold uppercase">Recent Projects</h3>
          <div className="space-y-3">
            <div>
              <a href="https://videos-hooks-six-lac.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:no-underline">
                Video Search App
              </a>
              <p className="text-gray-600">React custom hooks, YouTube API integration with Axios</p>
            </div>
          </div>
        </div>

        <div className="text-2xl mb-6 font-heading font-bold uppercase">What I Bring</div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <i className="fa fa-check text-primary mr-3 mt-1"></i>
            <span>Performance-focused frontend development with measurable results</span>
          </li>
          <li className="flex items-start">
            <i className="fa fa-check text-primary mr-3 mt-1"></i>
            <span>Cross-browser testing, debugging & modern web technologies</span>
          </li>
          <li className="flex items-start">
            <i className="fa fa-check text-primary mr-3 mt-1"></i>
            <span>Mobile-first, responsive, and accessible design implementation</span>
          </li>
          <li className="flex items-start">
            <i className="fa fa-check text-primary mr-3 mt-1"></i>
            <span>Strong collaboration in cross-functional agile teams</span>
          </li>
          <li className="flex items-start">
            <i className="fa fa-check text-primary mr-3 mt-1"></i>
            <span>Knowledge sharing, mentorship, and code review expertise</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
