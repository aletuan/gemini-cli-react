import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'wired-elements';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(`Error fetching user with ID ${id}:`, error);
      }
    };
    fetchUser();
  }, [id]);

  if (!user) {
    return (
      <div className="form-container">
        <h1>User Details</h1>
        <p>Loading user details...</p>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h1>User Details</h1>
      <wired-card elevation="2">
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
      </wired-card>
    </div>
  );
}

export default UserDetails;
