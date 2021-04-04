import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "C++_skill", content: "C++", porcentage: "80%", value: "80" },
        {
          id: "Qt_skill",
          content: "Qt Technologies",
          porcentage: "30%",
          value: "30",
        },
        {
          id: "Unreal_skill",
          content: "Unreal Engine",
          porcentage: "40%",
          value: "40",
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "80%",
          value: "80",
        },
        { id: "PHP_skill", content: "PHP", porcentage: "50%", value: "50" },
        {
          id: "TypeScript_skill",
          content: "TypeScript",
          porcentage: "70%",
          value: "70",
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "60%",
          value: "60",
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "70%",
          value: "70",
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85",
        },
        {
          id: "Wordpress_skill",
          content: "Java",
          porcentage: "90%",
          value: "90",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I was Graduated from Kamal High School in Mathematics field. Now, I am student of Electrical Engineering (Bachelor's Degree) & Computer Engineering (Minor Degree) in IUST (Iran's University of Science and Technologies). I have been started professional programming two years ago and have been enrolled in many programming courses by Udemy and Coursera.",
        },
        {
          id: "second-p-about",
          content:
            "I love two things in my life first my family and second programming. I am learning everyday about new technologies, programming languages and also  do some sample projects to increase my abilities and skills level in programming. I want to become a legend, because in my opinion just legend can fight and use their abilities in the best way. I have my unique way & learn stuffes that I love. ",
        },
        {
          id: "third-p-about",
          content:
            "I interested in Game, Web, Mobile and Desktop Application Development. I love Java and everything that associated with it. Also I love computer games such as Cyberpunk 2077. I love Linux and other Unix or Unix-like Operating Systems such as Android, BSD, Solaris. Linus Torvalds says: Talk is cheap. Show me the Code.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
