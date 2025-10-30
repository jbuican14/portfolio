const Experience = () => {
  const experiences = [
    {
      title: "Senior Technical Implementation Specialist",
      company: "Verizon Media (AOL+YAHOO)",
      period: "October 2017 - January 2020",
      location: "London",
      responsibilities: [
        "Implemented online ad campaigns from a technical operations standpoint using Javascript, CSS and HTML through proprietary Verizon Media ad platforms (Richmedia, Native, Video)",
        "Implemented best practices and technical quality assurance (QA) for creating rich media online ad campaigns",
        "Delivered the most effective way to solve online ad issues on mobile devices and on the web",
        "Developed innovative online display and video opportunities for advertising such as augmented reality ads (AR), 3D visual concepts, and dynamic content optimisation ads",
        "Teamed up with cross-functional departments to bring together multiple new technologies that allow viewing a product in 3D and augmented reality (AR) on iPhone and Android devices as well as on desktop computers (see Huffington Post project under section \"Past Work\")",
        "Led knowledge sharing sessions that proved to be key for team's success"
      ]
    },
    {
      title: "Production Support Engineer",
      company: "Oath (AOL+YAHOO)",
      period: "April 2016 - September 2017",
      location: "London",
      responsibilities: [
        "Built high quality rich media ad campaigns for desktop and mobile platforms",
        "Supported ad campaigns from creative production to live production",
        "Diagnosed, debugged, and solved ad production issues for online ad platforms using Windows and Mac servers to meet all campaign requirements",
        "Solved urgent live problems within protocols as defined by service-level agreements to preserve campaign and product integrity for US and European markets",
        "Contributed and improved significantly to the distribution, adoption, and extension of company technology into broader product offerings"
      ]
    },
    {
      title: "Associate Production Support Engineer",
      company: "AOL (AOL+YAHOO)",
      period: "January 2014 - March 2016",
      location: "New York, USA",
      responsibilities: [
        "Diagnosed and debugged a whole range of browser issues related to online ad campaigns",
        "Contributed on a regular basis to solutions reached by the UX designer team on any customisation of online ad campaigns",
        "Provided QA direction and technical solutions to non-technical support team, and applied fixes needed for online ads created in FLASH and HTML5",
        "Mentoring interns over the course of a year"
      ]
    },
    {
      title: "Previous Experience",
      company: "",
      period: "",
      location: "",
      responsibilities: [
        "Website Support Specialist at LexisNexis Martindale-Hubbell, New Providence, NJ, USA (2013)",
        "Interned at Quallsbenson, LLC, New York, NY (2012)"
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
                  {exp.company} {exp.period && <span className="text-base">&nbsp;&nbsp;&nbsp;{exp.period}</span>}
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
