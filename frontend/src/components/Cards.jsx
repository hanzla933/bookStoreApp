import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 p-3 my-3">
        <div className="card bg-base-100 w-80 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1727709894~exp=1727713494~hmac=58cc6657ccca6a8c5b67aa3d032d42d70f68e76ed88bc7a0af1f29d5e5259f63&w=740"
              alt="books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="px-2 py-1 rounded-full border-[2px] cursor-pointer hover:text-white px-2 py-1 duration-200 hover:bg-pink-500">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
