import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className="w-64 h-screen fixed left-0 top-0 bg-gray-100 p-6 shadow-lg">
			<nav>
				<ul className="space-y-4">
					<li>
						<Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">
							Log Time Wasted
						</Link>
					</li>
					<li>
						<Link to="/statistics" className="text-gray-700 hover:text-gray-900 font-medium">
							Statistics
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;