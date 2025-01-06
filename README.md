
# Candidate Search Application

## Overview
The Candidate Search Application allows users to browse potential candidates sourced from the GitHub API. Users can save candidates they are interested in or skip candidates they do not want to save. The app also provides a way to view a list of saved candidates, which persists across page reloads.

## Features

### Candidate Search Page
- **Candidate Information Display:** When the page loads, one candidate's details are displayed, including:
  - Name
  - Username
  - Location
  - Avatar
  - Email
  - GitHub Profile Link (`html_url`)
  - Company
- **Save Candidate:** Clicking the "save" button saves the candidate to the list of potential candidates and displays the next candidate.
- **Skip Candidate:** Clicking the "next" button skips the current candidate and displays the next one without saving.
- **No More Candidates:** When no candidates are available for review, an appropriate message is displayed.

### Saved Candidates Page
- **Saved Candidate List:** Displays a list of previously saved candidates, including:
  - Name
  - Username
  - Location
  - Avatar
  - Email
  - GitHub Profile Link (`html_url`)
  - Company
- **Persistent Data:** The list of saved candidates persists across page reloads.
- **No Saved Candidates:** If no candidates have been saved, an appropriate message is displayed.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/candidate-search-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd candidate-search-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your GitHub token:
   ```env
   VITE_GITHUB_TOKEN=your_github_personal_access_token
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Browse candidates on the Candidate Search page:
   - Save candidates using the "save" button.
   - Skip candidates using the "next" button.
1. View saved candidates on the Saved Candidates page.

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the application for production.
- **`npm run preview`**: Preview the production build.

## Technologies Used

- **Frontend:** React, TypeScript
- **Styling:** CSS (or framework if applicable)
- **State Management:** React useState and useEffect hooks
- **API:** GitHub REST API

## Components

### Candidate Search Page
- **Features:**
  - Displays candidate details.
  - Allows saving or skipping candidates.
  - Handles no candidates gracefully.

### Saved Candidates Page
- **Features:**
  - Displays a list of saved candidates.
  - Provides a remove option for saved candidates.
  - Handles empty lists gracefully.

## Known Issues

- None at this time.

## Future Enhancements

- Add filtering options for candidates (e.g., location, company).
- Include pagination for saved candidates.
- Improve error handling and notifications.

## Acknowledgments

- GitHub for providing the REST API.
