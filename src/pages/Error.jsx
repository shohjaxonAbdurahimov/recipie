import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  if (error.status == 404) {
    return (
      <div className="h-screen grid place-items-center text-center">
        <div>
          <h1 className="text-9xl mb-5">{error.status}</h1>
          <p className="text-5xl mb-5">{error.statusText}</p>
          <Link to="/" className="btn btn-primary">
            Go To Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen grid place-items-center text-center">
      <div>
        <h1 className="text-4xl capitalize mb-5">Something went wrong :)</h1>
        <Link to="/" className="btn btn-primary">
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
