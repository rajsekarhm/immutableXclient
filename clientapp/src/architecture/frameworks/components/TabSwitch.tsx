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

 function TabsSwitch() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account" className="bg-grey text-black">Asset</TabsTrigger> {"  "}
        {"  "}  <TabsTrigger value="password" className="bg-grey text-black" >Collateral</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2" >
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte"  onChange={(event) => console.log(event.target.name)}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" onChange={(event) => console.log(event.target.name)} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-black text-white" onClick={(event) => console.log(event)}>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" onChange={(event) => console.log(event.target.name)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password"  onChange={(event) => console.log(event.target.name)}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-black text-white" >Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}


export default TabsSwitch