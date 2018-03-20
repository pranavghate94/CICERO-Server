import React from 'react';

class Report extends React.Component{
  console.log(location.match.params);
  render(){
    return(
      <div>
        <h3>{location.match.params}></h3>
      </div>
    )
  }
};

export default Report;
