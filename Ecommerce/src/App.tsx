import useRouteElement from './useRouteElement'
import 'antd/dist/reset.css'

function App() {
  const routeElements = useRouteElement()
  return <div>{routeElements}</div>
}

export default App
