import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Opps!!</h1>
      <h2>Something Went Wrong!!</h2>
      <h3>Please try again later!!</h3>
      <h3>{`${err.status} ${err.statusText}` }</h3>
      <h4>{err.data}</h4>
    </div>
  );
};
export default Error;