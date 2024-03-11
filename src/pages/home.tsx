import About from "../components/about";
import Heading from "../components/intro-heading";

function Home() {
  return (
    <div>
      <Heading
        name="I'm Md Aakib Alam Ansari"
        description={[
          "- Software Developer",
          "- Open Source Contributor",
          "- Competitive Programmer",
          "- Tech Enthusiast",
        ]}
      ></Heading>
      <About></About>
    </div>
  );
}

export default Home;
