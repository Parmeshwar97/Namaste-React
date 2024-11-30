import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "user",
        location: "default",
        avatar_url: 'user_photo'
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Parmeshwar97");
    const res = await data.json();

    this.setState({ userData: res });
  }

  componentWillUnmount(){
    console.log("Component Is Unmounted...!")
  }

  render() {
    return (
      <div className="user-card">
        <img src = {this.state.userData.avatar_url} style={{width:'200px'}}/>
        <h2>Name: {this.state.userData.name}</h2>
        <h3>Location: {this.state.userData.location}</h3>
        <h4>Contact: {'contact'}</h4>
      </div>
    );
  }
}

export default UserClass;


/*
------- Mounting --------

    - Constructor(dummy data)
    - Render (dummy data)

    - componentDidMount()
        <API Call>
        <setSate()> {Triggers Update Cycle}

------  Update  ---------
         Render (API data )
        <HTML New (api data)>

    - componentDidUpdate()

*/