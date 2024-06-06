import React from 'react';

export default function Search(props) {
    const {showCategory,setShowCategory,search,setSearch}=props;
    return (
        <div className='searchContainer'>
            <button className='showCategory' onClick={()=>setShowCategory(!showCategory)}>{showCategory?'Show Categories':'Hide Categories'}</button>
            <input type='text' value={search} placeholder='Enter title of product' onChange={(e)=>setSearch(e.target.value)}/>
            <button>Search</button>
        </div>
    )
}
