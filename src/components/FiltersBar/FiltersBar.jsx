import { useSelector } from "react-redux"
import { Button, FlatButton } from "../Button/Button"
import SelectBrand from "../SelectBrand/SelectBrand"
import SelectMileage from "../SelectMileage/SelectMileage"
import SelectPrice from "../SelectPrice/SelectPrice"
import { FilfersWrap, FilterButtonWrapp } from "./FiltersBar.styled"
import { iconReset } from "../../images/icons"
import { getFilter } from "../../redux/selectors"



const FiltersBar = ({search, reset}) => {

  
    const {
      filterBrand, 
      filterPrice,
      filterFrom,
      filterTo
    } = useSelector(getFilter)
  return (
    <FilfersWrap>
        <SelectBrand/>
        <SelectPrice/>
        <SelectMileage/>    
        <FilterButtonWrapp>
          {  (filterBrand || filterPrice >0 || filterFrom || filterTo ) &&    (
          <FlatButton
          onClick={reset}
          className='reset'>
            {iconReset}
          </FlatButton>
           )}
          <Button
            onClick={search}
           className = 'searchBtn'>Search</Button>
        </FilterButtonWrapp>
    </FilfersWrap>
  )
}


export default FiltersBar