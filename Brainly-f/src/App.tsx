import './index.css';
import {Button } from './components/ui/Button';
import {PlusIcon} from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';



function App() {
    console.log("hii there")
    console.log("hii there")
    console.log("hii there")
    return (
    <div className="p-6 space-y-4">
      <div className="bg-purple-600 text-white p-6 rounded-md">
        Tailwind is working
      </div>

      <Button
        variant="primary"
        text="Add Content"
        startIcon={<PlusIcon />}
      />

      <Button
        variant="secondery"
        text="Share Brain"
        startIcon={<ShareIcon />}
      />
    </div>
  );

}


export default App;

