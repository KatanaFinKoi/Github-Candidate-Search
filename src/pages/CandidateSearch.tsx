import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API.tsx'; // Adjust the import path
// import { Link } from 'react-router-dom';

const CandidateSearch = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch users when the page loads
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const data = await searchGithub();
      setUsers(data);
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  // Save the current user to local storage
  const handleSaveUser = (user: any) => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    saved.push(user);
    localStorage.setItem('savedCandidates', JSON.stringify(saved));
  };

  // Move to the next user
  const handleNextUser = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  if (isLoading) return <p>Loading...</p>;

  if (users.length === 0) return <p>No users found.</p>;

  const currentUser = users[currentIndex];

  return (
    <div>
      <h1>Search GitHub Candidates</h1>
      <div className="candidate-card">
        <div className="candidate-info">
          <img src={currentUser.avatar_url} alt={currentUser.login} />
          <h3>{currentUser.login}</h3>
          <p>{currentUser.bio || 'No bio available'}</p>
        </div>
        <div className="candidate-actions">
          <button onClick={handleNextUser}>Next</button>
          <button
            onClick={() => {
              handleSaveUser(currentUser);
              handleNextUser();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateSearch;
