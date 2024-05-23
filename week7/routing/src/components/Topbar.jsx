import { useNavigate } from "react-router-dom"
export function Topbar() {
    const navigate = useNavigate();
    return (
        <div style={{ background: "black", color: "white" }}>
            <h1 >Hiii This is the topbar</h1>
            <button onClick={() => {
                // window.location.href = "/"
                navigate('/')
            }}> Landing Page</button>
            <button onClick={() => {
                // window.location.href = "/dashboard"
                navigate('/dashboard')
            }}> Dashboard Page</button>
        </div>

    )
}