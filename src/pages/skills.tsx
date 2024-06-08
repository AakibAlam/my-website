import Heading from "../components/heading";
import TechCard from "../components/tech-card";
import CourseCard from "../components/course-card";

function Skills() {
  return (
    <div className="bg-slate-100">
      <Heading
        title="SKILLS"
        description="Skills are the building blocks of success; here's a glimpse of what I bring to the table."
      />
      <div className="lg:p-8 mx-auto my-8">
        <h1 className="text-4xl mb-4">Languages</h1>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-3 lg:grid-cols-3 lg:gap-2">
            <div className="flex flex-wrap justify-around">
              <TechCard text="C/C++" col="lime" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="Solidity" col="lime" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="TypeScript" col="lime" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="Python" col="lime" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="JavaScript" col="lime" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="Java" col="lime" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="HTML" col="lime" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="CSS" col="lime" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="SQL" col="lime" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="R" col="lime" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="Latex" col="lime" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="Matlab" col="lime" />
            </div>
          </div>
          <div className="flex flex-col justify-end items-end mb-4 px-2">
            <a href="https://wakatime.com/@018d2cdb-70bd-41bb-81e3-9cc9c1d1b558">
              <img
                src="https://wakatime.com/badge/user/018d2cdb-70bd-41bb-81e3-9cc9c1d1b558.svg"
                alt="Total time coded since Jan 21 2024"
                className="w-full h-6"
              />
            </a>
            <img
              src="https://github-readme-stats.vercel.app/api/wakatime?username=sultan__&layout=compact"
              className="w-full lg:w-3/4"
            />
          </div>
        </div>
      </div>

      <div className="lg:p-8 mx-auto py-8">
        <h1 className="text-4xl mb-4">Frameworks</h1>
        <div className="lg:w-3/4 mx-auto">
          <div className="grid grid-cols-3 lg:grid-cols-6 lg:gap-2">
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="STL" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Springboot" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="React" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Hardhat" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Foundry" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Nextjs" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Redux" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Nodejs" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Expressjs" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Vite" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Bootstrap" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Tailwindcss" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Flask" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Django" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Numpy" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Pandas" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Selenium" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Matplotlib" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Sklearn" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="MongoDB" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Postgres" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="MySQL" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Git" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Bash" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Postman" col="teal" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Azure" col="teal" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:p-8 mx-auto py-8">
        <h1 className="text-4xl mb-4">Courses</h1>
        <div className="w-full mx-auto"></div>
        <div className="grid grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-wrap justify-around lg:mb-4">
            <CourseCard text="Data Structures & Algorithms" col="cyan" />
          </div>
          <div className="flex flex-wrap justify-around lg:mb-4">
            <CourseCard text="Database Management System" col="cyan" />
          </div>
          <div className="flex flex-wrap justify-around lg:mb-4">
            <CourseCard text="Operating System" col="cyan" />
          </div>
          <div className="flex flex-wrap justify-around lg:mb-4">
            <CourseCard text="Computer Networking" col="cyan" />
          </div>
          <div className="flex flex-wrap justify-around lg:mb-4">
            <CourseCard text="Modern Cryptology" col="cyan" />
          </div>
          <div className="flex flex-wrap justify-around lg:mb-4">
            <CourseCard text="Advanced Algorithms" col="cyan" />
          </div>
          <div className="flex flex-wrap justify-around lg:mb-4">
            <CourseCard text="Randomized Algorithms" col="cyan" />
          </div>
          <div className="flex flex-wrap justify-around lg:mb-4">
            <CourseCard text="Probability & Statistics" col="cyan" />
          </div>
          <div className="flex flex-wrap justify-around lg:mb-4">
            <CourseCard text="Decentralized Finance" col="cyan" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
