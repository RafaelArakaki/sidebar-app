import React, { useState } from 'react';
import styles from './styles.module.css';

type SubMenuProps = {
  id: number,
  label: string,
}

type ItemMenuProps = {
  id: number,
  label: string,
  icon: JSX.Element,
  submenu?: Array<SubMenuProps>,
}

const ItemMenu = ({
  id, label, icon, submenu
}: ItemMenuProps) => {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleOnClick = () => {
    if(submenu){
      setIsVisible((prevStation) => !prevStation);
    }else {
      alert("change page")
    }    
  }

  const visibleMenu = !!submenu && isVisible;

  return(
    <>
      <button 
        className={styles.menu}
        key={id}
        onClick={handleOnClick}
      >
        {icon} {label}
      </button>
      {visibleMenu && submenu.map((subitem) => (
        <button 
          className={styles.submenu}
          key={subitem.id}
        >
          {subitem.label}
        </button>
      ))}						
    </>
  )
}

export default ItemMenu;