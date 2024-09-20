import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function TextArea({item, handleInputChange, carInfo}) {
  return (
    <div>
        <Textarea name={item.name} onChange={(e)=>handleInputChange(item.name, e.target.value)} 
        required={item.required}
        defaultValue={carInfo?.[item.name]}/>
    </div>
  )
}

export default TextArea