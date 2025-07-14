export default function Input({ children, className }) {
  if (className) return <input className={className}>{children}</input>;

  // I am using this for the auth form and it does not use state
  return (
    <input className="medium:py-1.5 medium:text-sm w-full rounded-sm border border-gray-300 px-1 py-1 text-[0.8rem] focus:ring-2 focus:ring-gray-400 focus:outline-none">
      {children}
    </input>
  );
}
