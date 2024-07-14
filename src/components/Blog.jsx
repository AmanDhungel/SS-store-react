import { Link } from "react-router-dom";
import { blog } from "../utils/blog"; // Ensure this path is correct
import Footer from "./Footer";

const Blog = () => {
  return (
    <>
      <h1 className="mt-20 text-3xl font-bold text-center text-amber-600">Blogs</h1>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
        {blog.map((item) => (
          <div key={item.id}>
            <div className="m-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-custom-gray dark:bg-custom-gray">
              <img
                className="rounded-t-lg w-full"
                height={64}
                src={item.image}
                alt="ss store"
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.blogtitle}
                </h5>
                <Link
                  to={`/blog/${item.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer/>
    </>
  );
};

export default Blog;
