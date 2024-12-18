export const GridView = ({ data, theme }) => (
  <div className="container mx-auto grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
    {data.map(([id, ele]) => (
      <div
        key={id}
        className={`${theme ? 'dark' : 'light'} transition-colors duration-300 shadow-lg rounded-tl-[5.5rem] rounded-lg p-6 flex hover:shadow-2xl transition-shadow overflow-hidden border border-gray-400 `}
      >
        <img
          src={ele.imageUrl || "https://img.freepik.com/free-vector/artificial-intelligence-face-recognition_52683-10120.jpg"}
          alt={ele.name}
          className="w-42 h-44 rounded-full border-2 border-white relative -top-6 -left-6 border-gray-900 mb-4 shadow-lg"
        />
        <ul className="text-center space-y-2">
          <li><b>Name: </b> {ele.name}</li>
          <li><b>Email: </b> {ele.email}</li>
          <li><b>Department: </b> {ele.department}</li>
          <li><b>DOJ: </b> {ele.date}</li>
          <li><b>Salary: </b> {ele.salary}</li>
        </ul>
      </div>
    ))}
  </div>
);
