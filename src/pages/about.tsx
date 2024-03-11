import Heading from "../components/heading";
import ImgCard from "../components/img-card";
import AchievementCard from "../components/achievement";

function About() {
  return (
    <div className="bg-slate-100">
      <Heading
        title="ABOUT ME"
        description="A glimpse into the journey that shapes my work."
      />
      <div className="lg:p-4 mx-auto mt-12">
        <div className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="lg:col-span-1 pl-4 mb-4">
            <h1 className="text-3xl text-left text-teal-600">
              Work Experience
            </h1>
          </div>
          <div className="lg:col-span-2 p-8 flex flex-wrap justify-between items-center bg-neutral-200 rounded-lg">
            <h1 className="text-left text-blue-500 text-base lg:text-4xl pb-3">
              Software Engineer | Yubi
            </h1>
            <h1 className="text-right text-blue-500 text-base lg:text-4xl pb-3">
              May'23-July'23
            </h1>
            <p className="lg:col-span-2 text-sm lg:text-xl text-justify italic">
              I collaborated with the platform team to design and implement an
              RBAC (Role-Based Access Control), improving access control and
              security measures, utilizing the Spring Boot framework and
              PostgreSQL.
              <ul className="mt-2">
                <li>
                  - Established efficient relationships among key entities,
                  resulting in a 30% increase in data retrieval speed
                </li>
                <li>- Developed 15+ APIs for client-server communication</li>
                <li>
                  - Rigorous testing boosted reliability, 95% coverage, 20%
                  faster bug fixes
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="pl-4 mb-8">
            <h1 className="text-3xl text-left text-teal-600">
              Competitive Programming
            </h1>
          </div>
          <div className="flex flex-wrap justify-around mb-8">
            <ImgCard
              img="https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1"
              header=""
              desc="Ranked among the top 300 Indians on Codeforces, with over 800 problems solved and participated in more than 100 contests. Attained the esteemed rank of Candidate Master."
              profile="https://codeforces.com/profile/sultan__"
            />
          </div>
          <div className="flex flex-wrap justify-around mb-8">
            <ImgCard
              img="https://files.virgool.io/upload/users/1658997/posts/sop54h8bn19n/vof2srvqxniw.png"
              header=""
              desc="Ranked within the top 0.5% of Indian coders on CodeChef, with over 100 problems solved and participation in 25+ contests. Earned a 5-star rating, showcasing proficiency and dedication in coding."
              profile="https://www.codechef.com/users/temp0rary"
            />
          </div>
          <div className="flex fles-wrap justify-around mb-8"></div>
          <div className="flex flex-wrap justify-around mb-8">
            <ImgCard
              img="https://leetcode.com/static/images/LeetCode_Sharing.png"
              header=""
              desc="Occasionally tackle problems on LeetCode, finding their complexity and variety intriguing. While not consistent, I enjoy the challenge and find the problems intellectually stimulating."
              profile="https://leetcode.com/sultan__/"
            />
          </div>
        </div>

        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="pl-4 mb-8">
            <h1 className="text-3xl text-left text-teal-600">
              Extra-Curriculars
            </h1>
          </div>
          <div className="flex flex-wrap justify-around mb-8">
            <ImgCard
              img="https://static.vecteezy.com/system/resources/thumbnails/008/630/706/small_2x/taekwondo-kick-pose-and-technique-vector.jpg"
              header="TAEKWONDO"
              desc="Committed to regular Taekwondo practice, currently holding a blue belt rank. Dedicated to mastering the art and pursuing continuous improvement in skills and discipline."
              profile=""
            />
          </div>
          <div className="flex flex-wrap justify-around mb-8">
            <ImgCard
              img="https://wallpapers.com/images/featured/guitar-vtvn8855v2zafbtj.jpg"
              header="GUITARIST"
              desc="Passionate about playing guitar in my free time, continuously learning and honing my skills. Embracing the journey of music, striving for growth and expression through the strings."
              profile=""
            />
          </div>
          <div className="flex fles-wrap justify-around"></div>
          <div className="flex flex-wrap justify-around mb-4">
            <ImgCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dNNF7fpM4eyXJto5sBHA4Bt6x6rrxf_uDA&usqp=CAU"
              header="Sports"
              desc="A passionate sports enthusiast, I've played a variety of sports, valuing their impact on teamwork, mental agility, and physical health. Sports are more than just a hobby; they're a holistic lifestyle."
              profile=""
            />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <ImgCard
              img="https://www.knowafest.com/files/uploads/Udghosh-2022-sports-fest.jpeg"
              header="UDGHOSH'22"
              desc="Served as Senior Executive in Udghosh'22 Events Team, leading coordination efforts for various events with a team of 20 members."
              profile=""
            />
          </div>
        </div>

        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="pl-4 mb-8">
            <h1 className="text-3xl text-left text-teal-600">Achievements</h1>
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <AchievementCard
              header="INTER-IIT CP Contest"
              desc="Achieved 2nd rank in IIT Kanpur and 22nd rank across all IITs in the Inter-IIT CP Contest hosted by IIT Gandhinagar on CodeChef in oct'21."
            />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <AchievementCard
              header="Techweek-IITK"
              desc="Secured 1st position in the Techweek technical event organized by Science & Technology Council, IIT Kanpur, competing with 100+ teams. Our team of 6 excelled in programming, robot designing, finance, and more."
            />
          </div>
          <div className="flex flex-wrap justify-around"></div>
          <div className="flex flex-wrap justify-around mb-4">
            <AchievementCard
              header="UDGHOSH'23"
              desc="Won a bronze medal in the Poomsae event at Udshosh'23, showcasing dedication and skill in Taekwondo."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
