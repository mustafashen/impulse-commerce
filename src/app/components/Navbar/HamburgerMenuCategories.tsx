import Link from "next/link";
import { useCategoriesContext } from "@/app/components/Navbar/context/CategoriesContext";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

type CategoryType = {
  id: string,
  name: string,
  subCategories?: CategoryType[]
}

export default function HamburgerMenuCategories(): React.ReactElement {
  const {categories} = useCategoriesContext()

  function ParseCategories({category, layer = 0}: {category: CategoryType, layer?: number}): JSX.Element {
    const { name, id, subCategories } = category

    // Give each parent container group name,
    // and each of their children list visible on focus attribute
    // This has to defined as a distinct value because tailwind compiler cannot handle indistinct values
    let [layerGroup, layerInvisibleElement]: [string, string] = ["", ""] 
    switch (layer) {
      case 0:
        [layerGroup, layerInvisibleElement] = [`group/cat0`,`group-focus-within/cat0:visible`]
        break;
      case 1:
        [layerGroup, layerInvisibleElement] = [`group/cat1`,`group-focus-within/cat1:visible`]
        break;
      case 2:
        [layerGroup, layerInvisibleElement] = [`group/cat2`,`group-focus-within/cat2:visible`]
        break;
      case 3:
        [layerGroup, layerInvisibleElement] = [`group/cat3`,`group-focus-within/cat3:visible`]
        break;
      default:
        break;
    }

    const ListElementSubCategoryStyle: string = `h-[--sub-cat-h]`
    const ListElementMainCategoryStyle: string = `h-16`
    const ListElementCategoryStyle: string = `flex flex-row flex-nowrap overflow-visible ${layerGroup}`
    const ListElementStyle: string = `${layer === 0 ? ListElementMainCategoryStyle : ListElementSubCategoryStyle} ${ListElementCategoryStyle}`

    const ChildListMainCategoryStyle: string = `whitespace-nowrap top-[--vertical-sub-cat-pos]`
    const ChildListSubCategoryStyle: string = `top-0`
    const ChildListStyle: () => string = () => `${layer === 0 ? ChildListMainCategoryStyle : ChildListSubCategoryStyle} absolute left-36 invisible ${layerInvisibleElement}`

    // If there are children for the category
    // Create a category list element,
    // inside it, create an unorganized list,
    // recall the function inside the list
    if (subCategories) {
      return <li className={ListElementStyle} key={id}>
        <button className="h-[--sub-cat-h]">
          {`${name}>`}
        </button>
        <ul className={ChildListStyle()}>
            {subCategories.map((el: CategoryType) => {
              return ParseCategories({category: el, layer: ++layer})
            })}
            <li className="h-[--sub-cat-h] flex flex-col justify-center">
                <Link
                  href={{
                  pathname: `/categories/${id}`,
                  query: {name}
                  }}>
                  {`[All ${name}]`}
                </Link>
            </li>
        </ul>
      </li>
    }

    // If children has no sub category, return a category list element
    return <li key={id} className="h-[--sub-cat-h] flex flex-col justify-center">
        <Link
          href={{
          pathname: `/categories/${id}`,
          query: {name}
          }}>
          {name}
        </Link>
    </li>
  }

  return (
    <>
      {
        categories.subCategories ?
          <Suspense fallback={<Skeleton/>}>
            {categories.subCategories.map((el: CategoryType) => (
              <ParseCategories key={el.id} category={el} />
            ))}
          </Suspense>
        :
        <div>No categories available.</div>
      }
    </>
  )
}

