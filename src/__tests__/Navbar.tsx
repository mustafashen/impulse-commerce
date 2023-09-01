import { fireEvent, getByRole, render, screen } from '@testing-library/react'
import Navbar from '@/app/components/Navbar/Navbar'
import '@testing-library/jest-dom'
import HamburgerMenu from '@/app/components/Navbar/HamburgerMenu'
import HamburgerMenuCategories from '@/app/components/Navbar/HamburgerMenuCategories'
import {CategoriesContextProvider} from '@/app/test-utils/TestCategoriesContext'
import {getMockCategoryNames} from '@/app/test-utils/getMockCategory'
import NavbarCategories from '@/app/components/Navbar/NavbarCategories'
import MobileHamburgerMenuCategories from '../components/Navbar/MobileHamburgerMenuCategories'

describe('Navbar', () => {
  
	it ('renders a navbar', () => {
    render(<Navbar />)

    const navbar = screen.getByRole('navigation')

    expect(navbar).toBeInTheDocument()
  })

  it ('renders navbar in logo in middle layout', () => {
    const {container} = render(<Navbar logoInMiddle={true}/>)

    const navbarUserSection = container.querySelector('#navbar-user-section')
    expect(navbarUserSection).toBeInTheDocument()

    const navbarCategories = container.querySelector('#navbar-categories')
    expect(navbarCategories).toBeInTheDocument()

    const logoInMiddle = container.querySelector('#logo-middle')
    expect(logoInMiddle).toBeInTheDocument()

  })

  it ('renders navbar in logo in left layout', () => {
    const {container} = render(<Navbar logoInMiddle={false}/>)

    const navbarUserSection = container.querySelector('#navbar-user-section')
    expect(navbarUserSection).toBeInTheDocument()

    const navbarCategories = container.querySelector('#navbar-categories')
    expect(navbarCategories).toBeInTheDocument()

    const logoInLeft = container.querySelector('#logo-left')
    expect(logoInLeft).toBeInTheDocument()
  })

  it ('renders navbar in vertical menu layout', () => {
    const {container} = render(<Navbar verticalMenu={true}/>)
    
    const navbarUserSection = container.querySelector('#navbar-user-section')
    expect(navbarUserSection).toBeInTheDocument()

    const hamburgerMenu = container.querySelector('#hamburger-menu')
    expect(hamburgerMenu).toBeInTheDocument()

    const logoInMiddle = container.querySelector('#logo-middle')
    expect(logoInMiddle).toBeInTheDocument()

  })
 
  it ('renders navbar in category middle layout', () => {
    const {container} = render(<Navbar categoryInMiddle={true}/>)

    const navbarUserSection = container.querySelector('#navbar-user-section')
    expect(navbarUserSection).toBeInTheDocument()

    const navbarCategoriesMiddle = container.querySelector('#navbar-categories-middle')
    expect(navbarCategoriesMiddle).toBeInTheDocument()

    const logoInLeft = container.querySelector('#logo-left')
    expect(logoInLeft).toBeInTheDocument()
  })

})

describe('NavbarCategories', () => {
  it ('NavbarCategories with context renders categories', () => {
    render(<NavbarCategories/>, {wrapper: CategoriesContextProvider})
    
    getMockCategoryNames().forEach(async (ctg) => {
      const item = await screen.findByRole('listitem', {name: new RegExp(ctg.name)})
      expect(item).toBeInTheDocument()
    })
    
  }) 
})

describe ('HamburgerMenu', () => {
  it ('makes HamburgerMenuCategories wrapper visible/invisible on mouseEnter/mouseLeave', () => {
    const {container} = render(<HamburgerMenu/>)

    const hamburgerMenuCategories = container.querySelector('#hm-ctg-wrap')
    const hamburgerMenu = container.querySelector('#hamburger-menu')

    expect(hamburgerMenuCategories).toHaveClass('invisible')

    if (hamburgerMenu) {
      fireEvent.mouseOver(hamburgerMenu)
    }
    
    expect(hamburgerMenuCategories).toHaveClass('visible')

  }) 

  it ('makes HamburgerMenuCategories wrapper visible/invisible on mouseClick', () => {
    const {container} = render(<HamburgerMenu/>)

    const hamburgerMenuCategories = container.querySelector('#hm-ctg-wrap')
    const hamburgerMenu = container.querySelector('#hm-icon-wrap')

    expect(hamburgerMenuCategories).toHaveClass('invisible')

    if (hamburgerMenu) {
      fireEvent.click(hamburgerMenu)
    }
    expect(hamburgerMenuCategories).toHaveClass('visible')

    if (hamburgerMenu) {
      fireEvent.click(hamburgerMenu)
    }
    expect(hamburgerMenuCategories).toHaveClass('invisible')
  })

  it ('makes MobileHamburgerMenuCategories wrapper visible/invisible on tap', () => {
    const {container} = render(<HamburgerMenu/>)

    const hamburgerMobileMenuCategories = container.querySelector('#mhm-ctg-wrap')

    const hamburgerMenu = container.querySelector('#hm-icon-wrap')

    expect(hamburgerMobileMenuCategories).toHaveClass('invisible')

    if (hamburgerMenu) {
      fireEvent.click(hamburgerMenu)
    }
    expect(hamburgerMobileMenuCategories).toHaveClass('visible')

    if (hamburgerMenu) {
      fireEvent.click(hamburgerMenu)
    }
    expect(hamburgerMobileMenuCategories).toHaveClass('invisible')
  })
  
})



describe('HamburgerMenuCategories', () => {

  it ('HamburgerMenuCategories with no context renders a message div', () => {
    const {container} = render(<HamburgerMenuCategories/>)

    expect(container).toMatchSnapshot(`
      <>
        <div>No categories available.</div>
      </>
    `)
  }) 

  it ('HamburgerMenuCategories with context renders categories', () => {
    render(<HamburgerMenuCategories/>, {wrapper: CategoriesContextProvider})
    
    getMockCategoryNames().forEach(async (ctg) => {
      const item = await screen.findByRole('listitem', {name: new RegExp(ctg.name)})
      expect(item).toBeInTheDocument()
    })
    
  }) 

})

describe('HamburgerMenuCategories', () => {

  it ('HamburgerMobileMenuCategories with no context renders a message div', () => {
    const {container} = render(<MobileHamburgerMenuCategories/>)

    expect(container).toMatchSnapshot(`
      <>
        <div>No categories available.</div>
      </>
    `)
  }) 

  it ('HamburgerMobileMenuCategories with context renders categories', () => {
    render(<MobileHamburgerMenuCategories/>, {wrapper: CategoriesContextProvider})
    
    getMockCategoryNames().forEach(async (ctg) => {
      const item = await screen.findByText(new RegExp(ctg.name))
      expect(item).toBeInTheDocument()
    })
    
  }) 

})