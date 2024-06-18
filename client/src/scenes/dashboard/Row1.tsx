
import DashboardBox from "../../components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
type Props = {}
console.log("hello")
const Row1 = () => {
  
  const {data}= useGetKpisQuery();
  console.log("VITE_BASE_URL:", import.meta.env.VITE_BASE_URL);
  console.log("data:", data) ;

  
    return (
      <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
      
      
      
      </>
    )
  
}



export default Row1