import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import NavBar from '../../shared/NavBar/NavBar';
import Footer from '../../shared/Footer/Footer';
import AllToysTable from './AlltoysTable';

// All toy page work done
const AllToys = () => {
    const toys = useLoaderData();
    
    // 
const [toyA, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
        fetch(`https://toy-chamber-server.vercel.app/toys`)
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            setToys(data);
        })
    },[])
    


   
      const handleSearch = () => {
        fetch(`https://toy-chamber-server.vercel.app/toyss/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
      };


    // 
    return (
        <div>
            <NavBar></NavBar>
            {/* <h2>Toys: {toys.length}</h2> */}
            <div className="p-4">
  <h2 className="text-lg font-bold mb-4">All Toys</h2>
{/*  */}
  <div className="search-box p-2 border-collapse text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1 input input-bordered border-orange-500"
          />{" "}
          <button className='btn btn-primary bg-orange-500 ms-1' onClick={handleSearch}>Search</button>
        </div>
{/*  */}
  <table className="table table-bordered mx-auto">
    <thead>
      <tr>
      <th>#</th>
        <th className='text-center'>Seller</th>
        <th className='text-center'>Toy Name</th>
        <th className='text-center'>Sub-category</th>
        <th className='text-center'>Price</th>
        <th className='text-center'>Available Quantity</th>
        <th className='text-center'>Action</th>
      </tr>
    </thead>
    

     {toyA?.map((toy, index) => (
    <tbody key={index}>
            <tr>
            <td>{index + 1}</td>
                <td className='text-center'>{toy.sellerName}</td>
                <td className='text-center'>{toy.toyName}</td>
                <td className='text-center'>{toy.subCategory}</td>
                <td className='text-center'>{toy.price}</td>
                <td className='text-center'>{toy.availableQuantity}</td>
                <td className='text-center'>
                 <Link to={`/viewDetail/${toy._id}`}>  <button className="btn btn-primary">View Details</button></Link> 
                </td>
            </tr>
            </tbody>
             ))}
    
    
    
   {/* {
    toys.map(toy=> <AllToysTable key={toy._id} toy={toy}></AllToysTable>)
   } */}
  </table>
</div>

            <Footer></Footer>
        </div>
    );
};

export default AllToys;