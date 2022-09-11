import { useOutletContext } from "react-router-dom";

const Dashboard = () => {

  const { data } = useOutletContext()
  const expenses = data.me.myExpenses

  return (
    <div className=" text-gray-600">
      <h1 className="text-lg mb-2">Dashboard</h1>
      <p className="font-light mb-6">You can see chart of your expenses here.</p>
      {
          !expenses[0] ?
            <p className="font-light text-sm">You have no expenses yet.</p>
          :
          <div>
            <div className="mb-6 lg:w-1/2">
             <p className="font-light text-sm">Your expenses chart base on time</p>
            </div>
            <div className="mb-6 lg:w-1/2">
             <p className="font-light text-sm">Your expenses chart base on tags</p>
            </div>
          </div>
      }     
    </div>
  )
}

export default Dashboard