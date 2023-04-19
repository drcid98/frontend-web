import { Link } from 'react-router-dom';

function Button({path, label}) {
  return (
    <Link to={path}>
      <button>{label}</button>
    </Link>
  );
}

export default Button

// function ToggleButton()