import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'wired-elements';

function AdminView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="form-container">
      <h1>Admin View - Registered Users</h1>
      <wired-card elevation="2">
        {users.length === 0 ? (
          <p>No users registered yet.</p>
        ) : (
          <wired-list>
            {users.map((user) => (
              <wired-item key={user.id}>
                <Link to={`/user/${user.id}`}>
                  {user.firstName} {user.lastName} ({user.email})
                </Link>
              </wired-item>
            ))}
          </wired-list>
        )}
      </wired-card>
    </div>
  );
}

export default AdminView;
