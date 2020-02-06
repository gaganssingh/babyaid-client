import React from "react";

function BirthToFour() {
	return (
		<table className="BirthToFour" style={{ width: "100%" }}>
			<thead>
				<tr>
					<th>Age</th>
					<th>Amount of breast milk</th>
					<th>No. of feedings per 24 hours</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1 month</td>
					<td>2 to 4 oz</td>
					<td>6 to 8 times</td>
				</tr>
				<tr>
					<td>2 months</td>
					<td>5 to 6 oz</td>
					<td>5 to 6 times</td>
				</tr>
				<tr>
					<td>3 to 5 months</td>
					<td>6 to 7 oz</td>
					<td>5 to 6 times</td>
				</tr>
			</tbody>
		</table>
	);
}

export default BirthToFour;
