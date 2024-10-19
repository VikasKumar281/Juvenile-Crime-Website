// import  { useState, useEffect } from 'react';
// import { ChevronRight, Menu, X } from 'lucide-react';
// import './Page.css';

// const MainPage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('.content-section');
//       let currentSection = '';

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
//           currentSection = section.id;
//         }
//       });

//       setActiveSection(currentSection);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const menuItems = [
//     { id: 'overview', label: 'Overview' },
//     { id: 'causes', label: 'Causes' },
//     { id: 'prevention', label: 'Prevention' },
//     { id: 'solutions', label: 'Solutions' },
//     { id: 'resources', label: 'Resources' },
//     { id: 'team', label: 'Our Team' },  
//   ];

//   const teamMembers = [
//     { name: 'Divyansh Yadav', role: 'Project Lead', image: 'Divyansh.jpeg' },
//     { name: 'Vikas kumar', role: 'Front-End Developer', image: 'Vikas1.jpeg' },
//     { name: 'Rawat Harsh', role: 'ML Specialist', image: 'Rawat.jpeg' },
//     { name: 'Anil Meena', role: 'Content Specialist', image: 'Anil.jpeg' },
//   ];

//   return (
//     <div className="app">
//       <nav className="navbar">
//         <div className="navbar-container">
//           <div className="navbar-content">
//             <div className="navbar-logo">
//               <h1>Juvenile Delinquency</h1>
//             </div>
//             <div className="navbar-menu-desktop">
//               {menuItems.map((item) => (
//                 <a
//                   key={item.id}
//                   href={`#${item.id}`}
//                   className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//             <div className="navbar-menu-mobile">
//               <button onClick={toggleMenu} className="menu-toggle">
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="mobile-menu">
//             {menuItems.map((item) => (
//               <a
//                 key={item.id}
//                 href={`#${item.id}`}
//                 className={`mobile-menu-link ${activeSection === item.id ? 'active' : ''}`}
//                 onClick={toggleMenu}
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>

//       <div className="main-content">
//         <section className="hero">
//           <div className="hero-content">
//             <h2>Understanding and Addressing Juvenile Delinquency</h2>
//             <p>
//               Explore the complexities of juvenile delinquency, its impact on society, and innovative approaches to prevention and rehabilitation. Join us in creating a safer, more supportive environment for our youth.
//             </p>
//             <a href="#overview" className="cta-button">
//               Discover More
//               <ChevronRight className="icon" aria-hidden="true" />
//             </a>
//           </div>
//         </section>

//         <main className="content">
//   {['overview', 'causes', 'prevention', 'solutions', 'resources'].map((section) => (
//   <section
//     key={section}
//     id={section}
//     className="content-section"
//   >
//     <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
//     <p>
//       {section === 'overview' && "Juvenile delinquency encompasses a range of behaviors that violate legal and social norms, committed by individuals under the age of majority. This complex issue intersects with various societal factors, including education, family dynamics, socioeconomic conditions, and mental health. Understanding the nuances of juvenile delinquency is crucial for developing effective intervention strategies and policies."}
//       {section === 'causes' && "The etiology of juvenile delinquency is multifaceted, involving a complex interplay of individual, familial, and societal factors. Key contributors include adverse childhood experiences, socioeconomic disadvantage, peer influence, substance abuse, and inadequate educational support. Neurobiological factors and psychological disorders also play significant roles. Recognizing these diverse causes is essential for tailoring prevention and intervention programs."}
//       {section === 'prevention' && "Effective prevention strategies focus on early intervention and holistic approaches. These include strengthening family support systems, enhancing school engagement, promoting positive youth development programs, and addressing community risk factors. Evidence-based initiatives such as mentoring programs, cognitive-behavioral interventions, and family therapy have shown promise in reducing delinquent behaviors and promoting positive outcomes for at-risk youth."}
//       {section === 'solutions' && "Addressing juvenile delinquency requires a comprehensive, multi-systemic approach. Restorative justice practices, which focus on rehabilitation and reconciliation, have gained traction as alternatives to traditional punitive measures. Collaborative efforts between law enforcement, social services, educational institutions, and community organizations are crucial. Innovative programs that emphasize skill development, emotional regulation, and positive decision-making are integral to effective rehabilitation and reintegration strategies."}
//       {section === 'resources' && "A wealth of resources is available for individuals, families, and professionals seeking to address juvenile delinquency. These include national helplines, community-based intervention programs, educational materials, and support groups. Academic institutions and government agencies offer research-based guidance and policy recommendations. Engaging with these resources can provide valuable insights and support for those impacted by or working to prevent juvenile delinquency."}
//     </p>
//   </section>
// ))}

//           {/* Team Section */}
//           <section id="team" className="content-section team-section">
//             <h2>Our Team</h2>
//             <div className="team-grid">
//               {teamMembers.map((member) => (
//                 <div key={member.name} className="team-member">
//                   <img src={member.image} alt={`${member.name}'s photo`} className="team-photo" />
//                   <h3>{member.name}</h3>
//                   <p>{member.role}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </main>
//       </div>

//       <footer className="footer">
//         <div className="footer-content">
//           <p>
//             &copy; 2024 Juvenile Delinquency Project.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default MainPage;


import { useState, useEffect } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import './Page.css';

const MainPage = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const [selectedVideo, setSelectedVideo] = useState(null);

  const playVideo = (videoId) => {
    setSelectedVideo(videoId);
  };

  

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.content-section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const youtubeVideos = [
    { id: '5pBaOJtTvV4', title: 'Video Title 1' },
    { id: 'hBzP8MtJf04', title: 'Video Title 2' },
    { id: 'PopEXybp5y4', title: 'Juvenile Justice' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'causes', label: 'Causes' },
    { id: 'prevention', label: 'Prevention' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'resources', label: 'Resources' },
    { id: 'multimedia', label: 'Multimedia' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'chatbot', label: 'AI' },
    { id: 'team', label: 'Our Team' },
  ];

  const teamMembers = [
    { name: 'Divyansh Yadav', role: 'Project Lead', image: 'Divyansh.jpeg' },
    { name: 'Vikas kumar', role: 'Front-End Developer', image: 'Vikas1.jpeg' },
    { name: 'Rawat Harsh', role: 'Machine Learning', image: 'Rawat.jpeg' },
    { name: 'Anil Meena', role: 'Content Specialist', image: 'Anil.jpeg' },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="navbar-logo">
              <h1>YOUTHCONNECT</h1>
            </div>
            <div className="navbar-menu-desktop">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="navbar-menu-mobile">
              <button onClick={toggleMenu} className="menu-toggle">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`mobile-menu-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <div className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h2>Understanding and Addressing Juvenile Delinquency</h2>
            <p>
              Explore the complexities of juvenile delinquency, its impact on society, and innovative approaches to prevention and rehabilitation. Join us in creating a safer, more supportive environment for our youth.
            </p>
            <a href="#overview" className="cta-button">
              Discover More
              <ChevronRight className="icon" aria-hidden="true" />
            </a>
          </div>
        </section>

        <main className="content">
          {['overview', 'causes', 'prevention', 'solutions', 'resources'].map((section) => (
            <section
              key={section}
              id={section}
              className="content-section"
            >
              <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
              <p>
                {section === 'overview' && "Juvenile delinquency encompasses a range of behaviors that violate legal and social norms, committed by individuals under the age of majority. This complex issue intersects with various societal factors, including education, family dynamics, socioeconomic conditions, and mental health. Understanding the nuances of juvenile delinquency is crucial for developing effective intervention strategies and policies."}
                {section === 'causes' && "The etiology of juvenile delinquency is multifaceted, involving a complex interplay of individual, familial, and societal factors. Key contributors include adverse childhood experiences, socioeconomic disadvantage, peer influence, substance abuse, and inadequate educational support. Neurobiological factors and psychological disorders also play significant roles. Recognizing these diverse causes is essential for tailoring prevention and intervention programs."}
                {section === 'prevention' && "Effective prevention strategies focus on early intervention and holistic approaches. These include strengthening family support systems, enhancing school engagement, promoting positive youth development programs, and addressing community risk factors. Evidence-based initiatives such as mentoring programs, cognitive-behavioral interventions, and family therapy have shown promise in reducing delinquent behaviors and promoting positive outcomes for at-risk youth."}
                {section === 'solutions' && "Addressing juvenile delinquency requires a comprehensive, multi-systemic approach. Restorative justice practices, which focus on rehabilitation and reconciliation, have gained traction as alternatives to traditional punitive measures. Collaborative efforts between law enforcement, social services, educational institutions, and community organizations are crucial. Innovative programs that emphasize skill development, emotional regulation, and positive decision-making are integral to effective rehabilitation and reintegration strategies."}
                {section === 'resources' && "A wealth of resources is available for individuals, families, and professionals seeking to address juvenile delinquency. These include national helplines, community-based intervention programs, educational materials, and support groups. Academic institutions and government agencies offer research-based guidance and policy recommendations. Engaging with these resources can provide valuable insights and support for those impacted by or working to prevent juvenile delinquency."}
              </p>
            </section>
          ))}



      {/* Thumbnails for YouTube Videos */}
           <section id="multimedia" className="content-section multimedia-section">
      <h2>Watch Our Videos</h2>

      <div className="youtube-thumbnails">
        {youtubeVideos.map((video) => (
          <div key={video.id} onClick={() => playVideo(video.id)} className="video-thumbnail">
          <img 
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
            
            alt={`${video.title} Thumbnail`} 
            className="thumbnail-image"
          />

        </div>
        
        ))}
      </div>

      {/* YouTube Embedded Player */}
      {selectedVideo && (
        <div className="youtube-player">
          <iframe
            width="300"
            height="220"
            src={`https://www.youtube.com/embed/5pBaOJtTvV4`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
          

                  <iframe
            width="300"
            height="220"
            src={`https://www.youtube.com/embed/hBzP8MtJf04`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>

            <iframe
            width="300"
            height="220"
            src={`https://www.youtube.com/embed/PopEXybp5y4`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>

        
      )}
    </section>




   {/* Calendar Image */}
    <section id="calendar" className="calendar-section">
      <h1 id="event">Event Calendar</h1>

   <div className="calendar-image">
        <img src="Calendar1.jpeg" alt="Event Calendar" className="Calendar" />
      </div>
    </section>



          {/* ChatBot Section */}
          <section id="chatbot" className="chatbot-section">
        <h2>Chat with KI</h2>
        <div className="chatbot-container">
    <iframe
      width="100%"
      height="500"
      allow="microphone;"
      src="https://console.dialogflow.com/api-client/demo/embedded/32f24abe-bcc5-429b-808c-2120c156232c"
    ></iframe>
       </div>
    </section>

          {/* Team Section */}
          <section id="team" className="content-section team-section">
            <h2>Our Team</h2>
            <div className="team-grid">
              {teamMembers.map((member) => (
                <div key={member.name} className="team-member">
                  <img src={member.image} alt={`${member.name}'s photo`} className="team-photo" />
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </section>
      </main>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Juvenile Delinquency Project.</p>
        </div>
      </footer>
    </div>
  );
};
export default MainPage;
