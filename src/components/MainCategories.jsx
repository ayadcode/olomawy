import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Web design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=database"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Database
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <path d="M81.69 4.75A41.556 41.556 0 0 0 49.586 72.7l-13 12.655-.6-.6a1.749 1.749 0 0 0-2.465-.012L5.894 111.9a1.75 1.75 0 0 0-.033 2.463l8.15 8.449a1.754 1.754 0 0 0 1.236.535h.023a1.748 1.748 0 0 0 1.227-.5l27.78-27.3a1.749 1.749 0 0 0 .012-2.484l-.772-.773 13.151-12.8A41.558 41.558 0 1 0 81.69 4.75zM15.3 119.113l-5.72-5.93 25.159-24.728 5.826 5.833zm23.759-31.285 12.865-12.522q.987 1.011 2.026 1.942L41.043 89.814zM81.69 84.37a38.173 38.173 0 0 1-24.043-8.556 39.314 39.314 0 0 1-4.36-4.17A38.061 38.061 0 1 1 81.69 84.37z" />
          <path d="M81.69 10.75a35.56 35.56 0 0 0-26.547 59.22 36.7 36.7 0 0 0 4.082 3.905 35.187 35.187 0 0 0 22.465 8 35.56 35.56 0 0 0 0-71.12zm0 67.62a31.723 31.723 0 0 1-20.253-7.207 33.272 33.272 0 0 1-3.686-3.527A32.061 32.061 0 1 1 81.69 78.37z" />
        </svg>
        <input
          type="text"
          placeholder="search a post..."
          className="bg-transparent"
        />
      </div>
    </div>
  );
};

export default MainCategories;
