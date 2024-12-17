export const Button = ({ label, Icon = null, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center px-3 py-2 bg-primary text-primary-foreground hover:brightness-90 text-base rounded-full w-fit"
    >
      {Icon && (
        <span className="mr-2">
          <Icon size={16} />
        </span>
      )}
      {label}
    </button>
  )
}
