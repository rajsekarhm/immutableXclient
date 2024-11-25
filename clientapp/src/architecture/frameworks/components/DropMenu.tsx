import {
  Cloud,
  CreditCard,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  UserPlus,
} from "lucide-react";

import { Button } from "./shadcn/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./shadcn/DropDown";

type dropDown = {
  title: string;
  details: any[];
  dropDownText?: any;
};

export function DropdownMenuByUseCase({ dropDownDetails }: {dropDownDetails:dropDown}) {
  const { title, details, dropDownText } = dropDownDetails
  function createDropBox(details: any[]) {
    return details.map((card) => {
      const { element, text, itHasSubtab, subTab, onClick } = card;
      return (
        <>
          {itHasSubtab ? (
            <div key={text} >
              <DropdownMenuSub >
                <DropdownMenuSubTrigger>
                  {element ? element : null}
                  <span>{text}</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {createDropBox(subTab)}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
                ;
              </DropdownMenuSub>
            </div>
          ) : (
            <>
              {" "}
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={onClick}>
                  {element ? element : null}
                  <span>{text}</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />{" "}
            </>
          )}
        </>
      );
    });
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"  className="bg-black text-white" >{dropDownText}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel >{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {createDropBox(details)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}