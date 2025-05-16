import React from 'react'

const List = ({
    items,
    style
}) => {

    const Tag = style === "unordered" ? "ul" : 'ol'

  return (
    <>

    <Tag className='my-3 ml-3 list-disc text-zinc-700 text-sm'>
        {
            items.map((list, index)=>(
                <li key={index} className='mt-2'>{list}</li>
            ))
        }
    </Tag>

    </>
  )
}

export default List
