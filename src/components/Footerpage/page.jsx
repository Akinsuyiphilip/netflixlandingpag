import React from "react";

const FooterPage = () => {
  return (
    <>
      <section className=" z-20 flex flex-col bg-black w-full">
        <div className="mx-4 md:mx-14 lg:mx-32 my-16 flex flex-col gap-12">
          <a href="#">Questions? Contact us.</a>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            <a href="/">FAQ </a>
            <a href="/">Help Center </a>
            <a href="/">Account </a>
            <a href="/">Media Center </a>
            <a href="/">Investor Relations </a>
            <a href="/">Jobs </a>
            <a href="/">Ways to Watch</a>
            <a href="/"> Terms of Use </a>
            <a href="/"> Privacy </a>
            <a href="/"> Cookie Preferences </a>
            <a href="/"> Corporate Information </a>
            <a href="/">Contact Us </a>
            <a href="/"> Speed Test </a>
            <a href="/">Legal Notices </a>
            <a href="/">Only on Netflix </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterPage;
