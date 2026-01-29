import { useRouteError } from "react-router-dom"
function Error(){
    const err = useRouteError()
    console.log(err)
    return (
        <div className="">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>{err.statusText || err.message}</p>
            <h3>{err.status}</h3>
            <h4>{err.data}</h4>
        </div>
    )
}
export default Error;