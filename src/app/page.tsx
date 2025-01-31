import Image from "next/image";
import Devider from "@/components/devider";
import { FaFacebook, FaGithub, FaGraduationCap, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto mt-5 sm:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2">
            <div className="p-3 sm:p-10 text-center sm:text-left">
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-lg sm:text-4xl font-extrabold">
                Hello, I am
              </h2>
              <h1 className="text-2xl sm:text-5xl mt-3 sm:mt-5 text-slate-700 font-extrabold">
                Ronit Mahalanobish
              </h1>
              <p className="mt-5 text-sm text-stone-500">
                a passionate and driven Full Stack Developer and Software Engineer with a strong background in building scalable and efficient web applications.
                With expertise in both front-end and back-end technologies,
                I bring a holistic approach to software development,
                ensuring that every project I work on is not only functional but also user-friendly and performant.
              </p>
              <div className="mt-10 sm:mt-10 flex justify-between w-[50%] mx-auto sm:mx-0">
                {/* GitHub Icon */}
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                  <FaGithub size={25} />
                </a>
                {/* Linkedin Icon */}
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                  <FaLinkedin size={25} />
                </a>
                {/* Facebook Icon */}
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                  <FaFacebook size={25} />
                </a>
                {/* Twitter Icon */}
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                  <FaTwitter size={25} />
                </a>
              </div>
            </div>
            <div className="relative flex justify-center sm:justify-end mt-5 sm:mt-0">
              {/* Tilted cards behind the image */}
              <div className="absolute inset-0 flex justify-center sm:justify-end items-center">
                <div className="bg-amber-600 shadow-lg rounded-lg w-[300px] h-full transform rotate-3"></div>
              </div>
              <div className="absolute inset-0 flex justify-center sm:justify-end items-center">
                <div className="bg-amber-500 shadow-lg rounded-lg w-[300px] h-full transform rotate-2"></div>
              </div>
              {/* Main image */}
              <Image
                className="relative rounded-lg border-4 border-white shadow-lg"
                src="/profile.jpg"
                alt="Picture of the author"
                width={300}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
      <Devider />
      {/* Abiut me */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto mt-5 sm:mt-20">
          <h1 className="text-center text-2xl sm:text-5xl mt-3 sm:mt-5 text-slate-600 font-extrabold">About Me</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2">
            <div className="p-3 sm:p-10 text-center sm:text-left">
              <p className="mt-10 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ullam quam cumque vero illum quisquam, modi aperiam iure assumenda commodi consequatur vitae maxime optio nobis voluptatibus! Explicabo earum error soluta?
              </p>
              <Image
                className="mx-auto sm:mx-0 mt-3"
                src="/mern.png"
                alt="MERN"
                width={100}
                height={100}
              />
              <div className="my-5">
                <button className="relative inline-block px-3 py-2 rounded-lg border-2 border-current text-black font-semibold text-lg transition-all duration-300 ease-in-out hover:text-white hover:bg-black hover:scale-105 me-5">
                  Download CV
                </button>
                <button className="relative inline-flex items-center px-4 py-2 rounded-lg border-2 border-current text-black font-semibold text-lg transition-all duration-300 ease-in-out hover:text-white hover:bg-black hover:scale-105">
                  Contact Me
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone ml-2" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                </button>

              </div>
            </div>
            <div className="flex justify-center">
              <Image
                className="mx-auto sm:mx-0 mt-3"
                src="/about.png"
                alt="MERN"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 p-5">
        <div className="container mx-auto mt-5 sm:mt-20">
          <h1 className="text-center text-2xl sm:text-5xl mt-3 sm:mt-5 text-slate-600 font-extrabold">Education</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2">
            <div className="p-3 sm:p-10 text-center sm:text-left">
              <div className="relative px-3 py-2 rounded-lg text-black font-semibold text-lg transition-all duration-300 ease-in-out hover:text-white hover:bg-black hover:scale-105 me-5 flex justify-start items-center bg-slate-100 mb-5">
                <FaGraduationCap size={40} />
                <span className="ms-3">Class X from WBBSE</span>
              </div>
              <div className="relative px-3 py-2 rounded-lg text-black font-semibold text-lg transition-all duration-300 ease-in-out hover:text-white hover:bg-black hover:scale-105 me-5 flex justify-start items-center bg-slate-100 mb-5">
                <FaGraduationCap size={40} />
                <span className="ms-3">Class XII from WBCHSE</span>
              </div>
              <div className="relative px-3 py-2 rounded-lg text-black font-semibold text-lg transition-all duration-300 ease-in-out hover:text-white hover:bg-black hover:scale-105 me-5 flex justify-start items-center bg-slate-100 mb-5">
                <FaGraduationCap size={40} />
                <span className="ms-3">Graduation from University Of Calcutta</span>
              </div>
              <div className="relative px-3 py-2 rounded-lg text-black font-semibold text-lg transition-all duration-300 ease-in-out hover:text-white hover:bg-black hover:scale-105 me-5 flex justify-start items-center bg-slate-100 mb-5">
                <FaGraduationCap size={40} />
                <span className="ms-3">MCA from Jain University</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                className="mx-auto sm:mx-0 mt-3"
                src="/education.png"
                alt="MERN"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}