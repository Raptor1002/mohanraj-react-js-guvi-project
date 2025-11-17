import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      age: formData.get("age"),
      dob: formData.get("dob"),
      contact: formData.get("contect"),
    };

    if (localStorage.getItem(user.email)) {
      alert("User already registered");
      return;
    }
    localStorage.setItem(user.email, JSON.stringify(user));
    alert("Registration successful");
    navigate("/login");
  };

  return (
    <form onSubmit={handleRegister} className="form-container">
      <h2>Register</h2>
      <p>
        Name:
        <input name="name" type="name" placeholder="Enter ur Name" required />
      </p>
      <p>
        Email:
        <input
          name="email"
          type="email"
          placeholder="Enter ur Email"
          required
        />
      </p>
      <p>
        Password:
        <input
          name="password"
          type="password"
          placeholder="Enter ur Password"
          required
        />
      </p>
      <p>
        Age:
        <input name="age" type="contect" placeholder="Enter ur age" required />
      </p>
      <p>
        DOB
        <input name="dob" type="date" placeholder="Enter ur dob" required />
      </p>
      <p>
        Contect:
        <input
          name="contect"
          type="contect"
          placeholder="Enter ur contect"
          required
        />
      </p>
      <button type="submit">Sign Up</button>
    </form>
  );
}
