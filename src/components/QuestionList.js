import React from 'react';
import Question from './Question';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedQuestionId: null}
    this.handleQuestionClick = this.handleQuestionClick.bind(this)
  }

  handleQuestionClick(id) {
    if(this.state.selectedQuestionId === null){
    this.setState({selectedQuestionId: id});
  } else {
    this.setState({selectedQuestionId: null});
  }
  }

  render(){
    let questions = this.props.questions.map((question) => {
      let showAnswer = null
      if(question.id === this.state.selectedQuestionId) {
        showAnswer = question.answer
      }

      let onQuestionClick = () => this.handleQuestionClick(question.id);

      return (
        <Question
        key={question.id}
        question={question.question}
        selected={showAnswer}
        handleClick={onQuestionClick}
        />
    )
  });

  return (
    <ul>{questions}</ul>
  )
}
};
export default QuestionList;
