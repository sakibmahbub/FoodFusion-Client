import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          className="object-cover w-96
        h-80"
          src="https://i.ibb.co/s6rsr74/2704891.jpg"
          alt="error"
        />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-7xl text-secondary">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
