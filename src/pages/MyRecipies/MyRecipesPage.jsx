import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { MyRecipe } from '../../components/MyRecipe/MyRecipe';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
// import { getMyRecipesAPI } from '../../services/API/Recipes';
// import { deleteMyRecipe } from '../../redux/opertions';
import {
  RecipeList,
  FavoritePageThumb,
  FailNotification,
  Container,
} from './MyRecipesPage.Styled';
function fetchData() {
  return getMyRecipesAPI().then(data => {
    return data.data;
  });
}
const MyRecipesPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };
  return (
    <Container>
      <MainPageTitle value="My recipes"></MainPageTitle>
      {data.length > 0 ? (
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
  );
};
export default MyRecipesPage;