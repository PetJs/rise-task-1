interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className="w-fit px-6 text-center flex justify-center items-center p-3 rounded-[32px] bg-black text-white">
      {children}
    </div>
  );
};

export default Button;
