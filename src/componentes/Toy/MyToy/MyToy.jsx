import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import Footer from '../../shared/Footer/Footer';
import { AuthContext } from '../../Providers/AuthProvider';
import UpdateToy from '../../Update/UpdateToy';
import { Link } from 'react-router-dom';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");

    // 
    useEffect(() => {
        fetch(`https://toy-chamber-server.vercel.app/myToys/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
      }, [user]);

    // 
    const handleDelete = (id) => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://toy-chamber-server.vercel.app/myToys/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining);
                    }
                })
        }
       
    }
// 

const handleUpdate = (id)=>{
    console.log('clicked', id);
}


    return (
        <div>
        <NavBar></NavBar>
        {/* <h2>Toys: {toys.length}</h2> */}
        <div className="p-4">
<h2 className="text-lg font-bold mb-4">My Toys</h2>
{/*  */}
{/* <div className="search-box p-2 border-collapse text-center">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        className="p-1 input input-bordered border-orange-500"
      />{" "}
      <button className='btn btn-primary bg-orange-500 ms-1' onClick={handleSearch}>Search</button>
    </div> */}
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
    <th className='text-center'>Rating</th>
    <th className='text-center'>Image</th>
    <th className='text-center'>Desc</th>
    <th className='text-center'>Update</th>
    <th className='text-center'>Delete</th>
  </tr>
</thead>


 {toys?.map((toy, index) => (
<tbody key={index}>
        <tr>
        <td>{index + 1}</td>
            <td className='text-center'>{toy.sellerName}</td>
            <td className='text-center'>{toy.toyName}</td>
            <td className='text-center'>{toy.subCategory}</td>
            <td className='text-center'>{toy.price}</td>
            <td className='text-center'>{toy.availableQuantity}</td>
            <td className='text-center'>{toy.rating}</td>
          
            <td>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={toy.pictureUrl} alt="Toy Image" className="w-full h-full object-cover" />
          </div>
        </div>
      </td>
      <td className='text-center'>{toy.detailDescription}</td>
            <td className='text-center'>
               <Link to={`/updateToy/${toy._id}`}><button className="btn btn-primary bg-green-400">Update</button></Link> 
                
            </td>
            <td className='text-center'>
                <button onClick={() => handleDelete(toy._id)} className="btn btn-primary bg-red-500">Delete</button>
            </td>
            {console.log('toyid',toy._id)}
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

export default MyToy;