import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto mt-5 sm:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2">
          <div className="p-3 sm:p-10 text-center sm:text-left">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-lg sm:text-4xl">
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
            <div className="mt-10 sm:mt-16 flex justify-between w-[50%] mx-auto sm:mx-0">
              {/* GitHub Icon */}
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.006.403 2.289-1.553 3.295-1.23 3.295-1.23.655 1.653.243 2.874.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.807 5.623-5.48 5.921.43.371.823 1.102.823 2.222v3.293c0 .321.217.694.825.576 4.765-1.589 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .732.593 1.324 1.325 1.324h11.495v-9.294h-3.123v-3.622h3.123v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.241l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.311h3.588l-.467 3.622h-3.121v9.293h6.116c.73 0 1.324-.593 1.324-1.324v-21.35c0-.732-.594-1.325-1.325-1.325z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.344 3.608 1.32.976.975 1.258 2.242 1.32 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.062 1.366-.344 2.633-1.32 3.608-.975.976-2.242 1.258-3.608 1.32-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.069c-1.366-.062-2.633-.344-3.608-1.32-.976-.975-1.258-2.242-1.32-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.069-4.849c.062-1.366.344-2.633 1.32-3.608.975-.976 2.242-1.258 3.608-1.32 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-1.635.07-3.1.474-4.252 1.626-1.153 1.153-1.557 2.617-1.626 4.252-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.07 1.635.474 3.1 1.626 4.252 1.153 1.153 2.617 1.557 4.252 1.626 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.635-.07 3.1-.474 4.252-1.626 1.153-1.153 1.557-2.617 1.626-4.252.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.635-.474-3.1-1.626-4.252-1.153-1.153-2.617-1.557-4.252-1.626-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.758-6.162 6.162s2.758 6.162 6.162 6.162 6.162-2.758 6.162-6.162-2.758-6.162-6.162-6.162zm0 10.148c-2.196 0-3.986-1.79-3.986-3.986s1.79-3.986 3.986-3.986 3.986 1.79 3.986 3.986-1.79 3.986-3.986 3.986zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
              </a>

              {/* Facebook Icon */}
              <a href="https://www.facebook.com/your-username" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M14.59 7.41L16 6l6 6-6 6-1.41-1.41L18.17 12l-3.58-3.59zM9.41 16.59L8 18l-6-6 6-6 1.41 1.41L5.83 12l3.58 3.59z" />
                </svg>
              </a>

              {/* Linkedin Icon */}
              <a href="https://www.facebook.com/your-username" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.08 20.45H3.56V9H7.1v11.45zM5.32 7.5c-1.14 0-2.06-.93-2.06-2.08 0-1.15.92-2.08 2.06-2.08 1.14 0 2.06.93 2.06 2.08 0 1.15-.93 2.08-2.06 2.08zm15.13 12.95h-3.53V14.3c0-1.47-.53-2.47-1.85-2.47-.96 0-1.53.65-1.78 1.28-.09.22-.11.52-.11.82v6.52H9.65V9h3.39v1.57c.45-.7 1.26-1.69 3.08-1.69 2.25 0 3.93 1.46 3.93 4.6v6.97z" />
                </svg>
              </a>
            </div>

          </div>
          <div className="relative flex justify-center sm:justify-end mt-5 sm:mt-0">
            {/* Tilted cards behind the image */}
            <div className="absolute inset-0 flex justify-center sm:justify-end items-center">
              <div className="bg-amber-500 shadow-lg rounded-lg w-[300px] h-full transform rotate-6"></div>
            </div>
            <div className="absolute inset-0 flex justify-center sm:justify-end items-center">
              <div className="bg-orange-300 shadow-lg rounded-lg w-[300px] h-full transform rotate-3"></div>
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

  );
}