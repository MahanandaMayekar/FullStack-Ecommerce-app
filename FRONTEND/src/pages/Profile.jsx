
const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("user")) || {};
  const {
    name = "User Name",
    email = "user@example.com",
    id = "N/A",
  } = userData;

 
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {/* Profile Picture & Name */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white text-2xl font-bold rounded-full">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-500 text-sm">Customer</p>
        </div>
      </div>

          {/* Personal Information */}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          
        </div>

        {/* Name & Customer Type */}
        <div className="grid grid-cols-2 gap-4 mt-2">
          <input
            type="text"
            value={name}
            readOnly
            className="w-full p-2 border rounded bg-gray-100 text-gray-700"
          />
          <input
            type="text"
            value="Customer"
            readOnly
            className="w-full p-2 border rounded bg-gray-100 text-gray-700"
          />
        </div>
      </div>

      {/* Email Address */}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Email Address</h3>
         
        </div>
        <input
          type="text"
          value={email}
          readOnly
          className="w-full mt-2 p-2 border rounded bg-gray-100 text-gray-700"
        />
      </div>

      {/* FAQs Section */}
      <h3 className="text-lg font-semibold mt-6">FAQs</h3>
    </div>
  );
};

export default Profile;
