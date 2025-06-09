'use client'
import { useEffect, useState } from 'react'
import AllMenuCard from '../../layouts/allmenu'
import styles from './styles.module.css'
import menuDataDummy from '../../AllData/menuList'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'

const AllMenu = () => {

  const [allMenu, setAllMenu]: any = useState(menuDataDummy.find((item: any) => {
    if (item.name == 'MENU') {
      return item.items
    }


  }))

  const selector: any = useSelector((state: RootState) => state.menu);



  useEffect(() => {
    if (selector.users.name) {
      console.log('users', selector.users.name[0].items);
      setAllMenu(selector.users.name[0])
    }

  }, [selector])

  return (
    <div className={styles.container}>

      <div className={styles.agFormatContainer}>
        <div className={styles.agCoursesBox}>
          {allMenu?.items && allMenu.items.length > 0 ? (
            allMenu.items.map((menuitem: any, index: any) => {
              // Verify that each property exists
              const { path, name, date } = menuitem;

              return (
                <AllMenuCard
                  key={index} // If 'index' is not unique, use a unique id instead
                  path={path}
                  title={name}
                  date={date}
                />
              );
            })
          ) : (
            <p>No menu items available</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllMenu
