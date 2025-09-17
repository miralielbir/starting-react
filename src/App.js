import React from "react";
import './App.css';
import PropTypes from "prop-types";
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { selectClasses } from "@mui/material";

const BurgerRow =({ burger, onSelect})=>( 
          <tr>
            <td>{burger.name}</td>
            <td>{burger.description}</td>
            <td>
              <Button variant="contained" color="primary"
              onClick={()=>onSelect(burger)}>Select!</Button>
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

);

const Title = styled.h1`
  text-align:center;
`;
const TwoColumnLayout=styled.div`
        display:grid;
        grid-template-columns: 70% 30%;
        grid-column-gap:1rem;
`;
const Yo= styled.div`
      margin: auto;
      width: 800px;
      padding-top: 1rem;
`;
const Input = styled.input`
  width:100%;
  font-size:x-large;
  padding:0.2rem;
`;
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      filter:"",
      burger:[],
      selectedItem:null,
    };
  }
  componentDidMount(){
    fetch("http://localhost:3000/starting-react/burger.json")
    .then(resp =>resp.json())
    .then(burger =>this.setState({
      ...this.state,
      burger,
  }));
  
  }
  render(){
 return (
    <Yo>
      <Title>Best Hamburger Search</Title>
      <Input
      value={this.statefilter}
      onChange={(evt)=>this.setState({
        ...this.state,fiter:evt.target.value})}
      />
      <TwoColumnLayout>
      <div>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
                  {this.state.burger.filter((burger)=> burger.name.toLowerCase().includes(this.state.filter.toLowerCase()))
                  .map((burger) => (
                    <BurgerRow burger={burger} key={[burger.name, burger.patty_type].join(":")} onSelect={(burger)=>this.setState({
                      ...this.state,selectedItem:burger})}/>

        ))}
        </tbody>
        </table>
        </div>
        {this.state.selectedItem &&<BurgerInfo {...this.state.selectedItem}/>
        }
        </TwoColumnLayout>
      </Yo>
  );
  }
}


/*
  React.useEffect(()=>{
    fetch("http://localhost:3000/starting-react/burger.json")
    .then(resp =>resp.json())
    .then(data =>burgerSet(data));
  }, []);
  */

export default App;
