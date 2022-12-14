import Category from "../components/Category";
import { useOptionsDispatch } from "../context/ContextProvider";
import {
  triviaCategories1,
  triviaCategories2,
  triviaCategories3,
} from "../store/constants";

function Categories() {
  const optionDispatch = useOptionsDispatch();
  return (
    <div>
      <h1 className="text-center font-bold text-2xl p-3 m-3 text-slate-700 dark:text-slate-300">
        Choose a category
      </h1>
      <div className="flex justify-center items-center mt-3">
        <div className="lg:grid lg:grid-cols-3  justify-center">
          <div className="border-2 border-slate-300 dark:border-slate-700 rounded-md p-1.5 my-2.5 lg:mx-2.5  shadow-md">
            {triviaCategories1.map((category) => {
              return (
                <Category
                  key={category.id}
                  category={category}
                  dispatch={optionDispatch}
                />
              );
            })}
          </div>
          <div className="border-2  border-slate-300 dark:border-slate-700 rounded-md p-1.5 my-2.5 lg:mx-2.5  shadow-md">
            {triviaCategories2.map((category) => {
              return (
                <Category
                  key={category.id}
                  category={category}
                  dispatch={optionDispatch}
                />
              );
            })}
          </div>
          <div className="border-2  border-slate-300 dark:border-slate-700 rounded-md p-1.5 my-2.5 lg:mx-2.5 shadow-md">
            {triviaCategories3.map((category) => {
              return (
                <Category
                  key={category.id}
                  category={category}
                  dispatch={optionDispatch}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
