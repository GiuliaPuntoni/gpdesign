type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className: string;
};

const Button = ({
  label,
  variant = "primary",
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${className}
        px-4 py-2 font-semibold rounded-lg transition
        ${
          variant === "primary"
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-black hover:bg-gray-400"
        }
      `}
    >
      {label}
    </button>
  );
};

export default Button;
