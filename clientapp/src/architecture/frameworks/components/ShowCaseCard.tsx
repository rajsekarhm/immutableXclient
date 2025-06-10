import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./shadcn/Card";
import {Button} from "./shadcn/Button";
import { Label } from "./shadcn/Label";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./shadcn/ToolTip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { ExternalLink } from "lucide-react";

function CardComponent({
  title,
  description,
  content,
  buttonText,
  onButtonClick,
  isInputNeed,
  image
}: {
  title: string;
  description: string;
  content: any;
  buttonText: string;
  onButtonClick: () => void;
  isInputNeed?: boolean;
  image?: string;
}) {
  const renderContent = (value: string | number) => {
    const stringValue = value.toString();
    const shouldTruncate = stringValue.length > 20;

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Label className="cursor-pointer hover:text-primary transition-colors">
              {shouldTruncate ? (
                <span className="font-mono">
                  {stringValue.slice(0, 6)}...{stringValue.slice(-4)}
                </span>
              ) : (
                stringValue
              )}
            </Label>
          </TooltipTrigger>
          {shouldTruncate && (
            <TooltipContent className="bg-popover text-popover-foreground px-3 py-1.5 text-white rounded-md border shadow-md bg-black">
              <span className="font-mono">{stringValue}</span>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image || "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=60"}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {content && Object.entries(content).map(([key, value]) => (
          (typeof value === 'string' || typeof value === 'number') && (
            <div key={key} className="space-y-1.5 pb-3 last:pb-0 border-b last:border-0 border-border/50">
              <Label className="text-sm text-muted-foreground capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </Label>
              <div className="font-medium">
                {renderContent(value)}
              </div>
            </div>
          )
        ))}
      </CardContent>
      {isInputNeed && (
        <CardFooter className="flex flex-col gap-2">
          <Button 
            variant="outline" 
            className="w-full bg-black text-white" 
            onClick={onButtonClick}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            {buttonText}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
export default function ShowCaseCard({ cardDetails }: any) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
        {cardDetails &&
          cardDetails.map((card: any) => {
            const { card_details, buttonText, onClick, isInputNeed,image } = card;
            const { id, title, description, content } = card_details;
            return (
              <div key={id}>
                <CardComponent
                  title={title}
                  description={description}
                  content={content}
                  buttonText={buttonText}
                  onButtonClick={onClick}
                  isInputNeed={isInputNeed}
                  image={image}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
