function About() {
  return (
    <div id="about" className="flex flex-col justify-center min-h-[100vh]">
      <section className="flex flex-col items-center gap-4 mb-10">
        <p className="text-lg">Get To Know More</p>
        <h1 className="text-4xl">About Me</h1>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="text-center border-2 border-gray-600 rounded-[1.5rem] flex flex-col items-center w-[18rem] p-5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{
                fill: "rgba(0, 0, 0, 1)",
                transform: "",
                msFilter: "",
              }}
            >
              <path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z"></path>
            </svg>
          </span>
          <h2 className="font-bold text-lg">Experience</h2>
          <p>
            1+ years <br /> Mern Stack Developer <br />
            Full stack Web Development
          </p>
        </div>
        <div className="text-center border-2 border-gray-600 rounded-[1.5rem] flex flex-col items-center w-[18rem] p-5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{
                fill: "rgba(0, 0, 0, 1)",
                transform: "",
                msFilter: "",
              }}
            >
              <path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm1.5 1H8c-3.309 0-6 2.691-6 6v1h15v-1c0-3.309-2.691-6-6-6z"></path>
              <path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path>
            </svg>
          </span>
          <h2 className="font-bold text-lg">Education</h2>
          <p>Mullenioum group of institutation B-Tech Computer Science</p>
        </div>
      </section>

      <section className="max-w-[40rem] mx-auto mt-10 p-4">
        <p>
        A skilled and dedicated MERN Stack Developer with experience building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. Adept at managing all stages of the development lifecycle, from concept through deployment. Passionate about delivering high-quality solutions and optimizing user experiences, while always staying up-to-date with emerging technologies
        </p>
      </section>
    </div>
  );
}

export default About;
