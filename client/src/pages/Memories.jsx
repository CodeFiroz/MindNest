import React, { useState } from 'react'
import FabIcon from '../components/Ui/FabIcon'
import MemoryCard from '../components/cards/MemoryCard'
import NewMemory from '../components/modals/NewMemory'

const Memories = () => {

  const [newMemory, seNewMemory] = useState(false);

  return (
    <div className='p-5'>

      <FabIcon onClick={()=> seNewMemory(true)} /> 

      {
        newMemory && (
          <NewMemory onClose={()=> seNewMemory(false)} />
        )
      }
      
      <div className='columns-1 sm:columns-2 md:columns-4 gap-4 space-y-4'>

        <MemoryCard 
          image={"https://i.pinimg.com/736x/ea/fe/72/eafe72ca211317b27f5902809a9215cb.jpg"} 
          caption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem quia rerum qui neque excepturi!"}  
          date={"March 21 2025"}
        />

        
        <MemoryCard 
          image={"https://i.pinimg.com/736x/12/0b/3e/120b3eb9598cbfc243fe0ca70c1023f2.jpg"} 
          caption={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem quia rerum qui neque excepturi!"}  
          date={"March 21 2025"}
        />
        
        <MemoryCard 
          image={"https://i.pinimg.com/736x/74/3a/32/743a3221631ec3ae9fa3fbed59821401.jpg"} 
          caption={"Lorem ipsum dolor sit amet "}  
          date={"March 21 2025"}
        />
        
         <MemoryCard 
          image={"https://i.pinimg.com/736x/35/af/2f/35af2f0aac677cd21c6e8e1698d01bd8.jpg"} 
          caption={"Lorem ipsum dolor sit amet "}  
          date={"March 21 2025"}
        />
            <MemoryCard 
          image={"https://i.pinimg.com/736x/b1/b2/0f/b1b20f7590d6f15cf759389685197e5f.jpg"} 
          caption={"Lorem ✏️🍚❤️"}  
          date={"March 21 2025"}
        />
        
        

      </div>

    </div>
  )
}

export default Memories
