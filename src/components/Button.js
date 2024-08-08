export const Button = ({ onClick, children, className, disabled }) => {
  const baseClassStyles = 'py-2 px-4 rounded-lg text-white font-bold flex gap-2 ';
  const finalClassStyles = `${baseClassStyles} ${className}`;

  return (
    <button
      onClick={onClick}
      className={finalClassStyles}
      disabled={disabled}
    >
      {children}
    </button >
  );
}
