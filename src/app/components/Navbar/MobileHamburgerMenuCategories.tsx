"use client"

import Link from "next/link";
import { useCategoriesContext } from "@/app/components/Navbar/context/CategoriesContext";
import { Suspense, useReducer } from "react";
import Skeleton from "react-loading-skeleton";

type CategoryType = {
  id: string,
  name: string,
  subCategories?: CategoryType[]
}

export default function MobileHamburgerMenuCategories(): React.ReactElement {
  const {categories} = useCategoriesContext()
  
  function generateGroupTree(initialArg: CategoryType) {
		// start from the root
    // check if category has children
    // if it has, give it a group visibility state
    // iterate each of its children
    // recall the function on them

		let groupVisibility: {[id: string]: string} = {}
		function traverseTree(category: CategoryType) {
			const { id, subCategories } = category

			if (subCategories) {
        groupVisibility[id] = "hidden"
        subCategories.forEach((subCategory: CategoryType) => {
          traverseTree(subCategory)
        })
      }
    }
    
    traverseTree(initialArg)
    groupVisibility.all = "table-row"

		return groupVisibility
	}

  function switchGroupView(state, action) {
    let newState = {...state}
    const groupID = action

    for (const key of Object.keys(newState)) {
        if (newState[key]) {
          if (key == groupID) {
            newState[key] = "table-row"
          } else {
            newState[key] = "hidden"
          }
        }
    }
    return newState
  }

  const [groupVisibilityTree, dispatchGroupVisibilityTree] = useReducer(switchGroupView, categories, generateGroupTree)

  function handleViewSwitch(groupID: string) {
    dispatchGroupVisibilityTree(groupID)
  }

	function ParseCategories(category: CategoryType): JSX.Element[] {
    // create a tr array
    // Start from root category, pass the parent category
    // Check if there is "subCategories"
    // create a tr
      // create a td to show current group
      // create a td for going back to previous view
      // iterate subCategories
      // call this function with subCategory and the parent of the subCategory
      // if children has children put a button inside that references that group
      // else put a link in it for its page
    // push the tr to the tr array
    
    const groupRows: JSX.Element[] = []
    function generateCategoryGroups(category: CategoryType, parentGroup: CategoryType): void {
      const {subCategories, id, name} = category

      if (subCategories) {
        groupRows.push(
          <tr key={id} className={`${groupVisibilityTree[id]}`}>
            <td className="block"><b>{name}</b></td>
            <td className="block">
              <button onClick={() => {handleViewSwitch(parentGroup.id)}}>{`<${parentGroup.name}`}</button>
            </td>

            {
              subCategories.map((subCategory: CategoryType) => {
                const {id: subID, name: subName, subCategories: subSubCategories} = subCategory
                generateCategoryGroups(subCategory, category)
                if (subSubCategories) {
                  return <td key={subID} className="block">
                    <button onClick={() => {handleViewSwitch(subID)}}>
                      {`${subName}>`}
                    </button>
                  </td>
                } else {
                  return <td key={subID} className="block">
                    <Link
                    href={{
                    pathname: `/categories/${id}`,
                    query: {subName}
                    }}>
                      {subName}
                    </Link>
                  </td>
                }
              })
            }

            <td className="block">
              <Link
              href={{
              pathname: `/categories/${id}`,
              query: {name}
              }}>
                {`[${name}]`}
              </Link>
            </td>
          </tr>
        )
      }
      
    }

    generateCategoryGroups(category, category)
    
    return groupRows
  }

  return (
    <>
    { 
    categories.id ?
    <table>
      <thead></thead>
      <tbody>
        {
          <Suspense fallback={<Skeleton/>}>
            {
            ParseCategories(categories).map((el: JSX.Element) => {
              return el
            })
            }
          </Suspense>
        }
      </tbody>
    </table> :
    <div>No category found</div>
    }
    </>
  )
}
