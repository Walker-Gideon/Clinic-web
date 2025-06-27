export default function Label({ children, className, forLabel }) {
  if (className)
    return (
      <label htmlFor={forLabel} className={className}>
        {children}
      </label>
    );

  return (
    <label htmlFor={forLabel} className="mb-2 text-sm font-medium">
      {children}
    </label>
  );
}
