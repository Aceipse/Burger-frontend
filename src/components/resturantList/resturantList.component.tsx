import React from "react";
import { Table } from "react-bootstrap";
import { Restaurant } from "../../models/resturant.model";

interface ResturantListProps {
	resturants: Array<Restaurant>;
	onClick: (chosenResturant:Restaurant)=>void;
  }

export class ResturantList extends React.Component<ResturantListProps> {
	renderRows(resturants:Array<Restaurant>){
		return resturants.map(resturant=> {
			return <tr onClick={()=>this.props.onClick(resturant)}>
			<td>{resturant.name}</td>
			<td>{resturant.address}</td>
			<td>{resturant.openFrom.getTime() + ' - ' + resturant.openTo.getTime()}</td>
		  </tr>
		})
	}

	render() {
	  return (
		<Table bordered hover>
		<thead>
		  <tr>
			<th>Name</th>
			<th>Address</th>
			<th>Opening hours</th>
		  </tr>
		</thead>
		<tbody>
		{
		this.renderRows(this.props.resturants)
		} 
		</tbody>
	  </Table>
	  );
	}
  }
  