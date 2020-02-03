import React from "react";

function BirthToFour() {
	return (
		<table className="BirthToFour">
			<thead>
				<tr>
					<th>Age</th>
					<th>Amount of formula/breast milk</th>
					<th>No. of feedings per 24 hours</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1 month</td>
					<td>2 - 4 oz</td>
					<td>6 - 8 times</td>
				</tr>
				<tr>
					<td>2 months</td>
					<td>5 - 6 oz</td>
					<td>5 - 6 times</td>
				</tr>
				<tr>
					<td>3 - 5 months</td>
					<td>6 - 7 oz</td>
					<td>5 - 6 times</td>
				</tr>
			</tbody>
		</table>
	);
}

export default BirthToFour;
