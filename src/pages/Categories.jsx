import Category from "../components/Category";
import {
  triviaCategories1,
  triviaCategories2,
  triviaCategories3,
} from "../store/categories";

function Categories({ dispatch }) {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl p-3 m-3 text-sky-800">
        Choose a category
      </h1>
      <div className="flex justify-center items-center mt-3">
        <div className="lg:grid lg:grid-cols-3  justify-center">
          <div className="border-2 rounded-md p-1.5 my-2.5 lg:mx-2.5  shadow-md">
            {triviaCategories1.map((category) => {
              return (
                <Category
                  key={category.id}
                  category={category}
                  dispatch={dispatch}
                />
              );
            })}
          </div>
          <div className="border-2 rounded-md p-1.5 my-2.5 lg:mx-2.5  shadow-md">
            {triviaCategories2.map((category) => {
              return (
                <Category
                  key={category.id}
                  category={category}
                  dispatch={dispatch}
                />
              );
            })}
          </div>
          <div className="border-2 rounded-md p-1.5 my-2.5 lg:mx-2.5 shadow-md">
            {triviaCategories3.map((category) => {
              return (
                <Category
                  key={category.id}
                  category={category}
                  dispatch={dispatch}
                />
              );
            })}
          </div>
          {/* <div>
        {triviaCategories4.map((category) => {
          return (
            <Category
            key={category.id}
            category={category}
            dispatch={dispatch}
            />
            );
          })}
        </div> */}
        </div>
      </div>
    </div>
  );
}
export default Categories;
