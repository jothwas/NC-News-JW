const ErrorComponent = ({ message }) => {
  return (
    <div>
      <p>
        {message
          ? message
          : `We can't find the page you're looking for - return to Home`}
      </p>
    </div>
  );
};

export default ErrorComponent;
