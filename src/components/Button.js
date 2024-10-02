const Button = ({buttonText}) => {
  return (
    <div>
      <button className="bg-gray-100 hover:bg-gray-200 font-semibold text-sm px-2 py-1 m-2 rounded-lg">{buttonText}</button>
    </div>
  )
}

export default Button;
