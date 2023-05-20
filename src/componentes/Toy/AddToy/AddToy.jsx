import React, { useContext } from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import Footer from '../../shared/Footer/Footer';
import { AuthContext } from '../../Providers/AuthProvider';
import { json } from 'react-router-dom';

const AddToy = () => {
    const {user} = useContext(AuthContext);
    const handleAddToy = (event)=>{
        event.preventDefault();
        const form = event.target;
        const pictureUrl = form.pictureUrl.value;
        const toyName = form.toyName.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
      const   detailDescription = form.detailDescription.value;
      const sellerEmail = form.sellerEmail.value;
      const sellerName = form.sellerName.value;

      const toy = {
        pictureUrl,
        toyName,
        subCategory,
        price,
        rating,
        availableQuantity,
        detailDescription,
        sellerEmail,
        sellerName};
      console.log(toy);

      fetch(`http://localhost:5000/toys`, {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(toy)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.insertedId){
            alert('toy is added successfully');
            form.reset();
        }
      })

    }
    return (
        <div>
            <NavBar></NavBar>
            <div className=''>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    {/* <div className="p-6 bg-white rounded-lg shadow-md"> */}
                    <h1 className="text-2xl font-bold mb-6">Add a Toy</h1>

                    <form className="space-y-4" onSubmit={handleAddToy}>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold">Picture URL</label>
                            <input type="text" id="pictureUrl" name='pictureUrl' className="input input-bordered" />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold">Toy Name</label>
                            <input type="text" id="name" name='toyName' className="input input-bordered"  />
                        </div>

                       

                        <div className="flex flex-col">
                            <label  className="text-sm font-semibold">Sub-category</label>
                            <select id="subCategory" name='subCategory' className="select select-bordered">
                                {/* <option value="">Select Sub-category</option> */}
                                <option value="car">Car</option>
                                <option value="house">House</option>
                                <option value="cycle">Cycle</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label  className="text-sm font-semibold">Price</label>
                            <input type="number" id="price" name='price' className="input input-bordered" />
                        </div>

                        <div className="flex flex-col">
                            <label   className="text-sm font-semibold">Rating</label>
                            <input type="number" name='rating' id="rating" step="0.1" min="0" max="5" className="input input-bordered" />
                        </div>

                        <div className="flex flex-col">
                            <label  className="text-sm font-semibold">Available Quantity</label>
                            <input type="number" name='availableQuantity' id="quantity" className="input input-bordered" />
                        </div>

                        <div className="flex flex-col">
                            <label  className="text-sm font-semibold">Detail Description</label>
                            <textarea id="description" name='detailDescription' className="textarea textarea-bordered"></textarea>
                        </div>

                        <div className="flex flex-col">
                            <label  className="text-sm font-semibold">Seller Name</label>
                            <input type="text" id="sellerName" value={user.displayName} readOnly className="input input-bordered" />
                        </div>

                        <div className="flex flex-col">
                            <label  className="text-sm font-semibold">Seller Email</label>
                            <input type="email" id="sellerEmail" value={user.email} readOnly className="input input-bordered" />
                        </div>

                        <button type="submit" className="btn btn-primary">Add Toy</button>
                    </form>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddToy;