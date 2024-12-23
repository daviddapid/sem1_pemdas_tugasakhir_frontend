import { Navigate, Outlet, useNavigate } from "react-router";

export default function AuthGuard() {
	const secretKey = sessionStorage.getItem("secretKey");
	const navigate = useNavigate();

	if (!secretKey) {
		return <Navigate to={"/login"} />;
	}

	return <Outlet />;
}
