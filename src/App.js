import logo from './logo.svg';
import './App.css';
import burger from "./burger.json"

function App() {
  return (
    <div  style ={{
      margin: "auto",
      width: 800,
      paddingTop: "1rem"
    }}>
      <h1 className="title">Best Hamburger Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
                  {burger.map(burger =>(
                    <tr key ={[burger.name, burger.patty_type].join(":")}>
            <td>{burger.name}</td>
            <td>{burger.description}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
