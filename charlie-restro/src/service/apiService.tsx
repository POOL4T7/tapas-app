const axios = require('axios');
import {baseURL,restaurant_id,menu_id} from '../Api'
export const apiInstance = axios.create({
  baseURL: baseURL,
});

export const getMenuPath:any= async () =>{
  try {
    const response = await apiInstance.get('/product/menus-path', {
      params: {
        restaurant_id :restaurant_id,
        menu_id: menu_id
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching menu path:', error);
    throw error;
  }
}
export const getGroupOffer:any= async () =>{
  try {
    const response = await apiInstance.get('/product/go/group_offers/', {
      params: {
        restaurant_id: restaurant_id,
        publish:'True'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching menu path:', error);
    throw error;
  }
}
export const getCategoryPath= async (id:any) =>{
  try {
    const response = await apiInstance.get(`/product/categories-with-products/`, {
      params: {
        restaurant_id :restaurant_id,
        menu_id: id
      }
    });
    // console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching category path:', error);
    throw error;
  }
}
export const getMenuItem= async (id:any) =>{
  try {
    const response = await apiInstance.get(`/product/dish/${id}/`, {
      params: {
        restaurant_id :restaurant_id,
        // menu_id: menu_id
      }
    });
    
    return response;
  } catch (error) {
    console.error('Error fetching category path:', error);
    throw error;
  }
}


export const getAllMenuPath= async () =>{
  try {
    const response = await apiInstance.get(`/product/menus-path/`, {
      params: {
        restaurant_id :restaurant_id,
        // menu_id: menu_id
      }
    });
    // console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching category path:', error);
    throw error;
  }
}
export const getAllMenuList= async () =>{
  try {
    // /api/product/menus/?restaurant_id=1
    const response = await apiInstance.get(`/product/menus/`, {
      params: {
        restaurant_id :restaurant_id,
        // menu_id: menu_id
      }
    });
    // console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching category path:', error);
    throw error;
  }
}

export const getCategory= async () =>{
  try {
    // /api/product/menus/?restaurant_id=1
    const response = await apiInstance.get(`product/categories/`, {
      params: {
        restaurant_id :restaurant_id,
        // menu_id: menu_id
      }
    });
    return response;
  } catch (error) {
    console.error('Error fetching category path:', error);
    throw error;
  }
}