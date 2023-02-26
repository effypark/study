import { render, screen } from "@testing-library/react";
import Score, { Props } from "../pages/Score";

// Score 컴포넌트에 대한 테스트 선언.
describe("Score", () => {
  //테스트 조건
  const initialProps: Props = {
    score: 0,
  };

  // test case
  it("Render initial score", () => { // it() === test() 
    render(<Score {...initialProps} />);

    expect(screen.getByText(initialProps.score + "점")).toBeInTheDocument();
  });
});