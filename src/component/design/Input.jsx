const Input = ({ type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full px-4 py-2 rounded-md dark-bg border border-indigo-300 outline-none"
    />
  );
};

export default Input;
