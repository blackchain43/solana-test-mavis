import { useNavigate } from "react-router-dom";
import Button from "../../components/Core/Button";
import ErrorIcon from "./ErrorIcon";

const ErrorPage = ({ onRedirect }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* <CustomerProfileHeader /> */}
      {/* Todo: 404 page, 500 page, another error page */}
      <div className="min-h-screen bg-neutrals/3 flex justify-center">
        <div className="w-80 my-auto">
          <ErrorIcon />
          <div className="text-center mt-6">
            <div className="text-xl font-medium text-primary/1">Oops!</div>
            <span className="text-sm text-neutrals/8">
              We’ve run into an issue. Please try again later.
            </span>
          </div>
          <Button
            onClick={() => {
              navigate("/");
              onRedirect && onRedirect();
            }}
            className="mt-6"
          >
            Go to homepage
          </Button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
