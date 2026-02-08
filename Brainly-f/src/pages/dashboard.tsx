import '../index.css';
import {Button } from '../components/ui/Button';
import {PlusIcon} from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Cart } from '../components/ui/Cart';
import { CreateContent } from '../components/ui/CreateContent';
import { useState } from 'react';
import { Sidebar } from '../components/ui/Sidebar'; 
import { useContent } from '../hooks/useContent';
import { ShareLink } from '../components/ui/ShareLink';
import  SearchBar  from '../components/ui/SearchBar';
// import  SharePage  from '../utils/SharePage';



export function Dashboard(){

    const[modelOpen,  setModelOpen ] = useState(false);
    const[linkOpen, setLinkOpen] = useState(false);
    const {contents , fetchContents} = useContent();
    const [filteredContents, setFilteredContents] = useState(contents);

  return <div>
            <Sidebar/>
            <div className='ml-72 p-4'>
              <SearchBar contents={contents} onFilter={setFilteredContents} />
            </div>
            <div className=' ml-72 bg-gray-200 min-h-screen '>
                  <div className="p-6 flex justify-end gap-6">
                  <div>
                    <CreateContent open={modelOpen} OnClose={() =>{
                      setModelOpen(false)}}
                      onContentAdded={fetchContents} 
                    />
                    <Button onClick={()=>{
                      setModelOpen(true)
                    }} variant="secondery" text="Add content" startIcon={<PlusIcon className="h-6 w-6"/>} ></Button>
                  </div>
                  <div>
                    <ShareLink open={linkOpen} OnClose={()=>{
                      setLinkOpen(false)
                    }} />
                    <Button onClick={()=>{
                      {setLinkOpen(true)}
                    }} variant="primary" text="Share Brain" startIcon={<ShareIcon className= "h-6 w-6 "/>}></Button>
                  </div>
                </div>
              

              <div className="flex flex-wrap gap-4 p-6">
                {filteredContents.map(({type, link ,title})=> <Cart
                // id={id}
                type={type}
                link={link}
                title={title}/>
                )}
              </div>


            </div>
  </div>
}