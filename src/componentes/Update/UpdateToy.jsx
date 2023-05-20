import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';
import Footer from '../shared/Footer/Footer';

const UpdateToy = ({ id }) => {
    const toy = useLoaderData();
    console.log(toy._id);
    const toyID = toy._id;
    const navigate = useNavigate();
    const from =  '/myToy';
    


const handleUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const detailDescription = form.detailDescription.value;
    const availableQuantity = form.availableQuantity.value;
    console.log(detailDescription, availableQuantity, price);
    const updatedToy = { detailDescription, availableQuantity, price };
    // 

                // price: body.price,
    //         detailDescription: body.detailDescription,
    //         availableQuantity: body.availableQuantity,
    // 

    fetch(`http://localhost:5000/updateToy/${toyID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedToy)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            if (data.modifiedCount > 0) {
                alert(`Toy ${toy.toyName} updated successfully`);
                navigate(from, {replace: true})
            }
        })
}

    return (
        <div>
            <NavBar></NavBar>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h1>Update Below </h1>
           


<form className="space-y-4" onSubmit={handleUpdate}>
                       

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold">Toy Name</label>
                            <input type="text" id="name" value={toy.toyName} readOnly name='toyName' className="input input-bordered"  />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold">Toy ID</label>
                            <input type="text" id="name" value={toy._id} readOnly name='toyName' className="input input-bordered"  />
                        </div>
                       
<hr />
<h1 >You can update</h1>
<h3> Price, Available quantity, Detail description</h3>
                      

                        <div className="flex flex-col">
                            <label  className="text-sm font-semibold">Price</label>
                            <input type="number" id="price" defaultValue={toy.price} name='price' className="input input-bordered" />
                        </div>

                        

                        <div className="flex flex-col">
                            <label  className="text-sm font-semibold">Available Quantity</label>
                            <input type="number" defaultValue={toy.availableQuantity} name='availableQuantity' id="quantity" className="input input-bordered" />
                        </div>

                        <div className="flex flex-col">
                            <label  className="text-sm font-semibold">Detail Description</label>
                            <textarea id="description" defaultValue={toy.detailDescription} name='detailDescription' className="textarea textarea-bordered"></textarea>
                        </div>

                        

                        

                        <button type="submit" className="btn btn-primary">Update Toy</button>
                    </form>
                    </div>
                    </div>
                    <Footer></Footer>
        </div>
    );
};

export default UpdateToy;