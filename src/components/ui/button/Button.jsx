export default function Button({ children, type, className }) {
  // for forms
  if (type)
    return (
      <button
        type={type}
        className={`cursor-pointer transition-colors duration-300 ease-in-out ${className}`}
      >
        {children}
      </button>
    );

  // for transparent
  return <button className={className}>{children}</button>;
}
