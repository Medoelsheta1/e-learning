
import './App.css';
import Courses from './Components/Courses/Courses';
import Suggestion from './Components/SuggestionSection/Suggestion';
import Landing from './Components/landing/Landing';

function App() {
  return (
    <div className="App">
      <Landing />
      <Suggestion />
      <Courses />
    </div>
  );
}

export default App;
