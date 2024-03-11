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
          <div className="flex flex-wrap justify-around mb-4">
            <TechCard text="C/C++" />
            <TechCard text="Python" />
            <TechCard text="JavaScript" />
            <TechCard text="TypeScript" />
            <TechCard text="Java" />
            <TechCard text="Golang" />
            <TechCard text="HTML" />
            <TechCard text="CSS" />
            <TechCard text="SQL" />
            <TechCard text="R" />
            <TechCard text="Latex" />
            <TechCard text="Matlab" />
          </div>
          <div className="flex flex-col justify-end items-end mb-4 pr-2">
            <a href="https://wakatime.com/@018d2cdb-70bd-41bb-81e3-9cc9c1d1b558">
              <img
                src="https://wakatime.com/badge/user/018d2cdb-70bd-41bb-81e3-9cc9c1d1b558.svg"
                alt="Total time coded since Jan 21 2024"
                className="w-48 h-6"
              />
            </a>
            <img
              src="https://github-readme-stats.vercel.app/api/wakatime?username=sultan__&layout=compact"
              className="w-3/4 min-w-96"
            />
          </div>
        </div>
      </div>

      <div className="lg:p-8 mx-auto py-8">
        <h1 className="text-4xl mb-4">Frameworks</h1>
        <div className="flex flex-wrap justify-around mx-auto mb-4 w-3/4 min-w-96">
          <TechCard text="STL" />
          <TechCard text="Springboot" />
          <TechCard text="React" />
          <TechCard text="Nextjs" />
          <TechCard text="Redux" />
          <TechCard text="Nodejs" />
          <TechCard text="Expressjs" />
          <TechCard text="Vite" />
          <TechCard text="Bootstrap" />
          <TechCard text="Tailwindcss" />
          <TechCard text="Flask" />
          <TechCard text="Django" />
          <TechCard text="Numpy" />
          <TechCard text="Pandas" />
          <TechCard text="Selenium" />
          <TechCard text="Matplotlib" />
          <TechCard text="Sklearn" />
          <TechCard text="MongoDB" />
          <TechCard text="Postgres" />
          <TechCard text="MySQL" />
          <TechCard text="Git" />
          <TechCard text="Bash" />
          <TechCard text="Postman" />
          <TechCard text="Azure" />
        </div>
      </div>

      <div className="lg:p-8 mx-auto py-8">
        <h1 className="text-4xl mb-4">Courses</h1>
        <div className="flex flex-wrap justify-around mx-auto mb-4 w-full min-w-96">
          <CourseCard text="Data Structures & Algorithms" />
          <CourseCard text="Database Management System" />
          <CourseCard text="Operating System" />
          <CourseCard text="Computer Networking" />
          <CourseCard text="Modern Cryptology" />
          <CourseCard text="Advanced Algorithms" />
          <CourseCard text="Randomized Algorithms" />
          <CourseCard text="Probability & Statistics" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
