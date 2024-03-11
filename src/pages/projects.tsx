import Heading from "../components/heading";
import ProjectCard from "../components/project-card";

function Projects() {
  return (
    <div className="bg-slate-100">
      <Heading
        title="My Projects"
        description="Let my projects speak for themselves."
      />
      <div className="lg:p-8 mx-auto mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-2">
          <div className="flex flex-wrap justify-around mb-4">
            <ProjectCard
              img="https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1"
              name="CF-Stress"
              desc="Developed cross-language stress-testing webapp for Codeforces Problemset. Achieved 90% accuracy in generating counter-examples. Implemented JWT for secure authentication. Used MERN stack."
              github="https://github.com/AakibAlam/CF-Stress"
              demo="https://cfstres.azurewebsites.net/"
            />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <ProjectCard
              img="https://media.licdn.com/dms/image/C5612AQGiekFsWZxIHw/article-cover_image-shrink_600_2000/0/1520090372666?e=2147483647&v=beta&t=hJErROHEdQWStKkCj1BrOEugW_sPwTNQhw2DFOlSG5g"
              name="CV-Shortlister"
              desc="Engineered Django-React app for 80% faster resume shortlisting with AI. Utilized Google's generative AI for accurate resume key point extraction. Implemented multi-threading and AJAX polling for improved user experience. Tech Stack: Django, React."
              github="https://github.com/AakibAlam/cv-shortlister-frontend"
              demo="https://parse.cvninja.studio/"
            />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <ProjectCard
              img="https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1"
              name="Codeforces Submission Scraping"
              desc="Created a solution for real-time Codeforces submissions updates from friends with 95% accuracy. Employed web scraping for data retrieval and SendGrid API for email communication. Tech Stack: Python, Selenium."
              github="https://github.com/AakibAlam/codeforces-submission-scraping"
              demo=""
            />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <ProjectCard
              img="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/033/904/datas/original.jpg"
              name="Movie Recommendation System"
              desc="Designed a movie recommendation system based on user input or selected genre. Implemented TF-IDF Vectorizer for embedding and Cosine Similarity for accuracy. Tech Stack: Flask, MongoDB."
              github="https://github.com/AakibAlam/movie-recommender-system"
              demo="https://cineema.azurewebsites.net/"
            />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <ProjectCard
              img="https://herobot.app/wp-content/uploads/2022/11/11-Reasons-Why-A-Chat-Application-Is-Great-For-Business_1.jpg"
              name="Chat Application"
              desc="Developed a real-time chat app using React, Node.js, and Socket.IO. Users can effortlessly create or join rooms, fostering seamless communication through event handling and broadcasting within the application."
              github="https://github.com/AakibAlam/chat-application"
              demo=""
            />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <ProjectCard
              img="https://cdn.educba.com/academy/wp-content/uploads/2019/08/Cryptosystems.jpg"
              name="Breaking Cryptosystem"
              desc="Developed cipher algorithms (DES, AES, SHA3) in C++, identified vulnerabilities to uncover hidden keys. Conducted cryptanalysis on various ciphers, including DES, EAEAE, and RSA with a low public exponent, employing Coppersmith's LLL-based attack."
              github="https://github.com/AakibAlam/breaking-cryptosystems"
              demo=""
            />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <ProjectCard
              img="https://miro.medium.com/v2/resize:fit:1200/1*0DEK_ouEZZz4_MMdhKE_Wg.png"
              name="Connecting the First Search"
              desc="Mastered graph algorithms (DFS/BFS), explored shortest paths (Dijkstra, Bellman-Ford, Floyd Warshall), implemented 2-SAT, and studied disjoint set union, path compression, and minimum spanning tree algorithms(Kruskal, Prim)"
              github="https://github.com/AakibAlam/connecting_the_first_search"
              demo=""
            />
          </div>
          <div className="flex flex-wrap justify-around mb-4">
            <ProjectCard
              img="https://miro.medium.com/v2/resize:fit:900/0*TDgnPm06sS0np--2.jpg"
              name="Demistifying Algorithms"
              desc="Mastered essential Data Structures and Algorithms for Competitive Programming, including Sieve of Eratosthenes and its variations. Acquired skills in Segment Tree, Binary Indexed Tree (Fenwick Tree), Square Root Decomposition, and MO's Algorithm."
              github="https://github.com/AakibAlam/Demistifying_Algorithm"
              demo=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
