import React from 'react';

const Question = props => {

  return(
    <div>
      <div key={props.key} >
      <button className="fa fa-beer fa-2x" aria-hidden="true" onClick={props.handleClick}></button>
      {props.question}
      </div>
        <ul>{props.selected}</ul>
    </div>
  )

}


export default Question;
