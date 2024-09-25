import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/admin.css";
import Shoes1 from "../../img/shoes1.png";
import Shoes2 from "../../img/shoes2.png";

function Admin() {
    return (
        <div className='bodycustom'>
            <div className="sidebar" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <div className="admin-avatar">
                    <img src="https://via.placeholder.com/50" alt="Admin Avatar" className="avatar" />
                    <div className="ms-2">Admin</div>
                </div>
                <h4>Admin Menu</h4>
                <ul className="nav flex-column" id="adminTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="dashboard-tab" data-bs-toggle="tab" href="#dashboard" role="tab" aria-controls="dashboard" aria-selected="true">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="users-tab" data-bs-toggle="tab" href="#users" role="tab" aria-controls="users" aria-selected="false">Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="products-tab" data-bs-toggle="tab" href="#products" role="tab" aria-controls="products" aria-selected="false">Products</a>
                    </li>
                </ul>
            </div>
            <div className="content">
                <h1 className="text-center">Admin Page</h1>
                {/* Tab content */}
                <div className="tab-content mt-3" id="adminTabContent">
                    {/* Dashboard Tab */}
                    <div className="tab-pane fade show active" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        <h2>Dashboard</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card dashboard-card text-white bg-primary">
                                    <div className='card-header'>Total Users</div>
                                    <div className="card-body">
                                        <p className="card-text">2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card dashboard-card text-white bg-warning">
                                    <div className='card-header'>Total Products</div>
                                    <div className="card-body">
                                        <p className="card-text">2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card dashboard-card text-white bg-success">
                                    <div className='card-header'>Total Sales</div>
                                    <div className="card-body">
                                        <p className="card-text">$40.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="mt-4">
                            <h4>Recent Activity</h4>
                            <ul className="list-group">
                                <li className="list-group-item">User John Doe registered.</li>
                                <li className="list-group-item">Product 'Shoes 1' added.</li>
                                <li className="list-group-item">User Jane Smith updated their profile.</li>
                            </ul>
                        </div>

                        {/* Sales Chart Placeholder */}
                        <div className="mt-4">
                            <h4>Sales Overview</h4>
                            <div className="bg-light" style={{ height: '200px', border: '1px solid #ddd' }}>
                                {/* Placeholder for chart (You can integrate chart libraries here) */}
                                <p className="text-center pt-5">[Sales Chart Placeholder]</p>
                            </div>
                        </div>

                        {/* User Growth */}
                        <div className="mt-4">
                            <h4>User Growth</h4>
                            <div className="bg-light" style={{ height: '200px', border: '1px solid #ddd' }}>
                                {/* Placeholder for user growth chart */}
                                <p className="text-center pt-5">[User Growth Chart Placeholder]</p>
                            </div>
                        </div>
                    </div>
                    {/* Users Tab */}
                    <div className="tab-pane fade" id="users" role="tabpanel" aria-labelledby="users-tab">
                        <div className="d-flex justify-content-between mb-2">
                            <h2>Users</h2>
                            <div>
                                <button className="btn btn-success"><i className="bi bi-plus-circle" /> Add User</button>
                                <button className="btn btn-danger"><i className="bi bi-dash-circle" /> Remove User</button>
                            </div>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>john@example.com</td>
                                    <td>password123</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jane Smith</td>
                                    <td>jane@example.com</td>
                                    <td>mypassword</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Products Tab */}
                    <div className="tab-pane fade" id="products" role="tabpanel" aria-labelledby="products-tab">
                        <div className="d-flex justify-content-between mb-2">
                            <h2>Products</h2>
                            <div>
                                <button className="btn btn-success"><i className="bi bi-plus-circle" /> Add Product</button>
                                <button className="btn btn-danger"><i className="bi bi-dash-circle" /> Remove Product</button>
                            </div>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Fillo - XTREMA 3 RETRO</td>
                                    <td>$20.00</td>
                                    <td><img src={Shoes1} alt="Fillo - XTREMA 3 RETRO" className="img-fluid" width={100} /></td>
                                </tr>
                                <tr>
                                    <td>Nika - SPORTA X BROWN</td>
                                    <td>$20.00</td>
                                    <td><img src={Shoes2} alt="Nika - SPORTA X BROWN" className="img-fluid" width={100} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
