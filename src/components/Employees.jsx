import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Filters } from './Filters';
import { ThemeContext } from '../context/ThemeContext';
import { GridView } from './GridView';
import { TableView } from './TableView';

export default function Employees() {
  const [dataState, setDataState] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { theme, view, toggleView } = useContext(ThemeContext);

  async function getData() {
    try {
      const response = await axios.get(
        'https://myapp-25758-default-rtdb.firebaseio.com/employees.json'
      );
      const employees = Object.entries(response.data);
      setDataState(employees);
      setFilteredData(employees);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleFilterChange = (filterValue) => {
    if (filterValue) {
      const filtered = dataState.filter((employee) =>
        employee[1].department.toLowerCase().includes(filterValue.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(dataState);
    }
  };

  // Sort change handler
  const handleSortChange = (sortValue) => {
    let sortedData = [...filteredData];
    switch (sortValue) {
      case 'name-asc':
        sortedData.sort((a, b) => a[1].name.localeCompare(b[1].name));
        break;
      case 'name-desc':
        sortedData.sort((a, b) => b[1].name.localeCompare(a[1].name));
        break;
      case 'salary-asc':
        sortedData.sort((a, b) => a[1].salary - b[1].salary);
        break;
      case 'salary-desc':
        sortedData.sort((a, b) => b[1].salary - a[1].salary);
        break;
      default:
        break;
    }
    setFilteredData(sortedData);
  };

  return (
    <div className={`${theme ? 'dark' : 'light'}`}>
      <Filters
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        onViewToggle={toggleView}
      />

      {view ? (
        <TableView data={filteredData} theme={theme} />
      ) : (
        <GridView data={filteredData} theme={theme} />
      )}
    </div>
  );
}
