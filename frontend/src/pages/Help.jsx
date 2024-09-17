const Help = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Bike Rental Help & Guide
      </h1>

      {/* Section 1: Booking a Bike */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">How to Book a Bike</h2>
        <div className="flex gap-6 items-center">
          {/* Booking Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4o09pxTXbcz8pFpTwFeqO7FSEllf03p-bw&s"
            alt="Booking a Bike"
            className="w-32 h-32 object-cover rounded-lg"
          />
          {/* Booking Details */}
          <p className="text-gray-700">
            Booking a bike is simple! Just browse the available bikes, select
            the one you like, choose your rental duration, and confirm your
            booking. You’ll receive a confirmation with the pickup location and
            time.
          </p>
        </div>
      </section>

      {/* Section 2: Payment Process */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Payment Process</h2>
        <div className="flex gap-6 items-center">
          {/* Payment Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvX7syJZ-03KqWX6K8qo1RbW__tm7KndSVm1H8MnmaQt1RZDsbqmG-LQmnKMfy-v5Aug0&usqp=CAU"
            alt="Payment Process"
            className="w-32 h-32 object-cover rounded-lg"
          />
          {/* Payment Details */}
          <p className="text-gray-700">
            Payments can be made via credit/debit cards, digital wallets, or at
            the pickup point. We ensure that all payments are secure and
            processed instantly. Please make sure you receive a payment
            confirmation.
          </p>
        </div>
      </section>

      {/* Section 3: Safety Guidelines */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Safety Guidelines</h2>
        <div className="flex gap-6 items-center">
          {/* Safety Image */}
          <img
            src="https://t4.ftcdn.net/jpg/05/69/59/25/360_F_569592505_xki1DiD7PZUFzLD4NvYvWHccQW5cCWZi.jpg"
            alt="Safety Guidelines"
            className="w-32 h-32 object-cover rounded-lg"
          />
          {/* Safety Details */}
          <p className="text-gray-700">
            Your safety is our priority. Please always wear a helmet and follow
            traffic rules. Ensure that the bike is in good condition before
            starting your ride. In case of an emergency, contact our support
            team immediately.
          </p>
        </div>
      </section>

      {/* Section 4: Returning the Bike */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Returning the Bike</h2>
        <div className="flex gap-6 items-center">
          {/* Returning Image */}
          <img
            src="https://img.freepik.com/premium-photo/good-idea-human-hand-passing-car-keys-another-hand-white-isolate_122647-303.jpg"
            alt="Returning the Bike"
            className="w-32 h-32 object-cover rounded-lg"
          />
          {/* Returning Details */}
          <p className="text-gray-700">
            Once your rental duration ends, return the bike to the designated
            drop-off point. Ensure the bike is in the same condition as it was
            when picked up. Late returns may incur additional charges.
          </p>
        </div>
      </section>

      {/* Section 5: Terms and Conditions */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Users must have a valid driver{"'"}s license to rent a bike.</li>
          <li>All rentals are subject to availability and prior booking.</li>
          <li>
            Any damages to the bike during the rental period are the
            responsibility of the renter.
          </li>
          <li>Late returns may be subject to additional fees.</li>
          <li>
            Follow all local traffic laws and safety guidelines during your
            ride.
          </li>
          <li>
            In case of an emergency, contact customer support immediately.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Help;
