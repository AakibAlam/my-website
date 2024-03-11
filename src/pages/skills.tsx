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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="flex flex-wrap justify-around">
              <TechCard text="C/C++" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="Python" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="JavaScript" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="TypeScript" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="Java" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="Golang" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="HTML" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="CSS" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="SQL" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="R" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="Latex" />
            </div>
            <div className="flex flex-wrap justify-around">
              <TechCard text="Matlab" />
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
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="STL" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Springboot" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="React" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Nextjs" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Redux" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Nodejs" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Expressjs" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Vite" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Bootstrap" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Tailwindcss" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Flask" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Django" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Numpy" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Pandas" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Selenium" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Matplotlib" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Sklearn" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="MongoDB" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Postgres" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="MySQL" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Git" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Bash" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Postman" />
            </div>
            <div className="flex flex-wrap justify-around lg:mb-4">
              <TechCard text="Azure" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:p-8 mx-auto py-8">
        <h1 className="text-4xl mb-4">Courses</h1>
        <div className="w-full mx-auto"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-wrap justify-around mb-4">
            <CourseCard text="Data Structures & Algorithms" />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <CourseCard text="Database Management System" />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <CourseCard text="Operating System" />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <CourseCard text="Computer Networking" />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <CourseCard text="Modern Cryptology" />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <CourseCard text="Advanced Algorithms" />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <CourseCard text="Randomized Algorithms" />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <CourseCard text="Probability & Statistics" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
