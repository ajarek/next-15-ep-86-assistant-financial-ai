'use client'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Subscription = () => {
  const [sub, setSub] = useState('Premium')
  return (
     <div className='w-full flex  items-center justify-between'>
          <div className='flex items-center gap-4 '>
            <div>
              <div>Plan Subskrypcji</div>
              <div> Plan {sub}</div>
            </div>
          </div>
          <Select onValueChange={(value) => setSub(value)} value={sub}>
  <SelectTrigger className="w-[120px] bg-primary border-2 border-primary text-white">
    <SelectValue placeholder="Subskrypcje"  />
  </SelectTrigger>
  <SelectContent >
    <SelectItem value="Premium">Premium</SelectItem>
    <SelectItem value="Standard">Standard</SelectItem>
    <SelectItem value="Eko">Eko</SelectItem>
  </SelectContent>
</Select>

        </div>
  )
}

export default Subscription