import React, { useState } from 'react'
import { MdEdit, MdDelete, MdClose } from "react-icons/md";

const UserPage = () => {
	const [users, setUsers] = useState([
		{ id: 1, name: 'Alex Johnson', email: 'alex@example.com', role: 'Admin' },
		{ id: 2, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Editor' },
		{ id: 3, name: 'Michael Brown', email: 'mike@example.com', role: 'User' },
	]);

	const [modal, setModal] = useState({ isOpen: false, type: '', data: null });
	const [formData, setFormData] = useState({ name: '', email: '', role: 'User' });

	const openModal = (type, data = null) => {
		setModal({ isOpen: true, type, data });
		if (type === 'edit' && data) {
			setFormData({ name: data.name, email: data.email, role: data.role });
		} else {
			setFormData({ name: '', email: '', role: 'User' });
		}
	};

	const closeModal = () => setModal({ isOpen: false, type: '', data: null });

	const handleSubmit = (e) => {
		e.preventDefault();
		if (modal.type === 'add') {
			setUsers([...users, { id: Date.now(), ...formData }]);
		} else if (modal.type === 'edit') {
			setUsers(users.map(u => u.id === modal.data.id ? { ...u, ...formData } : u));
		}
		closeModal();
	};

	const handleDelete = () => {
		setUsers(users.filter(u => u.id !== modal.data.id));
		closeModal();
	};

	return (
		<div className="p-6">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-2xl font-bold text-gray-800">User List</h2>
				<button
					onClick={() => openModal('add')}
					className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
				>
					+ Create User
				</button>
			</div>

			<div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
				<table className="w-full text-left">
					<thead className="bg-gray-50 border-b border-gray-100">
						<tr>
							<th className="px-6 py-4 text-sm font-semibold text-gray-600">User</th>
							<th className="px-6 py-4 text-sm font-semibold text-gray-600">Email</th>
							<th className="px-6 py-4 text-sm font-semibold text-gray-600">Role</th>
							<th className="px-6 py-4 text-sm font-semibold text-gray-600 text-center">Actions</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-100">
						{users.map((user) => (
							<tr key={user.id} className="hover:bg-gray-50 transition">
								<td className="px-6 py-4 text-sm font-medium text-gray-800">{user.name}</td>
								<td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
								<td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
								<td className="px-6 py-4 text-sm text-center">
									<button onClick={() => openModal('edit', user)} className="text-blue-600 mr-2 bg-blue-50 p-2 rounded-full cursor-pointer hover:bg-blue-100"><MdEdit size={18} /></button>
									<button onClick={() => openModal('delete', user)} className="text-red-600 bg-red-50 p-2 rounded-full cursor-pointer hover:bg-red-100"><MdDelete size={18} /></button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{modal.isOpen && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4 text-gray-900">
					<div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
						<button onClick={closeModal} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"><MdClose size={24} /></button>

						{modal.type === 'delete' ? (
							<div className="text-center">
								<h3 className="text-xl font-bold mb-2">Delete User</h3>
								<p className="text-gray-500 mb-6">Permanently remove {modal.data?.name}?</p>
								<div className="flex gap-3 justify-center">
									<button onClick={closeModal} className="px-6 py-2 border border-gray-300 rounded-lg">Cancel</button>
									<button onClick={handleDelete} className="px-6 py-2 bg-red-600 text-white rounded-lg">Confirm</button>
								</div>
							</div>
						) : (
							<form onSubmit={handleSubmit}>
								<h3 className="text-xl font-bold mb-4">{modal.type === 'add' ? 'Create New User' : 'Update User'}</h3>
								<div className="space-y-4">
									<div>
										<label className="block text-sm font-medium mb-1">Full Name</label>
										<input required className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
									</div>
									<div>
										<label className="block text-sm font-medium mb-1">Email</label>
										<input type="email" required className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
									</div>
									<div>
										<label className="block text-sm font-medium mb-1">Role</label>
										<select className="w-full border border-gray-300 rounded-lg p-2 outline-none" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
											<option value="Admin">Admin</option>
											<option value="Editor">Editor</option>
											<option value="User">User</option>
										</select>
									</div>
									<button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition mt-4">
										{modal.type === 'add' ? 'Add User' : 'Update User'}
									</button>
								</div>
							</form>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default UserPage;