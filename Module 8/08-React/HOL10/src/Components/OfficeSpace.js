import React from "react";

function OfficeSpace() {

    const offices = [

        {
            Name: "DBS",
            Rent: 50000,
            Address: "Chennai",
            Image: "https://via.placeholder.com/250"
        },

        {
            Name: "Infosys",
            Rent: 75000,
            Address: "Hyderabad",
            Image: "https://via.placeholder.com/250"
        },

        {
            Name: "TCS",
            Rent: 55000,
            Address: "Bangalore",
            Image: "https://via.placeholder.com/250"
        }

    ];

    return (

        <div>

            <h1>Office Space, at Affordable Range</h1>

            {

                offices.map((office, index) => (

                    <div key={index}>

                        <img
                            src={office.Image}
                            alt="Office Space"
                            width="250"
                            height="200"
                        />

                        <h2>Name: {office.Name}</h2>

                        <h3
                            style={{
                                color:
                                    office.Rent < 60000
                                        ? "red"
                                        : "green"
                            }}
                        >
                            Rent: Rs. {office.Rent}
                        </h3>

                        <h3>Address: {office.Address}</h3>

                        <hr />

                    </div>

                ))

            }

        </div>

    );

}

export default OfficeSpace;