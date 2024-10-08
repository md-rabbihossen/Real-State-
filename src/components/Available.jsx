
const properties = [
  {
    id: 1,
    name: "Renaissance Hotel",
    price: "BDT 20000.00",
    image: "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 2,
    name: "Dhaka Regency Hotel",
    price: "BDT 25000.00",
    image: "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 3,
    name: "Platinum Grand Hotel",
    price: "BDT 30000.00",
    image: "https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
    bedrooms: 3,
    bathrooms: 3,
  },
  {
    id: 4,
    name: "The Westin Dhaka",
    price: "BDT 35000.00",
    image: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 5,
    name: "Hotel Sarina",
    price: "BDT 40000.00",
    image: "https://plus.unsplash.com/premium_photo-1674676471380-1258cb31b3ac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    bedrooms: 4,
    bathrooms: 4,
  },
];

export default function available()  {
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="p-4 bg-white rounded-lg border border-gray-600/10">
              <img src={property.image} alt={property.name} />
              <div className="p-6">
                <h4 className="text-2xl font-bold cursor-pointer">{property.name}</h4>
                <div className="mt-2">
                  <span className="text-xl font-extrabold text-blue-600">{property.price}</span> /M
                </div>
              </div>
              <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z" />
                  </svg>
                  <p><span className="font-bold text-gray-900">{property.bedrooms}</span> Bedrooms</p>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 3.47 20h12.69a1.5 1.5 0 0 1 1.16 2.61A3.01 3.01 0 0 0 15.52 20H3.48zm3.55-3a4.5 4.5 0 0 1 1.93-1.27c.2.03.4.06.62.09h9.56a1.5 1.5 0 0 1 1.34.86l.73 1.48-1.27.63a4.5 4.5 0 0 1-5.23-1.08l-2.2-4.4z" />
                  </svg>
                  <p><span className="font-bold text-gray-900">{property.bathrooms}</span> Bathrooms</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

