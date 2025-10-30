const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer (Frontend Focus)",
      company: "Bottomline Technologies",
      period: "June 2022 - Present",
      location: "London, UK",
      responsibilities: [
        "Spearheaded frontend development of a new fintech module serving as a core driver of upcoming company revenue, working closely with backend, UX, and product stakeholders to deliver a performant, accessible, and visually cohesive interface",
        "Led strategic migration projects involving Webpack (4 → 5), Babel, React Router DOM, GraphQL, and internal libraries — ensuring a future-ready and efficient development ecosystem",
        "Implemented optimizations to improve build performance and reduce bundle size, resulting in faster deployment cycles and better maintainability",
        "Established comprehensive testing practices using Cypress Component Testing for UI validation, Jest and React Testing Library for unit & integration tests, focusing on predictable, accessible, and resilient components",
        "Actively contribute to code reviews, knowledge sharing, and fostering a supportive engineering culture"
      ]
    },
    {
      title: "Frontend Developer",
      company: "FSB",
      period: "March 2021 - May 2022",
      location: "UK",
      responsibilities: [
        "Collaborated with technology managers, business analysts, and stakeholders to understand and refine business requirements, translating them into clean, maintainable code",
        "Designed and implemented complex solutions while conducting code reviews and providing technical guidance to team members",
        "Implemented a custom reward framework within the codebase to drive user engagement, based on gamification principles",
        "Championed adoption of modern React practices and resolved integration issues to ensure seamless implementation within existing projects",
        "Leveraged debugging expertise and collaborative problem-solving to quickly identify and resolve critical frontend issues across client and server-side components"
      ]
    },
    {
      title: "Sr. Frontend Web Developer",
      company: "Verizon Media",
      period: "September 2018 - January 2020",
      location: "London, UK",
      responsibilities: [
        "Implemented online ad campaigns from a technical operations standpoint using JavaScript (including frameworks), CSS3, and HTML through proprietary Verizon Media ad platforms (Richmedia, Native, Video)",
        "Developed innovative online display and video opportunities including augmented reality (AR) ads, 3D visual concepts, and dynamic video solutions",
        "Collaborated with cross-functional teams to integrate cutting-edge technologies enabling 3D and AR product visualization across iPhone, Android, and desktop platforms",
        "Implemented best practices and technical QA for creating high-performance online ad campaigns",
        "Solved complex ad implementation issues on mobile devices (native debugging) and web platforms"
      ]
    },
    {
      title: "Production Support Engineer",
      company: "Oath (AOL+YAHOO)",
      period: "April 2016 - September 2017",
      location: "London, UK",
      responsibilities: [
        "Built high-quality rich media ad campaigns for desktop and mobile platforms, supporting full lifecycle from creative production to live deployment",
        "Diagnosed, debugged, and resolved ad production issues for online ad platforms using Windows and Mac servers",
        "Resolved urgent live production issues within SLA protocols to preserve campaign and product integrity for US and European markets",
        "Contributed significantly to the distribution, adoption, and extension of company technology into broader product offerings"
      ]
    },
    {
      title: "Associate Production Support Engineer",
      company: "AOL Platforms",
      period: "January 2014 - March 2016",
      location: "New York, USA",
      responsibilities: [
        "Diagnosed and debugged browser issues related to online ad campaigns across multiple platforms",
        "Collaborated with UX designer team on customization solutions for online ad campaigns",
        "Provided QA direction and technical solutions to non-technical support teams",
        "Applied fixes for online ads created in Flash and HTML5, ensuring cross-browser compatibility"
      ]
    },
    {
      title: "Previous Experience",
      company: "",
      period: "",
      location: "",
      responsibilities: [
        "Website Support Specialist at LexisNexis Martindale-Hubbell, New Providence, NJ (2013) - Provided front-end and back-end support for CMS platforms (WordPress, Weebly), managed services through CRM and Git",
        "Web Development Intern at Quallsbenson, LLC, New York, NY (2012) - Created HTML5/CSS3 interfaces, developed mobile web versions using jQuery UI"
      ]
    }
  ]

  return (
    <section id="experience" className="py-12 px-6 lg:py-20 lg:px-20 flex justify-center">
      <div className="w-full max-w-6xl">
        <h2 className="mb-12">Experience</h2>

        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 flex flex-col md:flex-row justify-between">
            <div className="flex-1 mb-4 md:mb-0">
              <h3 className="mb-0">{exp.title}</h3>
              {exp.company && (
                <div className="text-xl mb-6 font-heading font-medium uppercase">
                  {exp.company} {exp.period && <span className="text-base normal-case">&nbsp;&nbsp;&nbsp;{exp.period}</span>}
                </div>
              )}
              {exp.responsibilities.map((resp, idx) => (
                <p key={idx} className="mb-3">{resp}</p>
              ))}
            </div>
            {exp.location && (
              <div className="md:text-right md:ml-8">
                <span className="text-primary whitespace-nowrap">{exp.location}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
