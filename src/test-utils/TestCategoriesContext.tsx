import { createContext, useContext } from "react"

type CategoryType = {
    id: string,
    name: string,
    subCategories?: CategoryType[]
}

type CategoriesContextType = {
    categories: CategoryType,
    setCategories?: React.Dispatch<React.SetStateAction<CategoryType>>
}

const CategoriesContext = createContext<CategoriesContextType>({categories: {id: "", name: ""}})

export function CategoriesContextProvider({children} : {children: React.ReactElement}) {
    
    const categories = {
        id: "all",
        name: "All Products",
        subCategories: [
          {id: "ctg1", name: "Category 1", subCategories: [{id: "ctg1.1", name: "Category 1.1", subCategories: [{id: "ctg1.1.1", name: "Category 1.1.1", subCategories: [{id: "ctg1.1.1.1", name: "Category 1.1.1.1"}]}]},{id: "ctg1.2", name: "Category 1.2"},{id: "ctg1.3", name: "Category 1.3"}]},
          {id: "ctg2", name: "Category 2", subCategories: [{id: "ctg2.1", name: "Category 2.1"},{id: "ctg2.2", name: "Category 2.2"},{id: "ctg2.3", name: "Category 2.3"}]},
          {id: "ctg3", name: "Category 3", subCategories: [{id: "ctg3.1", name: "Category 3.1"},{id: "ctg3.2", name: "Category 3.2", subCategories: [{id: "ctg3.2.1", name: "Category 3.2.1"}]},{id: "ctg3.3", name: "Category 3.3"}]},
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