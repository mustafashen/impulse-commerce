import { createServerContext, useContext } from "react"

type CategoryType = {
    categoryID: string,
    categoryName: string,
    subCategories?: CategoryType[]
}

type CategoriesContextType = {
    categories: CategoryType
}

const CategoriesContext = createServerContext<{categories: CategoryType}>('CategoriesContext', {categories: {categoryID: "", categoryName: ""}})

export function CategoriesContextProvider({children} : {children: React.ReactElement}) {
    
    const categories = {
        categoryID: "all",
        categoryName: "All Products",
        subCategories: [
          {categoryID: "ctg1", categoryName: "Category 1", subCategories: [{categoryID: "ctg1.1", categoryName: "Category 1.1", subCategories: [{categoryID: "ctg1.1.1", categoryName: "Category 1.1.1", subCategories: [{categoryID: "ctg1.1.1.1", categoryName: "Category 1.1.1.1"}]}]},{categoryID: "ctg1.2", categoryName: "Category 1.2"},{categoryID: "ctg1.3", categoryName: "Category 1.3"}]},
          {categoryID: "ctg2", categoryName: "Category 2", subCategories: [{categoryID: "ctg2.1", categoryName: "Category 2.1"},{categoryID: "ctg2.2", categoryName: "Category 2.2"},{categoryID: "ctg2.3", categoryName: "Category 2.3"}]},
          {categoryID: "ctg3", categoryName: "Category 3", subCategories: [{categoryID: "ctg3.1", categoryName: "Category 3.1"},{categoryID: "ctg3.2", categoryName: "Category 3.2", subCategories: [{categoryID: "ctg3.2.1", categoryName: "Category 3.2.1"}]},{categoryID: "ctg3.3", categoryName: "Category 3.3"}]},
        ]
    }

    const CategoriesContextStore: CategoriesContextType = {
        categories
    }
    
    return (
        <CategoriesContext.Provider value={CategoriesContextStore}>
            {children}
        </CategoriesContext.Provider>
    )
    

}

export const useCategoriesContext = () => useContext(CategoriesContext)