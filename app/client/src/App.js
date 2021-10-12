import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD</h1>

      <div className="form">
        <label>Content Name</label>
        <input type="text" name="post-name" />

        <label>Main</label>
        <input type="text" name="main" />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
