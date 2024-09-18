import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function TextArea({item}) {
  return (
    <div>
        <Textarea name={item.name}/>
    </div>
  )
}

export default TextArea