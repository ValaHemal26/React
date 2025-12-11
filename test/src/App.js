import './style.css';

function App() {
  
  return (
    <div className='wrapper'>
      <div id='header'>
        <h1>Header</h1>
        
      </div>
      <div className='main'>
        <div className='sidebar'>
          sidebar
        </div>
        <div className='content'>
            content
        </div>
      </div>
      <div id='footer'>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
