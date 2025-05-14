const axios = require('axios');
import { baseURL, restaurant_id, menu_id } from '../Api';
export const apiInstance = axios.create({
  baseURL: baseURL,
});

// export const getMenuPath:any= async () =>{
//   try {
//     const response = await apiInstance.get('/product/menus-path', {
//       params: {
//         restaurant_id :restaurant_id,
//         menu_id: menu_id
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching menu path:', error);
//     throw error;
//   }
// }
export const getGroupOffer: any = async () => {
  try {
    const response = await apiInstance.get('/offers/temp/all', {
      // params: {
      //   restaurant_id: restaurant_id,
      //   publish: 'True',
      // },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching menu path:', error);
    throw error;
  }
};
export const getCategoryPath = async (id: any) => {
  try {
    const response = await apiInstance.get('/menuentry/with-categories/27', {
      // params: {
      //   restaurant_id: restaurant_id,
      //   publish: 'True',
      // },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
// export const getMenuItem= async (id:any) =>{
//   try {
//     const response = await apiInstance.get(`/product/dish/${id}/`, {
//       params: {
//         restaurant_id :restaurant_id,
//         // menu_id: menu_id
//       }
//     });
//     return response;
//   } catch (error) {
//     console.error('Error fetching category path:', error);
//     throw error;
//   }
// }

export const getAllMenuPath = async () => {
  try {
    // const response = await apiInstance.get(`/product/menus-path/`, {
    //   params: {
    //     restaurant_id: restaurant_id,
    //     // menu_id: menu_id
    //   },
    // });
    // console.log(response.data);
    const response = await apiInstance.get(`/menu/all`);
    console.log(response);
    return response.data;
    // return response;
  } catch (error) {
    console.error('Error fetching category path:', error);
    throw error;
  }
};
export const getAllMenuList = async () => {
  try {
    // /api/product/menus/?restaurant_id=1
    const response = await apiInstance.get(`/product/menus/`, {
      params: {
        restaurant_id: restaurant_id,
        // menu_id: menu_id
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching category path:', error);
    throw error;
  }
};

export const getCategory = async () => {
  try {
    // /api/product/menus/?restaurant_id=1
    const response = await apiInstance.get(`product/categories/`, {
      params: {
        // restaurant_id: restaurant_id,
        // menu_id: menu_id
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching category path:', error);
    throw error;
  }
};

export const getDrawerStructure = async (menuId: any) => {
  try {
    const response = await apiInstance.get(
      `/menuentry/with-categories/${menuId}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching items by menu id:', error);
    throw error;
  }
};
export const getItemsByMenuId = async (menuId: any) => {
  try {
    const response = await apiInstance.get(
      `/menuentry/itemswithstructure/${menuId}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching items by menu id:', error);
    throw error;
  }
};
