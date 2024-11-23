import BudgetBuddy from "../assets/images/budget-buddy.png";
import Lsg from "../assets/images/lsg.png";

function Projects() {
  return (
    <>
      <section
        id="projects"
        className="flex flex-col items-center justify-center min-h-[100vh] p-4"
      >
        <p className="text-lg text-gray-600">Browse My Recent</p>
        <h1 className="text-4xl mb-5">Projects</h1>

        <section className="text-center grid lg:grid-cols-3 gap-4">
          <div className="border-2 border-gray-600 rounded-[1.5rem] p-8">
            <img
              src={Lsg}
              alt="a recruitment company website"
              className="w-[20rem]"
            />
            <h2 className="text-2xl my-4">Recruitment Company</h2>
            <a
              className="border-2 border-gray-600 rounded-[2rem] px-5 py-3 hover:text-white hover:bg-black"
              href="https://lsgconsultinggroup.com/"
              target="_blank"
            >
              View Site
            </a>
          </div>
          <div className="border-2 border-gray-600 rounded-[1.5rem] p-8">
            <img
              src={BudgetBuddy}
              alt="screenshot of a finance tracking website"
              className="w-[20rem]"
            />
            <h2 className="text-2xl my-4">Finance Tracker</h2>
            <a
              className="border-2 border-gray-600 rounded-[2rem] px-5 py-3 mr-4 hover:text-white hover:bg-black"
              href="https://github.com/feranmiWebWizard/Budget-Buddy"
              target="_blank"
            >
              Github
            </a>
            <a
              className="border-2 border-gray-600 rounded-[2rem] px-5 py-3 hover:text-white hover:bg-black"
              href="https://cactus-budget-buddy.netlify.app/"
              target="_blank"
            >
              View Site
            </a>
          </div>
          <div className="border-2 border-gray-600 rounded-[1.5rem] p-8">
            <img src="" alt="" />
            <h2 className="text-2xl my-3">Witty Bakehouse</h2>
            <button className="border-2 border-gray-600 rounded-[2rem] px-5 py-2 mr-4 hover:text-white hover:bg-black">
              Github
            </button>
            <button className="border-2 border-gray-600 rounded-[2rem] px-5 py-2 hover:text-white hover:bg-black">
              View Site
            </button>
          </div>
        </section>
      </section>
    </>
  );
}

export default Projects;
