'use client'
import { useState } from "react"

export default function Search(){
const item = ['mango', 'pepper', 'orange', 'banana', 'book', 'apple', 'grapes', 'papaya', 'pineapple']

const [search, setSearch] = useState('')
// const [filteredItem, setFilteredItem] = useState(item)

// const handleChange = (e: { target: { value: any } }) => {
//     const value = e.target.value;
//     setSearch(value);
//     setFilteredItem(item.filter((i) => i.toLowerCase().includes(value.toLowerCase())));
// }

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

const displayedItems = search
? item.filter((i) => i.toLowerCase().includes(search.toLowerCase()))
:item;

    return(
        <div>
        <div className="center">Search</div>
        <input type="text" placeholder="Search" value={search} 
        className="border" onChange={handleChange} />

        <div>
           <ul>
      {displayedItems.length > 0 ? (
        displayedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      ) : (
        <p>No items found</p>
      )}
    </ul>
        </div>

        
        </div>

    )
}