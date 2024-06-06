import React, { useEffect, useState } from 'react';

export default function Body({ showCategory, search }) {
    const [data, setData] = useState([]);
    const [cate, setCate] = useState([]);
    const [url, setUrl] = useState('https://dummyjson.com/products')
    const [catName, setCatName] = useState('All');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setData(data.products);
            })
    }, [url])


    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then((value) => {
                setCate(value);
            })
    }, [])

    useEffect(() => {
        if (search) {
            setFilteredData(data.filter(item => item.title.toLowerCase().includes(search.toLowerCase())));
        } else {
            setFilteredData(data);
        }
    }, [search, data]);

    return (
        <div className='body'>
            <div className='categories' style={showCategory ? {} : { display: 'inline-block', transition: "display 2s" }}>
                <b><u style={{fontSize:"20px",fontWeight:"600"}}>Categories</u></b>
                <h4 className='catItem' onClick={()=>{
                    setUrl('https://dummyjson.com/products');
                    setCatName('All')
                }}>All</h4>
                {

                    cate.map((item, i) => <h4 className='catItem' key={i} onClick={() => {
                        setUrl(item.url);
                        setCatName(item.name)

                    }}>{item.name}</h4>)

                }

            </div>
            <div className='cardContainer'>
                <h1 style={{ width: "100%", textAlign: "center", backgroundColor:"GrayText",color:"Scrollbar", height:"50px"}}>{catName}</h1>
                {
                    filteredData.map((item, i) => <Card obj={item} key={i} />)
                }


            </div>
        </div>
    )
}

function Card({ obj }) {
    return (
        <div className='card'>
            <h3>{obj.title}</h3>
            <img src={obj.images[0]} />
            <p><b>Rating :</b>{obj.rating}</p>
            <p><b>Brand :</b>{obj.brand}</p>
        </div>
    )
}
