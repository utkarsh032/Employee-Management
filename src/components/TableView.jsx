export const TableView = ({ data, theme }) => (
  <div className="container mx-auto shadow-lg rounded-lg py-6 ">
    <table className="min-w-full table-auto">
      <thead className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <tr>
          <th className="py-2 px-4">Avatar</th>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Email</th>
          <th className="py-2 px-4">Department</th>
          <th className="py-2 px-4">DOB</th>
          <th className="py-2 px-4">Salary</th>
        </tr>
      </thead>
      <tbody>
        {data.map(([id, ele]) => (
          <tr key={id} className="text-center border-b hover:bg-gray-700">
            <td><img src={ele.imageUrl || "https://img.lovepik.com/free-png/20220125/lovepik-artificial-intelligence-png-image_401746350_wh1200.png"} alt={ele.name} className="w-12 h-12 rounded-full" /></td>
            <td>{ele.name}</td>
            <td>{ele.email}</td>
            <td>{ele.department}</td>
            <td>{ele.date}</td>
            <td>{ele.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
