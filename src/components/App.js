import React from 'react';
import QuestionList from './QuestionList'


const App = props => {
  return(
    <div>
      <h1 className="text-center">We are here to help</h1>
      <QuestionList
      questions={props.data}
      />
    </div>

  );

}
export default App;
