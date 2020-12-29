import React, { Component } from "react";

class Counter extends Component {
  // constructor(props){
  //     // 클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해 주어야 한다.
  //     // 이렇게 하면 이 컴포넌트의 부모 클래스 (Super Class)인 리액트의 Component 클래스의 생성자 함수가 호출된다.
  //     super(props);
  //     // state의 초기값 설정하기
  //     this.state ={
  //         number: 0,
  //         fixedNumber: 0
  //     };
  //하지만 다음과 같은 방법으로도 생성자를 호출할 수 있습니다.
  state = {
    number: 0,
    fixedNumber: 0,
  };

  //앞으로는 이와 같은 방법으로 초깃값을 설정하겠습니다.

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를. 지정합니다.
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            },
            ()=>{console.log("setState 호출")});
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
