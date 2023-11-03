import IMG1 from '../assets/portfolio1.jpg'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/portfolio3.jpg'
import IMG4 from '../assets/portfolio4.jpg'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.jpg'
import IMG7 from '../assets/portfolio7.png'
import IMG8 from '../assets/portfolio8.png'

const RESUME = {
    name: 'Raqtan Hoq',
    about: `I'm a software engineer with 3 years of experience in front-end development and AWS systems. My passion for programming started during my college years, and since then, I've been on a mission to build meaningful software products that make a difference. As a front-end developer, I specialize in building modern and responsive web applications using HTML, CSS Bootstrap, and React. In addition, I'm also proficient in AWS systems, particularly in deploying and scaling web applications using AWS Elastic Beanstalk, AWS Lambda, and Amazon RDS. I believe that cloud computing is the future of software development, and I'm excited to be a part of this ever-evolving field. Overall, my goal as a software engineer is to create innovative software solutions that solve real-world problems and make people's lives easier.`,
    experience: [
      {
        timeline_id: 3,
        timeline_type: 'work',
        id: 'Infy2',
        job: 'Infosys Limited',
        client: 'Sabre Inc.',
        role: 'Site Reliability Engineer',
        dates: 'Sep. 2021 - Aug. 2022',
        location: 'Remote',
        description: 
        [
          'Increased cloud infrastructure automation by writing Infrastructure as Code with AWS CloudFormation to create serverless architecture for client applications.',
          'Used AWS CloudWatch with detailed monitoring  to decrease dropped messages for client application’s reservation system by 20%.',
          'Implemented the full-scale migration of a client application’s server infrastructure, network security, load balancing, and database migration with AWS EC2 and RDS.',
          'Used Java and Python to write AWS Lambda with API Gateway to build serverless applications and decreased resource usage by 15%',
          'Used Kubernetes with Docker Containers to create automated functions for serverless architecture.'
        ]
      },
      {
        timeline_id: 4,
        timeline_type: 'work',
        id: 'Infy1',
        job: 'Infosys Limited',
        client: 'Capital Group Inc.',
        role: 'Associate Software Engineer',
        dates: 'Aug. 2019 - Sep. 2021',
        location: 'Irvine, CA',
        description: 
        [
          'Wrote and tested features for a client responsive web application and implemented change requests into the production environment using HTML, Bootstrap CSS, and React Javascript.',
          'Wrote reusable unit test documents to detect bugs and client conventions which increased overall team code quality and efficiency by 25%.',
          'Collaborated with back-end developers to make RESTful APIs to increase communication efficiency between the front-end and back-end of the client’s application by 20%.',
          'Automated the elimination of security vulnerabilities on 1000+ user machines using Python and Ansible Tower services.'
        ]
      }
    ],
    education:
    {
      timeline_id: 6,
      degree: 'B.S., Computer Science',
      location: 'Riverside, CA',
      id: 'primary-uni',
      uni: 'University of California - Riverside',
      dates: 'Sep. 2014 - Dec. 2018',
      gpa: '3.32',
      msngpa: '3.69',
      completed_coursework: 
      [
        'Intermediate Data Structure and Algorithms',
        'Software Design Patterns',
        'Operating Systems',
        'Computer Architecture',
        'Machine Learning',
        'Embedded Systems',
        'Computer Graphics',

      ],
      orgs:
      [
        'IEEE (Institute of Electrical and Electronics Engineers',
        'ACM (Association for Computing Machinery)',
        'Chess Club'
      ]
    },
    certs:
    [
      {
        timeline_id: 1,
        link: 'https://www.credly.com/badges/92d9b5f1-a31b-4ee2-99ea-ccdea37854f4/public_url',
        id: 'AWSSA1',
        name: 'AWS Solutions Architect - Associate (SAA-C03)',
        dates: 'Issued September 25, 2023',
        description: [
          'Completed coursework in AWS Fundamentals, CloudFormation, S3 Storage Services, and Containers.', 
          'Fundamental understanding of AWS Services such as CloudFormation, S3, KMS, EC2, and EBS.]', 
          'Trained in knowledge of Docker Containers, Images, and Kubernetes for task and service automation.'
        ]
      },
      {
        timeline_id: 2,
        link: 'https://www.freecodecamp.org/certification/rhoq001/javascript-algorithms-and-data-structures',
        id: 'JS',
        name: 'Javascript Data Structures and Algorithms',
        dates: 'Issued May 22, 2023',
        description: [
          'Completed coursework in Javascript Data Structures and Algorithms', 
          'Fundamental understanding of HTML, CSS Bootstrap, ReactJS, Redux, and Jquery', 
          'Trained in knowledge of responsive web design'
        ]
      }
    ],
    skills: 
    {
      programming_languages: 
      [
        'Java',
        'Javascript',
        'HTML',
        'CSS',
        'C/C++',
        'Python',
        'SQL',
      ],
      frameworks:
      [
        'React', 
        'Bootstrap', 
        'Spring', 
        'AWS CloudFormation', 
        'AWS Lambda', 
        'AWS resources',
        'Github version control', 
        'Agile Scrum Tools (Jira, Confluence, Bitbucket)'
      ],
      concepts:
      [
        'Object-Oriented Design (OOP)', 
        'Data Structures & Algorithms', 
        'Software Design Patterns', 
        'Databases',
        'Continuous Integration',
        'Team Communication'
      ]
    },
    projects:
    [
      {
        id: 'mlinuxterminal',
        name: 'Mock Linux Terminal',
        github: "https://github.com/rhoq001/Mock-Terminal",
        demo: '',
        img: IMG1,
        about: [
          {id: 'linux a1', str: 'Packaged for linux machines and operates on linux file systems'},
          {id: 'linux a2', str: 'Developed with C++ for Linux machines'},
          {id: 'linux a3', str: 'Uses Strategy Software Pattern Design to abstract linux command patterns'},
          {id: 'linux a4', str: 'Collaborated with colleagues to implement different components'},
        ],
        how_works: `rshell is our own personal bash terminal which reads in commands the user types in, reads the commands and connectors inputted and works to properly run the commands in the correct order. This is done by parsing the user input into two arrays, commands and connectors, and then using execvp and fork to properly run the commands. We built upon this so rshell now functions with the test command (also with the brackets operators) and with precendence operators. So rshell will now take precendence into account and can test files and directories and will return true or false whether they exist or not.`,
        problems_learned: [
          {id: 'linux p1', str: 'Strategy Design Pattern made scaling up with precedence operators much easier'},
          {id: 'linux p2', str: 'Writing unit tests for this was key to testing all the different operators and connectors'},
          {id: 'linux p3', str: 'String parsing was the most challenging part of this project'},
        ]
      },
      {
        id: 'STP',
        name: 'Spanning Tree Protocol',
        github: "https://github.com/rhoq001/Spanning-Tree-Protocol",
        demo: '',
        img: IMG2,
        about: [
          {id: 'stp a1', str: 'Emulates Spanning Tree Protocol between 3 machines'},
          {id: 'stp a2', str: 'Developed using Python scripting'},
          {id: 'stp a3', str: 'STP allows 3 machines to communicate without looping'},
          {id: 'stp a4', str: 'Uses root and non-root switching'},
        ],
        how_works: `Spanning Tree Protocol" (STP), which is used to prevent loops in a network topology. STP is used in Ethernet networks, and it ensures that there is only one active path between any two network nodes. This prevents the broadcast storms and other issues that can occur when there are multiple paths between nodes. STP works by designating a single switch as the root of the network, and then disabling all but one path to the root from each non-root switch.`,
        problems_learned: [
          {id: 'stp p1', str: 'Synchronizing network connections was a key challenge that helped give understanding to network loops'},
          {id: 'stp p2', str: 'Internal switch logic is the most challenging part of this project'},
        ]
      },
      {
        id: 'tet',
        name: 'Tetris',
        github: "https://github.com/rhoq001/CS120B-Tetris",
        demo: '',
        img: IMG3,
        about: [
          {id: 'tet a1', str: 'Operates on two microcontrollers to function on two circuit boards'},
          {id: 'tet a2', str: 'Developed using C'},
          {id: 'tet a3', str: 'Displayed on LED Matrices'},
          {id: 'tet a4', str: 'Implements score and music using circuit components'},
          {id: 'tet a5', str: 'Movement and controls are interfaced with an anolog stick per player'},
        ],
        how_works: `This is a two player Tetris game implemented using C. The source code is uploaded into two microcontrollers connected through wired circuits. These circuits connect the microcontrollers to each other and to the LED matrices displaying the Tetris board for each player. They are also connected to a number display to display score and a speaker to play the music. The game is controlled using analog sticks that are also connected to the microcontrollers. Game music is implemented by mapping note sound frequencies onto an array for a connected speaker on the board. Each player can employ power-ups: Powerup 1: Clearing four rows consecutively sends blocks to the other player, making the matrix cluttered. Powerup 2: Clearing four rows clears the player's entire screen to ensure survivability. Powerup 3: Clearing seven rows consecutively at once disables the enemy player's controls.`,
        problems_learned: [
          {id: 'tet p1', str: 'Synchronizing communication between the two microcontrollers and LED matrices was the most difficult challenge'},
          {id: 'tet p2', str: 'Mapping game music to an array of sound frequencies and play at the correct tempo was the most enjoyable challenge'},
          {id: 'tet p3', str: 'Figuring out how to multi-plex through each row of the LED matrix helped give insight into multi-plexers'},
          {id: 'tet p4', str: 'Circuits became unorganized and took extra time to tidy up'},
        ]
      },
      {
        id: 'Timer',
        name: 'Basic 25 + 5 Clock',
        github: "https://github.com/rhoq001/clock",
        demo: 'https://rhoq001.github.io/clock/',
        img: IMG5,
        about: [
          {id: 'time a1', str: 'Basic Web Application for a 25 + 5 clock'},
          {id: 'time a2', str: 'Developed using ReactJS, HTML5, and Bootstrap CSS'},
          {id: 'time a3', str: 'Hosted on Github Pages'},
          {id: 'time a4', str: 'Uses react-bootstrap library for components'},
          {id: 'time a5', str: 'Counters conrol session and break length. Timer switches between them'},
        ],
        how_works: `The 25 + 5 clock has a default session length of 25 minutes and break length of 5 minutes. The session and break lengths can be changed using the counters included. The timer counts down the session to 0 then switches to break and counts down to repeat. The timer can be paused and played. There is also a refresh button that refreshes the session and break lengths back to default.`,
        problems_learned: [
          {id: 'time p1', str: 'The most difficult challenge was synchronizing the counters states to the timer.'},
          {id: 'time p2', str: 'Time calculations also posed a bit of a challenge due to conversion factors and synchronization'},
          {id: 'time p3', str: 'Edge cases were much more prominent with errors than other projects'},
        ]
      },
      {
        id: 'calc',
        name: 'Calculator',
        github: "https://github.com/rhoq001/calculator",
        demo: 'https://rhoq001.github.io/calculator/',
        img: IMG6,
        about: [
          {id: 'time a1', str: 'Basic Web Application for a Calculator'},
          {id: 'time a2', str: 'Developed using ReactJS, HTML5, and Bootstrap CSS'},
          {id: 'time a3', str: 'Hosted on Github Pages'},
          {id: 'time a4', str: 'Uses react-bootstrap library for components'},
          {id: 'time a5', str: 'functions with negative numbers as well'},
        ],
        how_works: `This basic calculator will take user input like any other basic calculator and do basic arithmetic like addition, subtraction, multiplication, and division with positive or negative decimal numbers. The AC button clears the calculator screen. `,
        problems_learned: [
          {id: 'time p1', str: 'The most difficult challenge was converting the number to a string to be displayable on screen'},
          {id: 'time p2', str: 'Dealing with negative numbers then posed a larger challenge with string input.'},
          {id: 'time p3', str: 'This can be further scaled up with the button infrastructure built.'},
        ]
      },
      {
        id: 'drum',
        name: 'Drum Machine',
        github: "https://github.com/rhoq001/drum-machine",
        demo: 'https://rhoq001.github.io/drum-machine/',
        img: IMG7  ,
        about: [
          {id: 'time a1', str: 'Basic Web Application for a Drum Machine'},
          {id: 'time a2', str: 'Developed using ReactJS, HTML5, and Bootstrap CSS'},
          {id: 'time a3', str: 'Hosted on Github Pages'},
          {id: 'time a4', str: 'Uses react-bootstrap library for components'},
          {id: 'time a5', str: 'keyboard inputs will work with corresponding buttons'},
        ],
        how_works: `This basic drum machine plays different notes and beats based on the corresponding buttons. Volume can be changed with the counter included. Keyboard inputs will play the corresponding buttons (e.g. 'A' plays 'A' button)`,
        problems_learned: [
          {id: 'time p1', str: 'Having the keyboard inputs work properly with the buttons was the most difficult challenge'},
          {id: 'time p2', str: 'This can be further scaled up to have more button inputs and notes.'},
          {id: 'time p3', str: 'Event listeners can act buggy when first loading the page'},
        ]
      },
      {
        id: 'mark',
        name: 'HTML Markup Converter',
        github: "https://github.com/rhoq001/mock-markup",
        demo: 'https://rhoq001.github.io/mock-markup/',
        img: IMG8,
        about: [
          {id: 'time a1', str: 'Basic Web Application for an HTML Mock Markup converter'},
          {id: 'time a2', str: 'Developed using ReactJS, HTML5, and Bootstrap CSS'},
          {id: 'time a3', str: 'Hosted on Github Pages'},
          {id: 'time a4', str: 'Uses react-bootstrap library for components'},
          {id: 'time a5', str: 'Prints out basic text as well as HTML'},
        ],
        how_works: `Writing in the editing box will show how the text would look in HTML Markup language in the preview box. The editing box initializes with HTML in it to show an introducction in the preview box.`,
        problems_learned: [
          {id: 'time p1', str: 'Designing a way for a large amount of text to fit in each container was the most challenging task.'},
          {id: 'time p2', str: 'Designing the layout of this was the most enjoyable task'},
        ]
      },
      {
        id: 'shadowman',
        name: 'Video Game in Unity',
        github: "https://github.com/rhoq001/Shadow-Man",
        demo: '',
        img: IMG4,
        about: [
          {id: 'sh a1', str: 'Operates on two microcontrollers to function on two circuit boards'},
          {id: 'sh a2', str: 'Developed using C'},
          {id: 'sh a3', str: 'Displayed on LED Matrices'},
          {id: 'sh a4', str: 'Implements score and music using circuit components'},
          {id: 'sh a5', str: 'Movement and controls are interfaced with an anolog stick per player'},
        ],
        how_works: `This is a collaborative group project to develop a beat-em-up video game in Unity and C#. Animations, Game mechanics, Music, World Design were all implemented by different members of the team.`,
        problems_learned: [
          {id: 'sh p1', str: 'Animations were the most enjoyable challenge'},
          {id: 'sh p2', str: 'Collision detection was the most difficult challenge'},
        ]
      }
    ],
    contacts: {
      address: 'North Hollywood, CA',
      phone: '(818) 929-1996',
      email: 'raqtanhoq@gmail.com',
      linkedin: 'https://www.linkedin.com/in/raqtan-hoq-692264173/',
    }
}

export default RESUME