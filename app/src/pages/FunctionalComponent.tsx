interface FunctionalComponentProps {
  name: string;
}; // props 타입 선언

const FunctionalComponent = ({name}: FunctionalComponentProps) => {
  return (
    <div>
      {name}
    </div>
  )
}

export default FunctionalComponent;