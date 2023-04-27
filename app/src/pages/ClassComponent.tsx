import React from 'react';

interface MyProps { // 받아온 데이터에 대한 정의
  message: string;
};
type MyState = { // 해당 Class에서 돌아가는 데이터에 대한 정의
  count: number;
};

class ClassComponent extends React.Component<MyProps, MyState> {
  state: MyState = {
    count: 0,
  };

  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default ClassComponent;