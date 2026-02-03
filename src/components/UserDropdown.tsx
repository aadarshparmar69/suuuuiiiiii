import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Settings, LogOut, ChevronDown, Shield, HelpCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserDropdown = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  const getDisplayName = () => {
    if (user?.user_metadata?.display_name) {
      return user.user_metadata.display_name;
    }
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name;
    }
    return user?.email?.split("@")[0] || "User";
  };

  if (!user) return null;

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20">
          <Avatar className="w-8 h-8 border border-border">
            <AvatarImage src={user.user_metadata?.avatar_url} alt={getDisplayName()} />
            <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">
              {getInitials(user.email || "U")}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-medium text-foreground max-w-[120px] truncate">
              {getDisplayName()}
            </span>
          </div>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-64 bg-card border border-border shadow-xl z-50"
        sideOffset={8}
      >
        <DropdownMenuLabel className="p-4">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 border border-border">
              <AvatarImage src={user.user_metadata?.avatar_url} alt={getDisplayName()} />
              <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                {getInitials(user.email || "U")}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-semibold text-foreground truncate">
                {getDisplayName()}
              </span>
              <span className="text-xs text-muted-foreground truncate">
                {user.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-border" />
        <div className="p-1">
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link to="/account" className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-secondary">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Account</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link to="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-secondary">
              <Settings className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link to="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-secondary">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Admin Dashboard</span>
            </Link>
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator className="bg-border" />
        <div className="p-1">
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link to="/contact" className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-secondary">
              <HelpCircle className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Help & Support</span>
            </Link>
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator className="bg-border" />
        <div className="p-1">
          <DropdownMenuItem 
            onClick={handleSignOut}
            className="flex items-center gap-3 px-3 py-2.5 rounded-md text-destructive hover:bg-destructive/10 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Sign out</span>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
