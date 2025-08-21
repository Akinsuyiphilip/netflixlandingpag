import React from "react";

const Emailpage = () => {
  return (
    <>
      <div>
        <p className="text-base md:text-lg text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 pt-4 px-4">
          <input
            type="email"
            name="Email"
            minLength={5}
            maxLength={50}
            placeholder="Email"
            className="w-full md:w-96 h-12 md:h-14 border-gray-400 border p-4 bg-black/50 outline-none rounded-sm text-base md:text-xl"
          />
          <button className="h-12 md:h-14 w-full md:w-48 flex items-center justify-center gap-2 md:gap-4 p-4 bg-[#e50914] text-white rounded-sm">
            <span className="text-base md:text-xl font-medium">
              Get Started
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 md:h-6 md:w-6 text-white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Emailpage;
