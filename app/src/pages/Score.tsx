export interface Props {
  score: number;
}

function Score({ score }: Props) {
  return <div>{score}</div>;
}

export default Score;