import { Link } from "react-router-dom";
import logoImage from "@/assets/follow-iq-logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  const textClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link to="/" className={`flex items-center gap-2 group ${className}`}>
      <img 
        src={logoImage} 
        alt="Follow IQ" 
        className={`${sizeClasses[size]} object-contain`}
      />
      {showText && (
        <span className={`${textClasses[size]} font-display font-bold text-foreground`}>
          Follow IQ
        </span>
      )}
    </Link>
  );
};
