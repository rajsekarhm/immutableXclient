import React from "react";
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

export function DropdownMenuByUseCase({
  dropDownDetails,
}: {
  dropDownDetails: dropDown;
}) {
  const { title, details, dropDownText } = dropDownDetails;

  function createDropBox(details: any[], parentKey = "") {
    return details.map((card, index) => {
      const { key: cardKey, element, text, itHasSubtab, subTab, onClick } = card;
      const key = cardKey || `${parentKey}-${text || index}`;

      if (itHasSubtab) {
        return (
          <div key={key}>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                {element || null}
                <span>{text}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {createDropBox(subTab, key)}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </div>
        );
      } else {
        return (
          <React.Fragment key={key}>
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={onClick}>
                {element || null}
                <span>{text}</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </React.Fragment>
        );
      }
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <a
          onClick={() => {}}
          className="transition-colors hover:text-foreground/80"
        >
          {dropDownText}
        </a>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {createDropBox(details)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
