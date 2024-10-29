import { postApi, getApi, putApi } from "./Api_methods";
import Api from "./interceptor";

const CREATE_USER_ENDPOINT = "/users/";
export const createUserApi = async (userData) => {
  try {
    const response = await postApi(CREATE_USER_ENDPOINT, userData);
    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};


const GET_USER_ENDPOINT = "/users/";
export const getUserApi = async () => {
  try {
    const response = await getApi(GET_USER_ENDPOINT);
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

const UPDATE_USER_ENDPOINT = "/users";
export const updateUserApi = async (user_id, userData) => {
  try {
    const endpoint = `${UPDATE_USER_ENDPOINT}/${user_id}`;  // Add user_id to the endpoint
    const response = await putApi(endpoint, userData);
    return response;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};


const CREATE_EVENT_ENDPOINT = "/events/";
export const createEventApi = async (eventData) => {
  try {
    const response = await postApi(CREATE_EVENT_ENDPOINT, eventData);
    return response;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};


const CREATE_CAMPAIGN_ENDPOINT = "/campaigns/";
export const createCampaignApi = async (campaignData) => {
  try {
    const response = await postApi(CREATE_CAMPAIGN_ENDPOINT, campaignData);
    return response;
  } catch (error) {
    console.error("Error creating Campaign:", error);
    throw error;
  }
};

const UPDATE_CAMPAIGN_ENDPOINT = "/campaigns/";
export const updateCampaignApi = async (campaignData) => {
  try {
    const response = await putApi(UPDATE_CAMPAIGN_ENDPOINT, campaignData);
    return response;
  } catch (error) {
    console.error("Error updating Campaign:", error);
    throw error;
  }
};
