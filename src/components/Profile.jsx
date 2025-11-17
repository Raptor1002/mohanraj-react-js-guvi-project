import React, { useState, useEffect } from "react";

export default function Profile() {
  const email = localStorage.getItem("activeUser");
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ age: "", dob: "", contact: "" });

  useEffect(() => {
    if (email) {
      const savedUser = JSON.parse(localStorage.getItem(email));
      setUser(savedUser);
      setForm({
        age: savedUser.age || "",
        dob: savedUser.dob || "",
        contact: savedUser.contact || "",
      });
    }
  }, [email]);

  if (!user) {
    return <p>Please log in first.</p>;
  }

 
  const handleSave = () => {
    const updatedUser = { ...user, ...form };
    localStorage.setItem(email, JSON.stringify(updatedUser));
    setUser(updatedUser);
    alert("Profile updated!");
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
        </p>
         <p>
        <strong>Age:</strong> {user.age}
        </p>
         <p>
        <strong>DOB:</strong> {user.dob}
        </p>
       <p>
        <strong>Contect:</strong> {user.contact}
        </p>
      
      
      
      <button onClick={handleSave}>Update Profile</button>
         
    </div>
  );
}
