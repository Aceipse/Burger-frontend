import Button from "@restart/ui/esm/Button";
import React from "react";
import { Table } from "react-bootstrap";
import { Burger } from "../../models/burger.model";

interface ResturantProps {
	burgers: Array<Burger>;
  }

export class Resturant extends React.Component<ResturantProps> {
	renderRows(resturants:Array<Burger>){
		return resturants.map(resturant=> {
			return <tr>
			<td>{resturant.name}</td>
			<td><Button>Rate</Button></td>
		  </tr>
		})
	}

	render() {
	  return (
		<Table bordered>
		<thead>
		  <tr>
			<th>Name</th>
			<th></th>
		  </tr>
		</thead>
		<tbody>
		{
		this.renderRows(this.props.burgers)
		} 
		</tbody>
	  </Table>
	  );
	}
  }
  