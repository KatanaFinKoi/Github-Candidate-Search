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
              <img
                src={user.avatar_url}
                alt={user.login}
              />
              <div className="candidate-info">
                <h3>{user.name || 'No name available'}</h3>
                <p>
                  <strong>Username:</strong> {user.login}
                </p>
                <p>
                  <strong>Location:</strong> {user.location || 'No location available'}
                </p>
                <p>
                  <strong>Email:</strong> {user.email || 'No email available'}
                </p>
                <p>
                  <strong>Company:</strong> {user.company || 'No company available'}
                </p>
                <p>
                  <strong>Profile:</strong>{' '}
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    {user.html_url}
                  </a>
                </p>
              </div>
              <div className="candidate-actions" >
                <button onClick={() => handleRemoveUser(user.login)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedCandidates;
