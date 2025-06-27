export default function Badge({ children, variant, className }) {
  if (variant === "secondary")
    return (
      <div
        className={`rounded-2xl bg-gray-100 px-2 py-0.5 font-bold ${className}`}
      >
        {children}
      </div>
    );

  return <div className={`font-bold ${className}`}>{children}</div>;
}
