import { useNavigate } from 'react-router-dom';

export function TaskCard({ task }) {
  const navigate = useNavigate(); // Correct usage of useNavigate hook

  return (
    <div
      style={{
        background: 'black',
        padding: '10px',
        color: 'white',
        cursor: 'pointer',
        marginBottom: '10px', // Added margin to separate cards
        transition: 'background-color 0.3s, color 0.3s', // Smooth transition for color changes
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'white'; // Change background to white
        e.currentTarget.style.color = 'black'; // Change text to black
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'black'; // Revert background to black
        e.currentTarget.style.color = 'white'; // Revert text to white
      }}
      onClick={() => {
        navigate(`/tasks/${task.id}`); // Navigate to the task detail page using the task ID
      }}
    >
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <hr />
    </div>
  );
}
