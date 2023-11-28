import React, { useEffect, useState } from 'react';
import './App.css';
import toggle from './toggle.png';
import wai from './wai.png';
import alarm from './alarmcar.jpg';
import nba from './nbaplayer.jpg';
import chrome from './chromext.png';
import mcdonalds from './mcdonalds.png';
import python from './python.png';
import js from './js.png';
import java from './java.png';
import cpp from './C++_logo.png';
import sql from './sql.png';

function Header({ currentSection }) {
  // Function to scroll to the section
  const scrollToSection = (sectionId) => {
    const headerOffset = document.querySelector('.header').offsetHeight;
    const section = document.getElementById(sectionId);
    const sectionPosition = section.getBoundingClientRect().top;
    const offsetPosition = sectionPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const getButtonClass = (sectionName) => {
    return `button ${currentSection === sectionName ? 'active' : ''}`;
  };

  return (
    <header className="header">
      <button className="nameButton" onClick={() => scrollToSection('contact')}>BRAYDEN O'NEIL</button>
      <div className="button-container">
        <button type="button" className={getButtonClass('about')} onClick={() => scrollToSection('about')}>About Me</button>
        <button type="button" className={getButtonClass('experience')} onClick={() => scrollToSection('experience')}>Experience</button>
        <button type="button" className={getButtonClass('projects')} onClick={() => scrollToSection('projects')}>Projects</button>
        <button type="button" className={getButtonClass('skills')} onClick={() => scrollToSection('skills')}>Skills</button>
        <input 
          type="button" 
          className={getButtonClass('resume')}
          onClick={() => window.open('https://drive.google.com/file/d/1aUXksLi6YUqksVmEPc_fmX5LpffzbZPw/view?usp=sharing')} 
          value="Resume"
        />
      </div>
    </header>
  );
}

function App() {
  const [scrollingSection, setScrollingSection] = useState('about');
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    document.body.classList.add('body');

    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      let foundSection = false;

      // Threshold value to adjust when sections become active
      const threshold = 700;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          // Calculate the position of the section with the offset and threshold
          const sectionTop = section.offsetTop - threshold;
          const sectionBottom = section.offsetTop + section.offsetHeight - threshold;

          // Check if the current scroll position is within the section bounds
          if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
            setScrollingSection(sectionId);
            foundSection = true;
            break;
          }
        }
      }

      // Default to 'about' if no other section was found
      if (!foundSection && window.pageYOffset < threshold) {
        setScrollingSection('about');
      }

      // Determine if 'About Me' section is past the blurred point
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutPosition = aboutSection.getBoundingClientRect().bottom + window.pageYOffset;
        setIsBlurred(window.scrollY > aboutPosition);
      }
    };

    // Call handleScroll on mount to set initial section
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.body.classList.remove('body');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <Header currentSection={scrollingSection} />
    
    <meta name="viewport" content="width=1200" />
      
    <div className={`App ${isBlurred ? 'blurred-background' : ''}`}>
      <Header />
      <section
        id="about"
        className={`content-section ${scrollingSection === 'about' ? 'active' : ''}`}
      >
        <h2 className="content-title">About Me</h2>
        <div className="content-text">
          <p>
           Hello, my name is Brayden! I am a hardworking Software Engineer, who enjoys pursuing hard-to-reach goals
            that require critical thinking and problem solving. I purusue these goals through the use
            of cutting edge technology that I find interesting, and maintain an optimistic attitude
            when faced with an issue.
          </p>
        </div>
        <div className="content-text1">
          <p>
            I am also a third year Computer Science Student at Wetsern University, and I enjoy applying those same principles
            to my school-work, where I have learned the fundamentals of Software Engineering. My internship experience has prepared me 
            for this field, however I love learning, and understand that there is always room for improvement!
          </p>
        </div>
        <div className="content-text1">
          <p>
            Outside of SWE, I enjoy things like film, mixed martial arts, and chess. Contact me if you would like to discuss these!
          </p>
        </div>
      </section>
      <section
        id="experience"
        className={`content-section ${scrollingSection === 'experience' ? 'active' : ''}`}
      >
        <h2 className="content-title">Experience & Achievements</h2>
        <div className="image-container">
        <img src={toggle} alt="Toggle Logo" />
      </div>
 
        <div className="content-text2">
          <p>
          Software Engineer Intern (Decemeber 2022 - July 2023) 
          </p>
        </div>
        <div className="content-text1">
        <p>At Toggle, I leveraged Google's Tesseract API to convert 
          users emails into text format, enabling data accessibility. Additionally, I integrated OpenAI's GPT-4 via their API to provide 
          valuable answers to user queries, enhancing the user experience.</p>

        <p>On the backend, I designed and implemented a database using SQL, with Node.js and Express for REST API development. This allowed 
          us to efficiently store and manage the information generated from the Emails and user interactions.</p>

        <p>For the frontend, I crafted a web app using React, powered by JavaScript, HTML, 
          and CSS, delivering a seamless user interface and overall experience. Additionally, I developed a desktop app using Flutter and Dart, featuring 
          a calendar and the ability to import events from various productivity platforms.</p>

        <p>Collaboration was a key aspect of my role, and I excelled at working with a team via GitHub, ensuring smooth project development and version 
          control. Lastly, I had the privilege of contributing creative and innovative UI/UX design ideas in collaboration with the design team, enhancing 
          the overall user interaction and visual appeal of our applications.</p>
          <hr class="dashed"></hr>
        </div>
        <div className="image-container">
        <img src={wai} alt="Western AI Logo" height="200" />
      </div>
        <div className="content-text2">
          <p>
          Western AI Case Competition 2023: Top 3 Finalist, Cash Prize Winner
          </p>
        </div>  
        <div className="content-text1">
            <p>My group's task was to conceive an innovative concept centered around AI technology. We addressed the common issue 
              of a lack of human connection experienced during video calls when the connection drops.</p>

            <p>The strategy we devised involved a multi-step approach to enhance the visual quality of video frames.</p>
      
          <p>First, we strategized Fast Super-Resolution Neural Networks (FSCNN) to sharpen the frame. Next, we included Computer Vision 
            techniques to recognize facial structures. Then, we combined the user's 3D face model with the information from computer vision's 
            analysis. Finally, we reconstructed the user's face using a General Adversarial Network (GAN) to achieve a higher-quality result.</p>
            <hr class="dashed"></hr>
        </div>
        
        <div className="image-container">
        <img src={mcdonalds} alt="McDonalds Logo" height="200" />
      </div>
        <div className="content-text2">
          <p>
          McDonalds Crew Trainer
          </p>
        </div>  
        <div className="content-text1">
            <p>Recived a promotion to crew trainer as a show of my leadership and collaboration skills</p>

        </div>
        <hr class="dashed"></hr>
      </section>
      <section
        id="projects"
        className={`content-section ${scrollingSection === 'projects' ? 'active' : ''}`}
      >
        <h2 className="content-title">Projects</h2>
        <div className="project-title">
          <p>
          
            Alarm Car
          </p>
          <div className="image-car">
            <img src={alarm} className="image-car" alt="Western AI Logo" height="700" />
          </div>
        </div>  
        <div className="content-text1">
        <article>
          <p>
              This innovative project involves an alarm clock mounted on a set of wheels. It's designed to activate at a user-defined time, 
              initiating a unique mechanism where it drives around the room until the user manually disables it. This design encourages 
              physical interaction, ensuring the user is fully awake.
          </p>
          <h4>Key Features:</h4>
          <ul>
              <li>
                  <strong>Custom-built Car:</strong> The vehicle was meticulously assembled from scratch, incorporating a Raspberry Pi for 
                  enhanced customizability and control.
              </li>
              <p></p>
              <li>
                  <strong>Python Script:</strong> A specialized Python script was developed to manage the car’s actions. It includes 
                  randomized movement patterns triggered when the alarm is set off.
              </li>
              <p></p>
              <li>
                  <strong>Component Integration:</strong> The project features a sophisticated blend of various components - servo motors, 
                  standard motors, an alarm buzzer, LEDs, and an ultrasonic module. Each component was carefully programmed and integrated 
                  to achieve the desired functionality.
              </li>
          </ul>
          <hr class="dashed"></hr>
      </article>
      <div className="project-title">
        
          <p>
            Nba Player Comparison
          </p>
          </div>
          <div className="image-car">
            <img src={nba} className="image-car" alt="Nba Comparison" height="700" />
          </div>
      <article>
        <p>
            This project focuses on evaluating the overall abilities of NBA players through a unique algorithm. The algorithm is designed to 
            assign different weights to each player's statistics, offering a nuanced and comprehensive assessment of their performance.
        </p>
        <h4>Project Highlights:</h4>
        <ul>
            <li>
                <strong>Data Integration:</strong> Utilized a public third-party NBA API to fetch comprehensive player statistics. The data 
                spans from the inception of the NBA to the present, allowing for a broad analysis of player performances across different eras.
            </li>
            <p></p>
            <li>
                <strong>Custom Algorithm Development:</strong> Developed a specialized algorithm that assigns varying weights to different 
                statistical categories. This approach enables a more balanced and accurate representation of a player's overall impact and skill.
            </li>
            <p></p>
            <li>
                <strong>Front-End Development:</strong> Personally handled the entire front-end development of the web application. This 
                experience provided invaluable insights and proficiency in various front-end technologies, enhancing both the functional and 
                aesthetic aspects of the application.
            </li>
        </ul>
        <hr class="dashed"></hr>
        </article>
        <div className="project-title">
            
              <p>
                Study Helper Chrome Extension
              </p>
              </div>
              <div className="image-car">
                <img src={chrome} className="image-car" alt="chrome ext" height="700" />
              </div>
              <article>
                <p>
                    Recognizing the absence of an efficient study planning tool in the Chrome Web Store, I developed this app to fulfill the essential need for simplified study session organization. Its key objective is to enhance the overall study experience by introducing a user-friendly approach to time management.
                </p>
                <h4>Core Features:</h4>
                <ul>
                    <li>
                        <strong>Customizable Timers:</strong> Enables users to set specific timers for focused study periods, ensuring productive and uninterrupted learning sessions.
                    </li>
                    <p></p>
                    <li>
                        <strong>Scheduled Break Times:</strong> Integrates the option to plan break times, facilitating a balanced study routine that prevents burnout.
                    </li>
                    <p></p>
                    <li>
                        <strong>Straightforward Planning:</strong> The app offers a straightforward, effortless interface for listing and planning study sessions, making it accessible and convenient for all users.
                    </li>
                </ul>
                <hr class="dashed"></hr>
              </article>


        </div>
      </section>
      <section id="skills" className={`content-section ${scrollingSection === 'skills' ? 'active' : ''}`}>
  <h2 className="content-title">Skills</h2>
  <div className="skills-container">
    <div className="content-text1">
      <h3>Python <img src={python} className="image-logo" alt="python" height="100" /></h3>
      <p>Adept at Python, adept at leveraging its powerful libraries for data analysis, machine learning, and web development. My experience ranges from automating tasks to developing complex algorithms, emphasizing clean, efficient code.</p>
    </div>
    <div className="content-text1">
      <h3>JavaScript <img src={js} className="image-car" alt="js" height="100" /></h3>
      <p>Skilled in JavaScript, with a strong grasp of both front-end and back-end development. I excel in creating dynamic, user-friendly web applications using frameworks like React and Node.js, with a focus on performance and scalability.</p>
    </div>
    <div className="content-text1">
      <h3>Java <img src={java} className="image-logo" alt="java" height="100" /></h3>
      <p>Proficient in Java, with substantial experience in building robust, scalable applications. My expertise includes working with Spring Boot for backend services and Android app development, ensuring high-quality software solutions.</p>
    </div>
    <div className="content-text1">
      <h3>C++ <img src={cpp} className="image-logo" alt="cpp" height="100" /></h3>
      <p>Experienced in C++, adept at developing high-performance software. My knowledge extends to optimizing algorithms and memory management, suitable for system-level programming and computationally intensive tasks.</p>
    </div>
    <div className="content-text1">
      <h3>MySQL <img src={sql} className="image-logo" alt="sql" height="100" /></h3>
      <p>Well-versed in MySQL, specializing in designing and managing databases. My skills include data modeling, query optimization, and ensuring data integrity, crucial for developing data-driven applications with efficient data storage solutions.</p>
    </div>
  </div>
</section>
<section
        id="contact"
        className={`content-section ${scrollingSection === 'contact' ? 'active' : ''}`}
        style={{ paddingBottom: '350px' }}
      >
        <h2 className="content-title">Contact Me</h2>
        <div className="content-text1">
          <p>Email: oneilb123@gmail.com</p>
          <p>Phone: (905)-334-8591</p>
          <a href="https://www.linkedin.com/in/brayden-o-neil-32b405205/" target="_blank" class="content-text" rel="noreferrer">Connect with me on LinkedIn</a>

        </div>
      </section>
    </div>
    </>
  );
}

export default App;
