import { useParams } from "react-router-dom";
import { Categories } from "../../components/Categories/Categories/Categories";
import { MainTitle } from "../../components/MainPageTittle/MainPageTittle";


export const CategoryPage = () => {

  return (
    <>
    <MainTitle>Categories</MainTitle>
<Categories/>
</>
  ) 
}
