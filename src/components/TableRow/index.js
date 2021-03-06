import React from "react";
import noImg from "../../data/images/noImg200x200.png";

function TableRow({ pic, firstName, lastName, email, phone }) {
  return (
    <tr>
      <td><img src={pic ? pic : noImg} alt="employee headshot or placeholder"/></td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phone}</td>
  </tr>
  )
}

export default TableRow;