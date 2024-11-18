import { Button } from "./shadcn/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./shadcn/Card"
import { Input } from "./shadcn/Input"
import { Label } from "./shadcn/Label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./shadcn/Tabs"

 function TabsSwitch({tabsDetails}:any) {
  const {card_details, onChanges,onClick} = tabsDetails
  return (
    <Tabs defaultValue="digitalize" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="digitalize" className="bg-black text-white">Asset</TabsTrigger> {"    "}
        {"     "}  <TabsTrigger value="tokenization" className="bg-black text-white" >Collateral</TabsTrigger>
      </TabsList>
      <TabsContent value="digitalize">
        <Card>
          <CardHeader>
            <CardTitle>Digitalize</CardTitle>
            <CardDescription>
               Transform Art or Commodities into Digital Assets.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2" >
            {card_details.map((input:any) => {
                const {name,value,description} = input
                return(
                    <div className="space-y-1">
                    <Label htmlFor={value}>{value}</Label>
                    <Input name={name} id={name} onChange={onChanges} />
                  </div>
                )
            })}
          </CardContent>
          <CardFooter>
            <Button className="bg-black text-white" onClick={onClick}>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="tokenization">
        <Card>
          <CardHeader>
            <CardTitle>Tokenization</CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Label htmlFor="cooking">  UseCase still Cooking ... </Label>
          </CardContent>
          <CardFooter>
            <Button className="bg-black text-white" >Create Token</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}


export default TabsSwitch