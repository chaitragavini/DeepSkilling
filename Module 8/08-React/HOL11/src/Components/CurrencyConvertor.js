import React, { useState } from "react";

function CurrencyConvertor() {

    const [amount, setAmount] = useState("");

    const [currency, setCurrency] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        const euro = amount / 90;

        setCurrency(euro.toFixed(2));

        alert(

            "Converting to Euro Amount is " +

            euro.toFixed(2)

        );

    };

    return (

        <div>

            <h1>

                Currency Convertor!!!

            </h1>

            <form onSubmit={handleSubmit}>

                <label>

                    Amount

                </label>

                <input

                    type="number"

                    value={amount}

                    onChange={(e) =>

                        setAmount(e.target.value)

                    }

                />

                <br /><br />

                <label>

                    Currency

                </label>

                <input

                    value={currency}

                    readOnly

                />

                <br /><br />

                <button>

                    Submit

                </button>

            </form>

        </div>

    );

}

export default CurrencyConvertor;