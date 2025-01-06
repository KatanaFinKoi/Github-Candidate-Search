import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API.tsx';  
import { GithubUser } from '../interfaces/Candidate.interface.tsx'; 

const CandidateSearch = () => {
  const [users, setUsers] = useState<GithubUser[]>([]);  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const randomUsers = await searchGithub();

        const detailedUsers = await Promise.all(
          randomUsers.map(async (user: { login: string }) => {
            const userDetails = await searchGithubUser(user.login);  
            return userDetails;  
          })
        );

        setUsers(detailedUsers);  
      } catch (err) {
        console.error('Error fetching users:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSaveUser = (user: GithubUser) => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    saved.push(user);
    localStorage.setItem('savedCandidates', JSON.stringify(saved));
  };

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
          <img
            src={currentUser.avatar_url}
            alt={currentUser.login}
          />
          <h3>{currentUser.name || 'No name available'}</h3>
          <p>
            <strong>Username:</strong> {currentUser.login}
          </p>
          <p>
            <strong>Location:</strong> {currentUser.location || 'No location available'}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email || 'No email available'}
          </p>
          <p>
            <strong>Company:</strong> {currentUser.company || 'No company available'}
          </p>
          <p>
            <strong>Profile:</strong>{' '}
            <a href={currentUser.html_url} target="_blank" rel="noopener noreferrer">
              {currentUser.html_url}
            </a>
          </p>
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
