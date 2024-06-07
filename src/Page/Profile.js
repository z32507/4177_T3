import { useLocation } from "react-router-dom";

function Profile() {
    const location = useLocation();
    const { firstName, lastName, email } = location.state

    return (
        <div>
            
            <header className="page_header">
                <h1> CSCI 4177 Tutorial 3 </h1>
            </header>

            <div className="profile_body">
                <div className="profile_title">
                    <h2> User Profile </h2>
                </div>

                <div className="profile_data">
                    <p>First name:  {firstName}</p>
                    <p>Last name:   {lastName}</p>
                    <p>Email:       {email}</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Profile;