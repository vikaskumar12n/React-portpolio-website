import image from "../assets/images/persnal.jpeg";
import pdf from '../assets/images/vikasbind.pdf.pdf'
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <>
      <section
        id="home"
        className="md:flex justify-center items-center gap-10 p-4 min-h-[100vh]"
      >
        <img
          className="md:max-w-[25rem] rounded-[50%]"
          src={image}
          alt="a smiling man"
        />

        <div className="text-center flex flex-col gap-5 pt-4 md:pt-0">
          <div className="text-4xl " style={{fontFamily:'impact'}}>
            <Typewriter
              options={{
                strings: ['Hello, I\'m'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
             <Typewriter
              options={{
                strings: ['Vikas Bind'],
                autoStart: true,
                loop: true,
                            }}
            />
            <Typewriter
              options={{
                strings: ['Mern Stack Developer','React Developer'],
                autoStart: true,
                loop: true,
                            }}
            />
          </div>
          

          <span>
            <button className="border-2 border-black rounded-[2rem] p-4 mr-4 hover:bg-black hover:text-white">
             <a href={pdf}>Download CV</a> 
            </button>
            <a
              href="#contact"
              className="bg-gray-800 text-white border-2 rounded-[2rem] p-4 hover:bg-white hover:text-black"
            >
              Contact Info
            </a>
          </span>
          <span className="flex justify-center">
            <a href="https://github.com/vikaskumar12n" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1)",
                }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-bind-2147912a3//"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1)",
                }}
              >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
              </svg>
            </a>
          </span>
        </div>
      </section>
    </>
  );
}

export default Home;
