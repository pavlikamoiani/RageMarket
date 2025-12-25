import React, { useState } from 'react'
import { MdEdit, MdDelete, MdClose } from "react-icons/md";

const CategoriesPage = () => {
	const [categories, setCategories] = useState([
		{ id: 1, name: 'Electronics', slug: 'electronics', items: 154 },
		{ id: 2, name: 'Laptops', slug: 'laptops', items: 82 },
		{ id: 3, name: 'Smartphones', slug: 'smartphones', items: 45 },
		{ id: 4, name: 'Accessories', slug: 'accessories', items: 210 },
	]);

	const [modal, setModal] = useState({ isOpen: false, type: '', data: null });
	const [formData, setFormData] = useState({ name: '', slug: '' });

	const openModal = (type, data = null) => {
		setModal({ isOpen: true, type, data });
		if (type === 'edit' && data) {
			setFormData({ name: data.name, slug: data.slug });
		} else {
			setFormData({ name: '', slug: '' });
		}
	};

	const closeModal = () => setModal({ isOpen: false, type: '', data: null });

	const handleSubmit = (e) => {
		e.preventDefault();
		if (modal.type === 'add') {
			const newCat = { id: Date.now(), ...formData, items: 0 };
			setCategories([...categories, newCat]);
		} else if (modal.type === 'edit') {
			setCategories(categories.map(c => c.id === modal.data.id ? { ...c, ...formData } : c));
		}
		closeModal();
	};

	const handleDelete = () => {
		setCategories(categories.filter(c => c.id !== modal.data.id));
		closeModal();
	};

	return (
		<div className="p-6">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-2xl font-bold text-gray-800">Category Management</h2>
				<button
					onClick={() => openModal('add')}
					className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
				>
					+ Add Category
				</button>
			</div>

			<div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
				<table className="w-full text-left">
					<thead className="bg-gray-50 border-b border-gray-100">
						<tr>
							<th className="px-6 py-4 text-sm font-semibold text-gray-600">ID</th>
							<th className="px-6 py-4 text-sm font-semibold text-gray-600">Name</th>
							<th className="px-6 py-4 text-sm font-semibold text-gray-600">Slug</th>
							<th className="px-6 py-4 text-sm font-semibold text-gray-600">Items</th>
							<th className="px-6 py-4 text-sm font-semibold text-gray-600 text-center">Actions</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-100">
						{categories.map((cat) => (
							<tr key={cat.id} className="hover:bg-gray-50 transition">
								<td className="px-6 py-4 text-sm text-gray-600">{cat.id}</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800">{cat.name}</td>
								<td className="px-6 py-4 text-sm text-gray-500">{cat.slug}</td>
								<td className="px-6 py-4 text-sm text-gray-600">{cat.items}</td>
								<td className="px-6 py-4 text-sm text-center">
									<button onClick={() => openModal('edit', cat)} className="text-blue-600 mr-2 bg-blue-50 p-2 rounded-full cursor-pointer hover:bg-blue-100"><MdEdit size={18} /></button>
									<button onClick={() => openModal('delete', cat)} className="text-red-600 bg-red-50 p-2 rounded-full cursor-pointer hover:bg-red-100"><MdDelete size={18} /></button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{modal.isOpen && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
					<div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
						<button onClick={closeModal} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"><MdClose size={24} /></button>

						{modal.type === 'delete' ? (
							<div className="text-center">
								<h3 className="text-xl font-bold mb-2">Confirm Delete</h3>
								<p className="text-gray-500 mb-6">Are you sure you want to delete "{modal.data?.name}"?</p>
								<div className="flex gap-3 justify-center">
									<button onClick={closeModal} className="px-6 py-2 border border-gray-300 rounded-lg">Cancel</button>
									<button onClick={handleDelete} className="px-6 py-2 bg-red-600 text-white rounded-lg">Delete</button>
								</div>
							</div>
						) : (
							<form onSubmit={handleSubmit}>
								<h3 className="text-xl font-bold mb-4">{modal.type === 'add' ? 'Add New Category' : 'Edit Category'}</h3>
								<div className="space-y-4">
									<div>
										<label className="block text-sm font-medium mb-1">Name</label>
										<input
											required
											className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
											value={formData.name}
											onChange={(e) => setFormData({ ...formData, name: e.target.value })}
										/>
									</div>
									<div>
										<label className="block text-sm font-medium mb-1">Slug</label>
										<input
											required
											className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
											value={formData.slug}
											onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
										/>
									</div>
									<button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition mt-4">
										{modal.type === 'add' ? 'Create Category' : 'Save Changes'}
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

export default CategoriesPage;