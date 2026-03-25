import React from "react";

const FormContactMe: React.FC = () => {
	return (
		<div className="h-auto mt-12 md:mt-0">
			<form method="submit" className="pl-8 pt-4 md:pl-0 md:pt-0">
				<div className="md:grid w-3/5 md:w-2/5 mb-4">
					<label htmlFor="name">Name: </label>
					<input type="text" name="name" className="border" required />
				</div>
				<div className="md:grid w-3/5 md:w-2/5 mb-4">
					<label htmlFor="email">Email: </label>
					<input type="text" name="email" className="border" required />
				</div>
				<div className="grid w-4/5 md:w-4/5 mb-4">
					<label htmlFor="description">Description: </label>
					<textarea name="description" rows={5} cols={30} className="border" required />
				</div>
				<div className="flex justify-start ">
					<button
						type="submit"
						className="hover:cursor-pointer hover:text-amber-300 mr-4"
					>
						Cancel
					</button>
					<button
						type="submit"
						className="border p-2 hover:bg-blue-400 hover:cursor-pointer"
					>
						Send Email
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormContactMe;
