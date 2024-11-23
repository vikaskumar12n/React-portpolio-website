function Contact() {
  return (
    <div
      id="contact"
      className="text-center flex flex-col items-center justify-center min-h-[100vh] px-4"
    >
      <section className="mt-auto">
        <h2 className="text-lg">Get in Touch</h2>
        <h1 className="text-4xl mb-5">Contact Me</h1>
      </section>
      <div className="md:text-lg border-2 border-gray-700 rounded-[1.5rem] flex gap-4 md:gap-6 px-4 md:px-10 py-4">
        <a className="flex gap-2" href="mailto:vvikaskumar393@gmail.com">
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
            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
          </svg>
          vvikaskumar393@gmail.com
        </a>
        <a className="flex gap-2" href="https://www.linkedin.com/in/vikas-bind-2147912a3/" target="_blank">
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
            <circle cx="4.983" cy="5.009" r="2.188"></circle>
            <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
          </svg>
          LinkedIn
        </a>
      </div>

      <section className="mt-auto">
        <ul className="text-xl flex gap-4">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <p className="mt-8 py-4">
          Copyright @. All Rights Reserved
        </p>
      </section>
    </div>
  );
}

export default Contact;
