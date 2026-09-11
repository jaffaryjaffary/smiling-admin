import { CheckCircle2Icon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function CardsAlert({success}) {
  return (
    <Alert className="max-w-md mt-10">
      <CheckCircle2Icon  size={40}/>
      <AlertTitle className={'text-xs text-green-400'}>Success Notification</AlertTitle>
      <AlertDescription>
         {success}
      </AlertDescription>
    </Alert>
  )
}
