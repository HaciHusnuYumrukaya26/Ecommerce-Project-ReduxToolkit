import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="me-2 bg-gray-100 p-6 max-h-screen top-16 sticky">
      <div className="w-[200px] lg:w-[150px]  border-b-4  pt-2 text-base lg:text-lg font-bold">KATEGORİ</div>
      {categories?.map((category, i) => (
        <div key={i} onClick={()=>setCategory(category)} className="cursor-pointer hover:bg-gray-200 p-2">{category}</div>
      ))}
    </div>
  );
};

export default Category;
