import Container from 'react-bootstrap/esm/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ResturantList } from './components/resturantList/resturantList.component';
import React from 'react';
import { Restaurant } from './models/resturant.model';
import { getBurgersByResturant, getResturantsByName } from './services/resturant.service';
import { Resturant } from './components/resturant/resturant.component';

interface AppState{
	resturants: Array<Restaurant>;
	chosenResturant?: Restaurant;
}
interface AppProps{
}

class App extends React.Component<AppProps,AppState> {
	constructor(props:any) {
		super(props);
		this.state = {
			resturants: getResturantsByName("Burger"),
			chosenResturant: undefined
		};
	}

	handleClick(chosenResturant:Restaurant){
		this.setState({
			chosenResturant: chosenResturant
		})
	}

	renderRestaurant(){
		if(this.state.chosenResturant !== undefined){
			return <Resturant burgers={getBurgersByResturant(this.state.chosenResturant.name)}></Resturant> 
		}
	}

  render() {
	  return <Container>
  	<div className="justify-content-center">
	  <h1 className="d-flex justify-content-center">Burger Frontend</h1>
  </div>
  <div>
	  <div>
	  <ResturantList resturants={[...this.state.resturants]}
	  onClick={(chosenResturant:Restaurant) => this.handleClick(chosenResturant)}>
	  </ResturantList>
	  {this.renderRestaurant()}
	  </div>
  </div>
</Container>
  };
}

export default App;
