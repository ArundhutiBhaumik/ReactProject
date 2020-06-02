import React from 'react';

const Table = ({droplets}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {(droplets.length > 0) ? droplets.map( (droplet, index) => {
            return (
                <tr key={ index }>
                    <td>{ droplet.userId }</td>
                    <td>{ droplet.id }</td>
                    <td>{ droplet.title}</td>
                    <td>{ droplet.body }</td>
                </tr>
            )
        }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

export default Table
