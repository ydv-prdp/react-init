
import { useRouteError } from "react-router"


function Error() {
    const err= useRouteError();
  return (
    <div style={{color:"red"}}>{err.data}</div>
  )
}

export default Error