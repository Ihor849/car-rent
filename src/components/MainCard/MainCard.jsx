import { iconHeart } from '../../images/icons';
import { Button, FlatButton } from '../Button/Button';
import { useDispatch } from 'react-redux';
import {
  CardTitle,
  CardWrapper,
  ImgWrapper,
  RowWrapper,
} from './MainCard.styled';
import ModalPopup from '../ModalPopup/ModalPopup';
import { useState } from 'react';
import carsOperation from '../../redux/cars/carsOperations';


export const MainCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const {
    id,
    img,
    make,
    year,
    type,
    rentalPrice,
    address,
    accessories,
    rentalCompany,
    mileage,
  } = item;

  const dispatch = useDispatch();

  const onModalClose = () => {
    setShowModal(false);
  };

  const onModalOpen = () => {
    setShowModal(true);
  };

  const updatedCar = { ...item, favorite: !item.favorite };

  return (
    <CardWrapper>
      <ImgWrapper img={img}
       like={item.favorite}>
      <FlatButton 
            onClick={()=> dispatch(carsOperation.addToFavorites({id, updatedCar}))}

            className="likeBtn">
                {iconHeart}
            </FlatButton>
      </ImgWrapper>
      <CardTitle>
                <p>{make}, <span> {year} </span></p>
                <p> {rentalPrice} </p>
            </CardTitle>

            <RowWrapper className="card-rows">
               <p> {address.split(' ')[3].replace(/,/g, '')} </p>
               <p> {address.split(' ')[4].replace(/,/g, '')} </p>
               <p> {rentalCompany} </p>
               <p>{accessories[0].includes("Premium") || 
                    accessories[1].includes("Premium") ||
                    accessories[2].includes("Premium")
                    ? "Premium" : ""}
                </p>
           </RowWrapper>

           <RowWrapper className="card-rows">
               <p> {type} </p>
               <p> {make} </p>
               <p> {mileage} </p>
               <p> {rentalCompany} </p>
           </RowWrapper>

           <Button 
            onClick={onModalOpen }
            className="learnBtn">
            Learn more</Button>

            {showModal && (
                <ModalPopup
                    onClose={onModalClose}
                    isOpen={showModal}
                    item = {item}
                />
            )}
    </CardWrapper>
  );
};
