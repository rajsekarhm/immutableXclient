import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropDown"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "./Sheet"
import { Search, User, Settings, LogOut, Wallet } from "lucide-react"
import  {Button} from "./Button"
import { Input } from "./Input"
import { useNavigate, useParams } from "react-router-dom"
import WalletConnect from "../WalletConnect"
import { DropdownMenuByUseCase } from "../DropMenu"

export default function AppBar({ showCaseText,onSearch,onAccountClick, OnMoreClick, isAuth , menuDetails, userDetails, showUserDetails,isLeftSideNeeded}:any) {
  const { onMore } = menuDetails
  if(isAuth && showUserDetails) {
    var {name  ,email } = userDetails 
  } 
  const {userId} = useParams()
  const navigate = useNavigate()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
<header className="sticky top-0 z-50 w-full border border-white bg-background/95 shadow-lg rounded-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
<div className="container flex h-14 items-center">
         <div>
        <Sheet  open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Looking For ? </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <Button className="bg-black text-white " onClick={()=>navigate(`/tokenization/${userId}`)}> tokenization  </Button>
              <br/>
              <Button className="bg-black text-white" onClick={()=>navigate(`/asset-digitalize/${userId}`)}> collateral </Button>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button className="bg-black text-white" onClick={() => {}}> {"view Explorer"}</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
        </Sheet>
        </div> 
        <div className="mr-4 hidden md:flex">
          <a href="#" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block" onClick={() => setIsDrawerOpen(true && isLeftSideNeeded)}>{showCaseText}</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <DropdownMenuByUseCase dropDownDetails={menuDetails}/>
            {Object.values(onMore).map((value) => {
              const {text,action}:any = value
              return ( <a href="#" className="transition-colors hover:text-foreground/80" onClick={action}>{text}</a>)
            })}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-8 md:w-[300px] lg:w-[300px]"
              />
            </div>
          </div>
          {
            showUserDetails && isAuth && name && email? <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                  <AvatarFallback>X</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{name}</p>
                  <p className="text-xs leading-none text-muted-foreground">{email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <WalletConnect/>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> : (showUserDetails ? <Button className="bg-black text-white" onClick={()=> navigate('/sign-in/users')}> SignIn  </Button> : null) }
        </div>
      </div>
    </header>
  )
}