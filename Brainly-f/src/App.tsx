import './index.css';
import {Button } from './components/ui/Button';
import {PlusIcon} from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';




function App(){
  return <div className="p-6 flex justify-end gap-4">
      <Button variant="secondery" text="Add content" startIcon={<PlusIcon className="h-6 w-6"/>} ></Button>
      <Button variant="primary" text="Add content" startIcon={<ShareIcon className= "h-6 w-6"/>}></Button>
    </div>
}
export default App;


