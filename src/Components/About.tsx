// src/components/About.tsx

const About: React.FC = () => {
  return (
    <div className="container mt-4">
      <h2>About the Playlist App</h2>
      <hr />
      <p>
        This app allows users to manage their favorite songs by adding them to a
        personal playlist. You can add new songs, delete existing ones, and mark
        your favorites as starred. All data is managed using MockAPI, providing
        a seamless experience without the need for a backend server.
      </p>
      <p>Built with React, TypeScript, and Bootswatch for styling.</p>
    </div>
  );
};

export default About;
