const Button = ({ onClickHandler, value, title }) => {
    return (
        // Functional component for a reusable button
      <button
        onClick={onClickHandler}
        value={value}
        className={`px-4 py-1 border text-base hover:bg-pink hover:text-white`}
      >
        {title}
      </button>
    );
  };
  
  export default Button;
  