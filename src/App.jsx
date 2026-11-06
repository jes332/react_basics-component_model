import React, { useState } from 'react';

// 1. Reusable Child Component
function UserCard({ name, image }) {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="user-card">
      <img src={image} alt={name} />
      <h2>
        {name} {isVerified && '✓'}
      </h2>
      <button onClick={() => setIsVerified(true)}>Verify User</button>
    </div>
  );
}

// 2. Parent Layout Component
export default function App() {
  const users = [
    { id: 1, name: 'Alice', image: 'alice.jpg' },
    { id: 2, name: 'Bob', image: 'bob.jpg' },
  ];

  return (
    <div className="app-container">
      <header>
        <h1>My Social App</h1>
      </header>
      <main>
        {/* We dynamically generate cards without duplicating code */}
        {users.map((user) => (
          <UserCard key={user.id} name={user.name} image={user.image} />
        ))}
      </main>
    </div>
  );
}
