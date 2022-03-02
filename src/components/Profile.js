import React from "react";
import { useSelector } from "react-redux";
import "./styles/profile.css";

const Profile = () => {
  const data = useSelector((state) => state.rockets);
  const newData = data.filter((rocket) => rocket.reserved === true);
  return (
    <div className="reserved-section">
      <h3 className="reserved-title">My Rockets</h3>
      {newData ? (
         <div className="reserved-rockets">
         {newData.map((rocket) => (
           <span key={rocket.id} className="reserved-rocket">
             {rocket.name}
           </span>
         ))}
       </div>
        
      ) : (
        <li>No Reserved Rockets to display</li>
      )}
    </div>
  );
};

export default Profile;
