import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserCircleIcon, CheckIcon, ArrowRight } from "lucide-react"

export function Free(props) {
  return (
    <Card className="w-[350px] border-none bg-gray-200 dark:bg-zinc-900">
      <CardHeader>
        <CardTitle className='flex gap-2 font-bold tracking-normal'> <UserCircleIcon/>Personal</CardTitle>
        <CardDescription>Free forever</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
          <h2 className="flex text-2xl font-semibold -mt-3">
                    Free
        </h2>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    1 Free board
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    20 Monthly feedbacks
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    Upvote Feedback
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    Authentication Check
                    </h2>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {
          props.session
          ? 
          <>
            <Button className='w-full bg-astralicsblue dark:bg-astralicsblue font-bold dark:text-white hover:bg-astralicsblue dark:hover:bg-astralicsblue '>
              Choose Free
              </Button>
          </>
          : 
          <>
             <Button className='w-full bg-astralicsblue dark:bg-astralicsblue font-bold dark:text-white hover:bg-astralicsblue dark:hover:bg-astralicsblue '>
              Choose Free
              </Button>
          </>
        }
      </CardFooter>
    </Card>
  )
}
