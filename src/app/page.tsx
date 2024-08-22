import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function Home() {
  let categoryType = [
    {name: "Adventure", value: "advinture"},
    {name: "Arts & Culture", value: "arts_culture"},
    {name: "Attractions", value: "attractions"},
    {name: "Family & Kids", value: "family_kids"},
    {name: "Nature & Siteseeing", value: "nature_siteseeing"},
    {name: "Outdoor Tours", value: "outdoor_tours"},
    {name: "Shopping & Entertainment", value: "shopping_entertainment"},
    {name: "Wellbeing", value: "wellbeing"},
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="flex bg-gradient-to-r from-cyan-500 to-blue-500 w-full flex-row items-center justify-between">
        { categoryType.map((type) => ( <Button value={type.value} key={type.value}>{type.name}</Button>))}
      </div>

      <div className="grid grid-flow-row-dense grid-cols-3 w-full mt-5">
        <div className="grid col-span-2 grid-cols-3 bg-gradient-to-r from-sky-500 to-indigo-500">
          <Card className="w-[300px] mb-5 mt-5">
            <CardContent className="flex aspect-video items-center justify-center p-6">
              <img className="text-4xl font-semibold" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0Hcac4aO4U8uTrcDAdloRPzSuJWUfq6TPw&s`}></img>
            </CardContent>
            <CardHeader>
              <CardTitle>The Adventure Group Whistler</CardTitle>
              <CardDescription>Whistler, BC</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Discover</Button>
          </CardFooter>
          </Card>

          <Card className="w-[300px] mb-5 mt-5">
            <CardContent className="flex aspect-video items-center justify-center p-6">
              <img className="text-4xl font-semibold" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0Hcac4aO4U8uTrcDAdloRPzSuJWUfq6TPw&s`}></img>
            </CardContent>
            <CardHeader>
              <CardTitle>The Adventure Group Whistler</CardTitle>
              <CardDescription>Whistler, BC</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Discover</Button>
          </CardFooter>
          </Card>

          <Card className="w-[300px] mb-5 mt-5">
            <CardContent className="flex aspect-video items-center justify-center p-6">
              <img className="text-4xl font-semibold" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0Hcac4aO4U8uTrcDAdloRPzSuJWUfq6TPw&s`}></img>
            </CardContent>
            <CardHeader>
              <CardTitle>The Adventure Group Whistler</CardTitle>
              <CardDescription>Whistler, BC</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Discover</Button>
          </CardFooter>
          </Card>

          <Card className="w-[300px] mb-5 mt-5">
            <CardContent className="flex aspect-video items-center justify-center p-6">
              <img className="text-4xl font-semibold" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0Hcac4aO4U8uTrcDAdloRPzSuJWUfq6TPw&s`}></img>
            </CardContent>
            <CardHeader>
              <CardTitle>The Adventure Group Whistler</CardTitle>
              <CardDescription>Whistler, BC</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Discover</Button>
          </CardFooter>
          </Card>

          <Card className="w-[300px] mb-5 mt-5">
            <CardContent className="flex aspect-video items-center justify-center p-6">
              <img className="text-4xl font-semibold" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0Hcac4aO4U8uTrcDAdloRPzSuJWUfq6TPw&s`}></img>
            </CardContent>
            <CardHeader>
              <CardTitle>The Adventure Group Whistler</CardTitle>
              <CardDescription>Whistler, BC</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Discover</Button>
          </CardFooter>
          </Card>

          <Card className="w-[300px] mb-5 mt-5">
            <CardContent className="flex aspect-video items-center justify-center p-6">
              <img className="text-4xl font-semibold" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0Hcac4aO4U8uTrcDAdloRPzSuJWUfq6TPw&s`}></img>
            </CardContent>
            <CardHeader>
              <CardTitle>The Adventure Group Whistler</CardTitle>
              <CardDescription>Whistler, BC</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Discover</Button>
          </CardFooter>
          </Card>
        </div>
        <div
        className="bg-gradient-to-r from-purple-500 to-pink-500 grid  justify-items-stretch">
          <Card className="w-[400px] mb-5 mt-5 justify-self-center">
            <CardContent className="flex aspect-video items-center justify-center p-6">
              <img className="text-4xl font-semibold" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0Hcac4aO4U8uTrcDAdloRPzSuJWUfq6TPw&s`}></img>
            </CardContent>
            <CardHeader>
              <CardTitle>The Adventure Group Whistler</CardTitle>
              <CardDescription>Whistler, BC</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Discover</Button>
          </CardFooter>
          </Card>
        </div>
      </div>

      
      <Pagination className="w-full mt-5"> 
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
     
      
    </main>
  );
}
