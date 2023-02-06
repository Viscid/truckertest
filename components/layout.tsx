import React, { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
	return (
		<div className="bg-slate-400">
			{children}
		</div>
	);
};

export default Layout;