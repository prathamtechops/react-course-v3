import { useAppContext } from "./Navbar";

export function UserContainer() {
    const { user, logout } = useAppContext();
    return (
        <div className="user-container">
            {user ? (
                <>
                    {" "}
                    <p>Hello {user?.name}</p>
                    <button class="btn" onClick={logout}>
                        Logout
                    </button>{" "}
                </>
            ) : (
                <p>Please Login</p>
            )}
        </div>
    );
}
