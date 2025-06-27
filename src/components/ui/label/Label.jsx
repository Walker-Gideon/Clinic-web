export default function Label({ children, styling, forLabel }) {
  if (styling)
    return (
      <label htmlFor={forLabel} className={styling}>
        {children}
      </label>
    );

  // using this for the auth form
  return (
    <label
      htmlFor={forLabel}
      className="medium:text-sm mb-2 text-xs font-medium"
    >
      {children}
    </label>
  );
}
