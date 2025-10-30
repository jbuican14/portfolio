const PastWork = () => {
  const projects = [
    {
      title: "Sketchfab 3D ad campaign run in the UK",
      video: "/portfolio/img/3D.mp4",
      link: "https://emea.adshowcase.verizonmedia.com/detail/583",
    },
    {
      title: "3D with geolocation campaign run in the UK",
      video: "/portfolio/img/3DPress.mp4",
      link: "https://emea.adshowcase.verizonmedia.com/detail/569",
    },
    {
      title: "Carousel animation campaign run in Germany",
      video: "/portfolio/img/Carousel.mp4",
      link: "https://emea.adshowcase.verizonmedia.com/detail/582",
    },
    {
      title: "3D and AR project for the Huffington Post UK",
      video: "/portfolio/img/AR.mp4",
      link: "https://www.huffingtonpost.co.uk/entry/we-opened-the-best-beauty-advent-calendars-2019-who-came-out-on-top_uk_5d8b39b9e4b0c6d0cef43419?1wt&guccounter=2",
    },
    {
      title: "360 animation campaign run in Greece",
      video: "/portfolio/img/360.mp4",
      link: "https://emea.adshowcase.verizonmedia.com/detail/563",
    },
    {
      title: "Video + gallery campaign run in Italy",
      video: "/portfolio/img/video-gallery.mp4",
      link: "https://emea.adshowcase.verizonmedia.com/detail/552",
    },
  ];

  const achievements = [
    {
      icon: "fa-trophy",
      text: "1st Place - EMEA internal hackathon team - Bottomlines 2024",
    },
    {
      icon: "fa-trophy",
      text: "1st Place - EMEA internal hackathon team  - Bottomlines 2023",
    },
    {
      icon: "fa-trophy",
      text: "Global Exchange Programme 2018 - Ad Technology Creative Team - Verizon Media",
    },
    {
      icon: "fa-bullhorn",
      text: "1st Place - Ad Production Experience - Hackathon 2015",
    },
  ];

  return (
    <section
      id="pastWork"
      className="py-12 px-6 lg:py-20 lg:px-20 flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="mb-12">Past Work & Achievements</h2>
        <p className="text-lg mb-8 italic text-gray-600">
          Projects during my time at ad agency (Verizon Media/AOL)
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <video
                  className="w-full md:w-80 h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  playsInline
                  autoPlay
                  muted
                  loop
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-dark transition-colors"
              >
                <h5 className="text-xl font-semibold">{project.title}</h5>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <i
                  className={`fa ${achievement.icon} text-yellow-500 text-2xl mr-4 mt-1`}
                ></i>
                <span
                  className="text-lg"
                  dangerouslySetInnerHTML={{
                    __html: achievement.text.replace("1st", "1<sup>st</sup>"),
                  }}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PastWork;
