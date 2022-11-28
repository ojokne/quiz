import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div>
      <h1>The resource you are requesting for was'nt found</h1>
      <Link to="/">Return to home page</Link>
    </div>
  );
}
export default ErrorPage;
