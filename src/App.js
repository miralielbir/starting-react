import logo from './logo.svg';
import './App.css';

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
          <tr>
            <td>BuRger Maniac</td>
            <td>150£ Full Onion</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
