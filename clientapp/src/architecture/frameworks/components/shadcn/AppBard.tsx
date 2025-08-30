import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropDown";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "./Sheet";
import { Search, User, LogOut, Wallet } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { DropdownMenuByUseCase } from "../DropMenu";
import { useWallet } from "../../views/hooks/useWallet";

export default function AppBar({
  showCaseText,
  onSearch,
  onAccountClick,
  OnMoreClick,
  isAuth,
  menuDetails,
  userDetails,
  showUserDetails,
  isLeftSideNeeded,
}: any) {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { account, balance } = useWallet();

  const { onMore } = menuDetails || {};
  const { name, email } = userDetails || {};
  return (
    <header className="sticky top-0 z-50 w-full rounded-lg border border-white bg-background/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        {/* LEFT: Sidebar Trigger */}
        <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Looking For?</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <Button
                  className="bg-black text-white"
                  onClick={() => navigate(`/tokenization/${userId}`)}
                >
                  Tokenization
                </Button>
                <Button
                  className="bg-black text-white"
                  onClick={() => navigate(`/asset-digitalize/${userId}`)}
                >
                  Collateral
                </Button>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button className="bg-black text-white">View Explorer</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        {/* CENTER LEFT: Showcase Text & Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <span
            className="cursor-pointer font-bold"
            onClick={() => setIsDrawerOpen(isLeftSideNeeded)}
          >
            {showCaseText}
          </span>
          <nav className="flex items-center space-x-4 text-sm font-medium">
            <DropdownMenuByUseCase dropDownDetails={menuDetails} />
            {Object.values(onMore || {}).map(({ text, action }: any) => (
              <span
                key={text}
                className="cursor-pointer transition-colors hover:text-foreground/80"
                onClick={action}
              >
                {text}
              </span>
            ))}
          </nav>
        </div>

        {/* CENTER RIGHT: Search */}
        <div className="flex flex-1 justify-center md:justify-end space-x-2">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              onChange={(e) => onSearch?.(e.target.value)}
              className="w-full pl-8 text-black"
            />
          </div>

          {/* RIGHT: User Avatar or Sign-in */}
          {showUserDetails && isAuth && name && email ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full bg-white flex items-center justify-center"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="@user" />
                    <AvatarFallback className="text-black font-bold">
                      {name[0]}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>
                    {name}_{userId}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Wallet className="mr-2 h-4 w-4" />
                  <span>{Number(balance)} ETH</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onAccountClick}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            showUserDetails && (
              <Button
                className="bg-black text-white"
                onClick={() => navigate("/sign-in/users")}
              >
                Sign In
              </Button>
            )
          )}
        </div>
      </div>
    </header>
  );
}
