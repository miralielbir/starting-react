import logo from './logo.svg';
import React from "react";
import './App.css';
import PropTypes from "prop-types";
import burger from "./burger.json"

const BurgerRow =({ burger, onSelect})=>( 
          <tr>
            <td>{burger.name}</td>
            <td>{burger.description}</td>
            <td>
              <button
              onClick={()=>onSelect(burger)}>Select!</button>
            </td>
          </tr>

);
BurgerRow.propTypes ={
  burger: PropTypes.shape({
    name:PropTypes.string,
    patty_type:PropTypes.string,
    toppings:PropTypes.string,
    description:PropTypes.string,
  }),
  onSelect:PropTypes.func,
}
const BurgerInfo =({name, patty_type,toppings
})=>(
  <div>
    <h1>{name}</h1>
    <table>
      <tr>
      <td>patty_type</td>
      <td style={{textAlign: "right"}}>{patty_type}</td>
      </tr>
      <tr>
        <td >toppings</td>
        <td style={{textAlign: "right"}}>{toppings}</td>
      </tr>
    </table>

  </div>

)


function App() {
  const [filter,filterSet] = React.useState("");
  const [selectedItem, selectedItemSet]=React.useState(null);
  return (
    <div  style ={{
      margin: "auto",
      width: 800,
      paddingTop: "1rem"
    }}>
      <h1 className="title">Best Hamburger Search</h1>
      <input
      value={filter}
      onChange={(evt)=>filterSet(evt.target.value)}
      />
      <div style={{
        display:"grid",
        gridTemplateColumns: "70% 30%",
        gridColumnGap:"1rem",
      }}>
      <div>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
                  {burger.filter((burger)=> burger.name.toLowerCase().includes(filter.toLowerCase()))
                  .map((burger) => (
                    <BurgerRow burger={burger} key={[burger.name, burger.patty_type].join(":")} onSelect={(burger)=>selectedItemSet(burger)}/>

        ))}
        </tbody>
        </table>
        </div>
        {selectedItem &&<BurgerInfo {...selectedItem}/>
        }
        </div>
      </div>
  );
}

export default App;
