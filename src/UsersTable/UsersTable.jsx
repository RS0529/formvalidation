import axios from 'axios'
import React,{useState, useEffect} from 'react'
import DataTable from 'react-data-table-component';




 const columns = [
   {
     name: " ID",
     selector: (row) => row.id,
     grow: 0.5,
   },
   {
     name: "Name",
     selector: (row) => row.name,
     sortable: true,
   },
   {
     name: "Email",
     selector: (row) => row.email,
     sortable: true,
   },
   {
     name: "Password",
     selector: (row) => row.password,
   },
   {
     name: "UserName",
     selector: (row) => row.username,
     sortable: true,
   },
   {
     name: "Mobile No",
     selector: (row) => row.mobileNum,
   },
 ];

const UsersTable = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [filterUsers, setFilterUsers] = useState([]);


     const getUsers = async () => {
       try {
         const response = await axios.get(
           "https://ixonotest.herokuapp.com/api/User/get-profiles"
         );
         console.log(response.data);
         setUsers(response.data);
         setFilterUsers(response.data);
       } catch (error) {
         console.log(error);
       }
     };

     useEffect(() => {
       getUsers();
     }, []);

     useEffect(() => {
       const result = users.filter((user) => {
         return user.name.toLowerCase().match(search.toLowerCase());
       });
       setFilterUsers(result);
     }, [search]);




  return (
    <>
      <DataTable
        title="Users List"
        columns={columns}
        // theme="solarized"
        // data={users}
        data={filterUsers}
        pagination
        striped
        fixedHeader
        fixedHeaderScrollHeight="450px"
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search Users here.."
            className="w-25 form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      />
    </>
  );
}

export default UsersTable
