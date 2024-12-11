// import Counter from "../../class-components/Counter";

import React from "react";
import UserClass from "../components/UserClass";
import userContext from "../utils/contextApi";
class About extends React.Component {
  render() {
    return (
      <div className="mt-28 p-4">
        {/* //! Using Context in Class based Component... */}
        <userContext.Consumer>
          {({ user }) => (
            <span className="font-bold text-lg">User : {user}</span>
          )}
        </userContext.Consumer>

        <h1>About Class Component</h1>
        <h3>User Information</h3>
        <UserClass
          name={"Pamu"}
          location="Jalgaon,Maharashtra"
          contact="parmeshwarpatil9763@gmail.com"
        />
      </div>
    );
  }
}

export default About;
