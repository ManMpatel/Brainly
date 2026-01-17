import '../index.css';
import {Button } from '../components/ui/Button';
import {PlusIcon} from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Cart } from '../components/ui/Cart';
import { CreateContent } from '../components/ui/CreateContent';
import { useState } from 'react';
import { Sidebar } from '../components/ui/Sidebar'; 
import { useContent } from '../hooks/useContent';



export function Dashboard(){
    const[modelOpen,  setModelOpen ] = useState(false);
    const contents = useContent();

  return <div>
            <Sidebar/>
            <div className='ml-72 bg-gray-200 min-h-screen '>
              <CreateContent open={modelOpen} OnClose={() =>{
                setModelOpen(false);
              }}/>
              <div className="p-6 flex justify-end gap-6">
                <Button onClick={()=>{
                  setModelOpen(true)
                }} variant="secondery" text="Add content" startIcon={<PlusIcon className="h-6 w-6"/>} ></Button>
                <Button variant="primary" text="Share Brain" startIcon={<ShareIcon className= "h-6 w-6 "/>}></Button>
              </div>

              <div className="flex flex-wrap gap-4 p-6">
                {contents.map(({type, link ,title})=> <Cart
                type={type}
                link={link}
                title={title}/>
                )}
              </div>

            </div>
  </div>
}