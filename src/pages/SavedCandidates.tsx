import { useState, useEffect } from 'react';

const SavedCandidates = () => {
  const [savedUsers, setSavedUsers] = useState<any[]>([]);

  // Load saved candidates from localStorage on page load
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedUsers(saved);
  }, []);

  // Remove a saved candidate from the list
  const handleRemoveUser = (username: string) => {
    const updatedSavedUsers = savedUsers.filter((user) => user.login !== username);
    setSavedUsers(updatedSavedUsers);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedUsers));
  };

  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedUsers.length === 0 ? (
        <p>No saved candidates.</p>
      ) : (
        <div>
          {savedUsers.map((user) => (
            <div key={user.login} className="saved-candidate-card">
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <h3>{user.login}</h3>
                <p>{user.bio || 'No bio available'}</p>
              </div>
              <button onClick={() => handleRemoveUser(user.login)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedCandidates;

