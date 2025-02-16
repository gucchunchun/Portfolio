export default {
  index: {
    hero: {
      title: "Hello, I'm Yuna",
      subtitle:
        "I am a web system engineer with one year of experience, focusing on building and optimizing web applications. I'm currently exploring ways to improve my skills and expand my knowledge in various areas of web development.",
    },
    about: {
      title: "About me",
      tagline: "Who is Gucchunchun?",
      content: {
        intro: "Hi, I am Yuna, a Japanese Web Developer.",
        paragraphs: [
          "I am working as a web system engineer with a solid foundation in both backend and frontend web development.",
          "I have experience working with technologies like PHP, TypeScript, JavaScript to build scalable and efficient web applications.",
          "Currently, I am expanding my skill set by learning React Native to dive into mobile app development. I enjoy taking on new challenges and continuously improving my abilities to create seamless user experiences across platforms."
        ]
      }
    },
    work: {
      title: "Work experience",
      content: {
        intro: "Hi, I am Yuna, a Japanese Web Developer.",
        experiences: [
          {
            title: "Junior Web Developer",
            place: "Buzzestry Co. , Tokyo",
            year: {
              from: 2024
            },
            description: [
              "Working as an SES engineer. Collaborated with cross-functional teams to implement backend and frontend solutions for seamless user experiences. ",
              "In Addition to my technical role, I assist in translating and facilitating meetings as a bridge software engineer, supporting the company's expansion efforts abroad. "
            ]
          }
        ]
      }
    },
    education :{
      title: "Education",
      content: {
        intro: "Hi, I am Yuna, a Japanese Web Developer.",
        experiences: [
          {
            title: "Self-Taught Web Development",
            description: [
              "Acquired comprehensive knowledge in web development through online courses, tutorials, and hands-on projects",
            ],
            year: {
              from: 2023
            }
          },
          {
            title: "Waseda University - Department of English Literature",
            description: [
              "Majored in British Literature. ",
              "Additionally, took courses in statistics using Python and JavaScript, which sparked my interest in programming.",
            ],
            year: {
              "from": 2019,
              "to": 2023
            }
          }
        ]
      }
    },
    project: {
      title: "Projects",
      tagline: "See my Creation!",
    },    
  }

} as const;
