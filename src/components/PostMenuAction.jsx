const PostMenuAction = () => {
  return (
    <div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="20px"
          height="20px"
        >
          <path
            d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <span>Save this post</span>
      </div>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="20px"
          height="20px"
        >
          <path d="M41 9h-1.15a4.9 4.9 0 0 0-1.2-2.71c-.57-.56.09-2-2.27-3.19-2-1-3.43.73-4.17-.48A4.65 4.65 0 0 0 28 0a6.58 6.58 0 0 0-4.57 1.65C22.72.75 21.49 0 19 0a3.31 3.31 0 0 0-3.41 2.4c-.56 1.43-2.13-.24-4 .71-2.38 1.17-1.74 2.63-2.3 3.18A4.9 4.9 0 0 0 8.09 9H7a2 2 0 0 0-2 2v1a3 3 0 0 0 2.06 2.83C9.29 47.23 9 42.26 9 45a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3c0-2.78-.28 2.14 1.94-30.17A3 3 0 0 0 43 12v-1a2 2 0 0 0-2-2zM30.5 3.65A3 3 0 0 0 33.91 5a2.5 2.5 0 0 1 1.58-.08c1.42.71.5 1.57 1.74 2.82A2.66 2.66 0 0 1 37.82 9h-5c-.67-2.65-3.45-3.73-6.12-3.94-1.58-.12-1.85-.38-2.31-1.56A4.71 4.71 0 0 1 28 2a2.7 2.7 0 0 1 2.5 1.65zM10.71 7.71C12 6.46 11 5.6 12.44 4.9a2.17 2.17 0 0 1 1.46 0 3 3 0 0 0 3.55-1.81C17.75 2.34 18 2 19 2c5.4 0 1.62 4.59 7.53 5.05 1.47.12 3.49.64 4.15 2H10.12a2.66 2.66 0 0 1 .59-1.34zM37.07 42H10.93L9.07 15h29.86zM37 45a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1v-1h26zm4-33a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1h34z" />
          <path d="M25 38V20a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0zM32 38.06l1-18a1 1 0 0 0-2-.12l-1 18a1 1 0 0 0 2 .12zM18 37.94l-1-18a1 1 0 0 0-2 .12l1 18a1 1 0 0 0 2-.12z" />
        </svg>
        <span>Delete this post</span>
      </div>
    </div>
  );
};

export default PostMenuAction;
