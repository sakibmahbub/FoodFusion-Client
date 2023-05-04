import React from "react";
import html2pdf from "html2pdf.js";
import { saveAs } from "file-saver";

const Blog = () => {
  const generatePDF = () => {
    const element = document.getElementById("blog-content");
    const opt = {
      margin: 0.5,
      filename: "blog.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="my-container">
      <div className="flex min-h-screen items-center justify-center my-10  text-gray-900">
        <div id="blog-content" className="flex flex-col  lg:w-2/3 p-6 sm:p-10 ">
          <div className="border-2 border-red-200 shadow-lg rounded p-5 my-5">
            <h3 className="text-2xl font-bold mb-5">
              1. Tell us the differences between uncontrolled and controlled
              components.
            </h3>
            <p className="text-lg">
              Answer : In React, the components can manage their own data or
              they depends on their parent component. Controlled components
              always depend on the parent component to manage their data. On the
              other hand, uncontrolled components manage their own data
            </p>
          </div>
          <div className="border-2 border-red-200 shadow-lg rounded p-5 my-5">
            <h3 className="text-2xl font-bold mb-5">
              2. How to validate React props using PropTypes
            </h3>
            <p className="text-lg">
              Answer : In React PropTypes is a feature which allows developers
              to validate the data that is passed between the components as
              props. It helps to catch error early in the development process.
              It also helps to improve overall quality of the application.
            </p>
          </div>
          <div className="border-2 border-red-200 shadow-lg rounded p-5 my-5">
            <h3 className="text-2xl font-bold mb-5">
              3. Tell us the difference between nodejs and express js.
            </h3>
            <p className="text-lg">
              Answer : Node.js is a tool that helps developers to run JavaScript
              code on the server. Express.js is a set of tools built on top of
              Node.js that make it easier to build web applications. The
              features that Express.js provide allow to build the web
              application more easier way.
            </p>
          </div>
          <div className="border-2 border-red-200 shadow-lg rounded p-5 my-5">
            <h3 className="text-2xl font-bold mb-5">
              4. What is a custom hook, and why will you create a custom hook?
            </h3>
            <p className="text-lg">
              Answer : In React, a custom hook is a reusable piece of code which
              do some specific jobs. The developers make custom hooks to make
              the code more simple and use the same code in different parts of
              your application. Custom hooks can also make the app faster by
              avoiding repeating calculations.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-auto">
        <h1 className="text-2xl lg:text-4xl font-bold mb-3 lg:mb-8 lg:text-left leading-6">
          Download this page
        </h1>
        <button className="btn btn-secondary" onClick={generatePDF}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Blog;
