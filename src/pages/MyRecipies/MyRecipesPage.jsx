import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MainTitle } from '../../components/MainPageTittle/MainPageTittle';
// import { useSelector } from 'react-redux';
import { MyRecipe } from '../../components/MyRecipies/MyRecipe';
import Footer from '../../components/footer/footer';

// to jest podpięcie  tylko po to zeby nie krzyczało do napisania jest logika pobierania danych z endpointu jak będzie ju gotowy. Tak samo deleteRecipe 
import { getMyRecipesAPI } from '../../api/myRecipies';
import { deleteMyRecipe } from '../../api/myRecipies';


import {  RecipeList,
  FavoritePageThumb,
  FailNotification,
  Container, } from './MyRecipesPage.Styled';

function fetchData() {
  return getMyRecipesAPI().then(data => {
    return data.data;
  });
}
const MyRecipesPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, ] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData().then(data => {
      setData(data);
    });
  }, []);
  const handleDelete = async recipeId => {
    await dispatch(deleteMyRecipe({ recipeId }));
    fetchData().then(data => setData(data));
  };
  const itemsPerPage = 4;

// po podłączeniu się do do danych, mozna okomentowac, inczaj  wywala błąd z okazji"length" 

  //  const totalPages = Math.ceil(data.length / itemsPerPage);
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };
  return (
    <>
    <Container>
<MainTitle>My Recipes</MainTitle>
      {data && data.length > 0 ? (
        <>
          <FavoritePageThumb>
            <RecipeList>
              {getPaginatedData().map(recipe => (
                <MyRecipe
                  key={recipe._id}
                  recipe={recipe}
                  onDelete={handleDelete}
                />
              ))}
            </RecipeList>
          </FavoritePageThumb>
          {/* dodac paginacje */}
        </>
      ) : (
        <FailNotification>
          Sorry, you haven't added any recipes yet
        </FailNotification>
      )}
    </Container>
    <Footer/>
    </>
  );
};
export default MyRecipesPage;