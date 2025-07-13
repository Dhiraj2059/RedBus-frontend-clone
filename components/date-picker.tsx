"use client"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface DatePickerProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
}

export function DatePicker({ date, onDateChange, placeholder = "Select date", className }: DatePickerProps) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full h-12 justify-start text-left font-normal pl-10 bg-white border-gray-300 hover:bg-gray-50",
              !date && "text-muted-foreground",
              className,
            )}
          >
            {date ? format(date, "MMM do, yyyy") : <span className="text-gray-500">{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateChange}
            disabled={(date) => date < today}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
    </div>
  )
}
