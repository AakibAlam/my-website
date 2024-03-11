import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const VITE_MY_EMAIL = "mdaakibalamansari@gmail.com";
const VITE_YOUR_SERVICE_ID = "service_8eone23";
const VITE_YOUR_TEMPLATE_ID = "template_n6em5j4";
const VITE_YOUR_USER_ID = "XWS6sYiSqGxHPeZ_n";

function Footer() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_email: inputValue.name,
      from_name: inputValue.email,
      to_name: VITE_MY_EMAIL,
      message: inputValue.message,
    };

    console.log(templateParams);

    try {
      await emailjs.send(
        VITE_YOUR_SERVICE_ID,
        VITE_YOUR_TEMPLATE_ID,
        templateParams,
        VITE_YOUR_USER_ID
      );
      console.log("Email sent successfully!");
      setInputValue({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="bg-black text-white py-8">
      <div className="w-11/12 min-w-96 container flex flex-col sm:flex-row justify-center mb-12">
        <div className="w-full sm:w-1/3 flex flex-col items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
            Contact Me:
          </h1>
        </div>
        <div className="w-full lg:w-2/3 lg:pl-40 flex flex-col items-end">
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleOnChange}
              value={inputValue.name}
              placeholder="Your Name"
              className="w-1/3 h-12 mb-4 mr-6 bg-gray-700 text-white border border-gray-600 rounded-sm text-center"
            />
            <input
              type="email"
              name="email"
              onChange={handleOnChange}
              value={inputValue.email}
              placeholder="Your Email"
              className="w-7/12 h-12 mb-4 bg-gray-700 text-white border border-gray-600 rounded-sm text-center"
            />
            <textarea
              name="message"
              onChange={handleOnChange}
              value={inputValue.message}
              className="w-full h-32 bg-gray-700 text-white border border-gray-600 rounded-lg p-4 mb-4"
              placeholder="Enter your message..."
            ></textarea>
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-20 bg-sky-300 text-white py-2 px-4 rounded-lg hover:bg-purple-700 self-end"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center gap-12 mt-8">
        <a
          href="https://github.com/AakibAlam"
          className="text-purple-400 text-4xl hover:text-purple-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aakib-alam"
          className="text-purple-400 text-4xl hover:text-purple-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/aakib_alam20"
          className="text-purple-400 text-4xl hover:text-purple-600"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:mdaakibalamansari@gmail.com"
          className="text-purple-400 text-4xl hover:text-purple-600"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default Footer;
