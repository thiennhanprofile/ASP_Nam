import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaEdit,
  FaTrash,
  FaToggleOn,
  FaEye,
  FaToggleOff,
  FaTrashAlt,
} from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../../../layouts/backend/Header";

const UserIndex = () => {
  const [users, setUsers] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [countall, setCountAll] = useState(0);
  const [counttrash, setCountTrash] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7255/api/Users/GetUsers"
      );
      setUsers(response.data);
      setCountAll(response.data.length);
      // Calculate counttrash here
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleStatus = async (id) => {
    try {
      const userToUpdate = users.find((user) => user.UserId === id);
      const updatedUser = { ...userToUpdate, IsAdmin: !userToUpdate.IsAdmin };
      const response = await axios.put(
        "https://localhost:7255/api/Users/UpdateUser",
        updatedUser
      );
      if (response.status === 200) {
        fetchData(); // Refetch data after update
        toast.success("User status updated successfully");
      }
    } catch (error) {
      console.error("Error updating user status:", error);
      toast.error("Error updating user status");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://localhost:7255/api/Users/DeleteUser?id=${id}`
      );
      if (response.status === 200) {
        fetchData(); // Refetch data after delete
        toast.success("User deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user");
    }
  };

  const handleCheckboxChange = (index) => {
    // Logic to handle checkbox change
  };

  return (
    <>
    <Header/>
    <main id="main" className="main">
      <section className="section dashboard">
        <div className="row">
          <div className="content-wrapper">
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-12">
                    <h3 className="d-inline">Tất cả thành viên</h3>
                  </div>
                </div>
              </div>
            </section>
            <section className="content p-3">
              <div className="card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <ul className="manager">
                        <li>
                          <Link to="/admin/user/index">
                            Tất cả ({countall})
                          </Link>
                        </li>
                        <li>
                          <Link to="/admin/user/trash">Rác ({counttrash})</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 text-end">
                      <Link
                        to="/admin/user/store"
                        className="btn btn-sm btn-primary"
                      >
                        Thêm thành viên
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <table className="table table-bordered" id="mytable">
                    <thead>
                      <tr>
                        <th>Họ</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th className="text-center" style={{ width: "30px" }}>
                          ID
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr
                          className="datarow"
                          key={index}
                          onClick={() => handleCheckboxChange(index)}
                        >
                          <td>
                            <div className="name">
                              <Link to={`/admin/user/edit/${user.userId}`}>
                                {user.firstName}
                              </Link>
                            </div>
                            <div className="function_style">
                              <Link to="#" className="px-1 text-success"></Link>
                              <Link
                                to={`/admin/user/edit/${user.userId}`}
                                className="px-1 text-primary"
                              >
                                <FaEdit />
                              </Link>
                              <Link
                                to={`/admin/user/show/${user.userId}`}
                                className="px-1 text-info"
                              >
                                <FaEye />
                              </Link>
                              <button
                                onClick={() => handleDelete(user.userId)}
                                className="border-0 px-1 text-danger"
                              >
                                <FaTrashAlt />
                              </button>
                            </div>
                          </td>
                          <td>{user.lastName}</td>
                          <td>{user.email}</td>
                          <td className="text-center">{user.userId}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default UserIndex;
