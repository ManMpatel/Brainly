import { useEffect, useState } from "react";
// import { Cart } from "./Cart";

type searchBarProps= {
    contents: {
        type:"youtube" | "twitter";
        title:string;
        link:string;
        key:string;
    }[];
    onFilter: (filtered: any[]) => void;
    // onFilter: (filtered) => void;
}

export default function SearchBar({contents ,onFilter }: searchBarProps){
    const [searchQuery , setSearchQuery] = useState('');

    useEffect(() => {
    const filtered = contents.filter(content =>
      content.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    onFilter(filtered);
  }, [searchQuery, contents]);
    return <div>
        <div className="flex">
            <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
    </div>
}