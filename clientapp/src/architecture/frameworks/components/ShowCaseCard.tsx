import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./shadcn/Card"
import Button from './Button'
import { Label } from "./shadcn/Label"

interface CardData {
  id: number
  title: string
  description: string
  content?: Array<any>
}

function CardComponent({ title, description, content, buttonText, onButtonClick, isInputNeed }: any) {
  return (
    <Card className="w-[250px] max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {Object.values(content).map((value:any) =>{
        return(<>  <CardContent key={value}>
            <Label htmlFor={value}>{value.length > 20 ? <>{value.slice(0, 6)}...{value.slice(-4)} </>: value}</Label>
          </CardContent>  </> )
      })}
     {isInputNeed? <CardFooter>
        <Button description={buttonText} onclickEvent={onButtonClick}/>
      </CardFooter> : null}
    </Card>
  )
}

export default function ShowCaseCard({cardDetails}:any) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
        {cardDetails.map((card:any) => {
          const { card_details,buttonText,onClick,isInputNeed} = card
          const {id,title,description,content}=card_details
          return(
          <CardComponent
            key={id}
            title={title}
            description={description}
            content={content}
            buttonText = {buttonText}
            onButtonClick = {onClick}
            isInputNeed={isInputNeed}
          />
        )
        })}
      </div>
    </div>
  )
}
