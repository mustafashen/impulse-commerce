import Link from "next/link";
import { useCategoriesContext } from "@/app/components/Navbar/context/CategoriesContext";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

type CategoryType = {
  id: string,
  name: string,
  subCategories?: CategoryType[]
}

export default function NavbarCategories(): React.ReactElement {
  const {categories} = useCategoriesContext()
  
  function ParseNavbarCategories(category: CategoryType, layer: number = 0): JSX.Element {
    const { name, id, subCategories } = category

    let [layerGroup, layerInvisibleElement]: [string, string] = ["", ""]
    switch (layer) {
      case 0:
        [layerGroup, layerInvisibleElement] = [`group/cat0`,`group-hover/cat0:visible group-focus-within/cat0:visible`]
        break;
      case 1:
        [layerGroup, layerInvisibleElement] = [`group/cat1`,`group-hover/cat1:visible group-focus-within/cat1:visible`]
        break;
      case 2:
        [layerGroup, layerInvisibleElement] = [`group/cat2`,`group-hover/cat2:visible group-focus-within/cat2:visible`]
        break;
      case 3:
        [layerGroup, layerInvisibleElement] = [`group/cat3`,`group-hover/cat3:visible group-focus-within/cat3:visible`]
        break;
      default:
        break;
    }

    const ListElementSubCategoryStyle: string = `flex flex-row flex-nowrap ${layerGroup} h-[--sub-cat-h]`
    const ListElementMainCategoryStyle: string = `${layerGroup}`
    const ListElementCategoryStyle: string = `w-24`
    const ListElementStyle: string = `${layer === 0 ? ListElementMainCategoryStyle : ListElementSubCategoryStyle} ${ListElementCategoryStyle}`

    const ButtonMainCategoryStyle: string = `first:h-[--navbar-h] flex flex-col justify-center w-full`
    const ButtonStyle: () => string = () => layer === 0 ?  ButtonMainCategoryStyle : "h-[--sub-cat-h]"

    const ChildListMainCategoryStyle: string = `invisible group ${layerInvisibleElement} whitespace-nowrap`
    const ChildListSubCategoryStyle: string = `invisible ${layerInvisibleElement}`
    const ChildListStyle: () => string = () => layer === 0 ? ChildListMainCategoryStyle : ChildListSubCategoryStyle

    if (subCategories) {
      return <li className={ListElementStyle} key={id}>
          <button className={ButtonStyle()}>
            {`${name}>`}
          </button>
          <ul className={ChildListStyle()}>
            {subCategories.map((el: CategoryType) => {
              return ParseNavbarCategories(el, ++layer)
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

    return <li key={id} className="h-[--sub-cat-h] flex flex-col justify-center">
      <div>
        <Link
          href={{
          pathname: `/categories/${id}`,
          query: {name}
          }}>
          {name}
        </Link>
      </div>
    </li>
  }

  return (
    <>
      <ul className={"list-none flex flex-row flex-nowrap space-x-5 justify-center h-full"}>
        {
          categories.subCategories ?
            <Suspense fallback={<Skeleton/>}>
              {
                categories.subCategories.map((category: CategoryType): React.ReactElement => {
                  return ParseNavbarCategories(category)
                })
              }
            </Suspense>  
          :
            <div>No categories available.</div>
        }
      </ul>
    </>
  )
}
