// import React from 'react';
// import '../Login/Login.css';  
// import { Link } from 'react-router-dom';
// const Login = () => {
//   return (
//     <div className='bodyL'>

//    <> <div class="mainL">
//    <input type="checkbox" id="chk" aria-hidden="true"/>
    
//    <div class="signup">
//      <form>
//        <label for="chk" aria-hidden="true">Sign up</label>
//        <input type="text" name="txt" placeholder="User name" required=""/>
//        <input type="email" name="email" placeholder="Email" required=""/>
//        <input type="password" name="pswd" placeholder="Password" required=""/>
//        <div className='buttonL'>
//        <button>Sign up</button>
//        </div>
//      </form>
//    </div>

//    <div class="login">
//      <form>
//        <label for="chk" aria-hidden="true">Login</label>
//        <input type="email" name="email" placeholder="Email" required=""/>
//        <input type="password" name="pswd" placeholder="Password" required=""/>
//        <Link to='./Cal'>
//        <div className='buttonL'>
//         <button>Login</button>
//        </div>
//        </Link>
//      </form>
//    </div>
//  </div>
//    </>
//     </div>
//   );
// };

// export default Login;



// UserProfile.js


// UserProfile.js


// Login.js

// import React, { useState} from 'react';
// import './Profile.css';
// import Navbar from '../Navbar/Navbar';


// const Profile = () => {
//   const initialUserData = {
//     name: 'Dayflow',
//     email: 'Dayflow@gmail.com',
//     username: 'Krishna',
//     password: '********',
//     phone: '1234567890',
//     country: 'India',
//     gender: 'Your Gender',
//   };

//   const [user, setUser] = useState(initialUserData);
//   const [isEditing, setIsEditing] = useState(false);

 

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleSaveChanges = () => {
    
//     console.log('Saving changes:', user);
//     setIsEditing(false);
//   };

//   return (
    
//     <div class="profilepage">
//      <Navbar/>
//     <div className="profile-container">
//       <div className="profile-header">
//         <h2>Personal Information</h2>
//         <button onClick={handleEditToggle}>
//           {isEditing ? 'Cancel' : 'Edit Profile'}
//         </button>
//       </div>
//       <div className="profile-info">
//         <div className="avatar-container">
//           <img src="https://via.placeholder.com/150" alt="User Avatar" />
//         </div>
//         <div className="user-details">
//           <h3>{user.name}</h3>
//           <p>Email: {user.email}</p>
//           <p>Country: {user.country}</p>
//           <p>Gender: {user.gender}</p>
//           <p>Phone: {user.phone}</p>
//           {isEditing ? (
//             <div>
//               <label>
//                 Username:
//                 <input
//                   type="text"
//                   name="username"
//                   value={user.username}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Password:
//                 <input
//                   type="password"
//                   name="password"
//                   value={user.password}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Email:
//                 <input
//                   type="email"
//                   name="email"
//                   value={user.email}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Country:
//                 <input
//                   type="text"
//                   name="country"
//                   value={user.country}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Gender:
//                 <input
//                   type="text"
//                   name="gender"
//                   value={user.gender}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Phone:
//                 <input
//                   type="text"
//                   name="phone"
//                   value={user.phone}
//                   onChange={handleInputChange}
//                 />
//               </label>
//             </div>
//           ) : null}
//         </div>
//       </div>
//       {isEditing ? (
//         <div className="save-changes">
//           <button onClick={handleSaveChanges}>Save Changes</button>
//         </div>
//       ) : null}
//     </div>
//     </div>
   
//   );
// };

// export default Profile;



import React, { useState } from 'react';
import './Profile.css';
import Navbar from '../Navbar/Navbar';

const Profile = () => {
  const initialUserData = {
    name: 'Dayflow',
    email: 'Dayflow@gmail.com',
    username: 'Krishna',
    password: '********',
    phone: '1234567890',
    country: 'India',
    gender: 'Your Gender',
  };

  const [user, setUser] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPicture, setIsEditingPicture] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleEditPictureToggle = () => {
    setIsEditingPicture(!isEditingPicture);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    // Handle the file and update the profile picture accordingly
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', user);
    setIsEditing(false);
  };

  return (
    <div className="profilepage">
      <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <h2>Personal Information</h2>
          <button onClick={handleEditToggle} class="Probut">
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
          <button onClick={handleEditPictureToggle}>
            {isEditingPicture ? 'Cancel Edit Picture' : 'Edit Profile Picture'}
          </button>
        </div>
        <div className="profile-info">
          <div className="avatar-container">
            <img
              src={isEditingPicture ? './ProfilePictures/placeholder.jpg' : 'https://via.placeholder.com/150'}
              alt="User Avatar"
            />
          </div>
          <div className="user-details">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Country: {user.country}</p>
            <p>Gender: {user.gender}</p>
            <p>Phone: {user.phone}</p>
            {isEditing ? (
              <div>
                <label>
                  Username:
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Country:
                  <input
                    type="text"
                    name="country"
                    value={user.country}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Gender:
                  <input
                    type="text"
                    name="gender"
                    value={user.gender}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Phone:
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            ) : null}
            {isEditingPicture ? (
              <div>
                <label>
                  Profile Picture:
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                  />
                </label>
              </div>
            ) : null}
          </div>
        </div>
        {isEditing ? (
          <div className="save-changes">
            <button onClick={handleSaveChanges}>Save Changes</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
