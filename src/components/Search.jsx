import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from './ui/separator'
import { CiSearch } from "react-icons/ci";
import searchdropdowndata from '@/Shared/searchdropdowndata';
  
function Search() {
  return (
    <div className='p-2 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 
    items-center w-[60%]'>
        <Select>
            <SelectTrigger className="outline-none border-none w-full shadow-none text-md">
                <SelectValue placeholder="Ownership" />
            </SelectTrigger>
            <SelectContent className="bg-white">
                {searchdropdowndata.Ownership.map((ob, index)=>(
                <SelectItem key={index} value={ob.name}>{ob.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>
       
        <Separator orientation="vertical" className="hidden md:block"/>

        <Select>
            <SelectTrigger className="outline-none border-none w-full shadow-none text-md">
                <SelectValue placeholder="Manufacturer" />
            </SelectTrigger>
            <SelectContent className="bg-white">
            {searchdropdowndata.Manufacturers.map((ob, index)=>(
                <SelectItem key={index} value={ob.name}>{ob.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>

        <Separator orientation="vertical" className="hidden md:block"/>

        <Select>
            <SelectTrigger className="outline-none border-none w-full shadow-none text-md">
                <SelectValue placeholder="Pricing" />
            </SelectTrigger>
            <SelectContent className="bg-white">
            {searchdropdowndata.Pricing.map((ob, index)=>(
                <SelectItem key={index} value={ob.name}>{ob.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>
        <div>
            <CiSearch className='text-[42px] text-white bg-[#515fbb] rounded-full p-3 hover:scale-105 transition-all
            cursor-pointer'/>
        </div>
    </div>
  )
}

export default Search