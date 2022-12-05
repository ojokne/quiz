import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../store/constants";
function Category({ category, dispatch }) {
  const navigate = useNavigate();
  function handleChangeCategory() {
    dispatch({ type: ACTIONS.CHANGE_CATEGORY, category: category.id });
    navigate("/difficulty");
  }
  return (
    <div>
      <button
        className="p-2 m-2 bg-sky-800 text-slate-200 w-64 lg:w-60  font-medium rounded-md hover:ring-4 hover:ring-offset-2 hover:scale-95"
        id={category.id}
        onClick={() => handleChangeCategory()}
      >
        {category.name}
      </button>
    </div>
  );
}

export default Category;
