const Input = ({ type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full px-4 py-2 rounded-md reverse outline-1 outline-indigo-300"
    />
  );
};

export default Input;
