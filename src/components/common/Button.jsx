const variantClassNames = {
  filled: "btn-brand-filled",
  outline: "btn-brand-outline",
  text: "btn-brand-text",
};

const sizeClassNames = {
  sm: "btn-brand-sm",
  md: "btn-brand-md",
  lg: "btn-brand-lg",
};

export default function Button({
  active = false,
  as: Component = "button",
  children,
  className = "",
  fullWidth = false,
  size = "md",
  type = "button",
  variant = "filled",
  ...props
}) {
  const buttonClassName = [
    "btn",
    variantClassNames[variant] ?? variantClassNames.filled,
    sizeClassNames[size] ?? sizeClassNames.md,
    active ? "is-active" : "",
    fullWidth ? "w-100" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const componentProps = {
    className: buttonClassName,
    ...props,
  };

  if (Component === "button") {
    componentProps.type = type;
    componentProps["aria-pressed"] = active;
  }

  return <Component {...componentProps}>{children}</Component>;
}
