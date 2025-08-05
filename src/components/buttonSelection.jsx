import '../styles/buttonStyle.css'

function ButtonSelection({ onButtonClick }) {
  return (
    <div>
      <button onClick={onButtonClick}>Submit</button>
    </div>
  );
}

export default ButtonSelection;