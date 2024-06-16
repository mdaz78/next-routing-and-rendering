const CustomError = ({ title, description, message }) => {
  return (
    <div id='error'>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{message}</p>
    </div>
  );
};

export default CustomError;
