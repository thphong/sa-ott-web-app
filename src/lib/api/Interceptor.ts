/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "@zerodevx/svelte-toast";
import { loader } from "$lib/components/loader/loader";
import { TOAST_THEME } from "$lib/constants/constants";

// implement a method to execute all the request from here.
const apiRequest = async (
    method: string,
    url: string,
    request?: any,
    message?: string,
    toastTheme?: any,
    hideLoader?: boolean
) => {
    if (!hideLoader) {
        loader.showLoader();
    }
    try {
        let options = {
            method: method,
            body: JSON.stringify(request),
            headers: { accept: "application/json", "content-type": "application/json" }
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            toast.push('Unexpected error happened!', TOAST_THEME.ERROR);
            loader.hideLoader();
            return;
        }

        const responseJSON = await response.json();

        loader.hideLoader();
        if (message) {
            toast.push(message, toastTheme || TOAST_THEME.SUCCESS);
        }
        return responseJSON;
    } catch (error) {
        loader.hideLoader();
    }

};

// function to execute the http get request
const get = async (
    url: string,
    request?: any,
    message?: string,
    toastTheme?: any,
    hideLoader?: boolean
) => await apiRequest("get", url, request, message, toastTheme, hideLoader);

// function to execute the http delete request
const deleteRequest = async (
    url: string,
    request?: any,
    message?: string,
    toastTheme?: any,
    hideLoader?: boolean
) => await apiRequest("delete", url, request, message, toastTheme, hideLoader);

// function to execute the http post request
const post = async (
    url: string,
    request?: any,
    message?: string,
    toastTheme?: any,
    hideLoader?: boolean
) => await apiRequest("post", url, request, message, toastTheme, hideLoader);

// function to execute the http put request
const put = async (
    url: string,
    request: any,
    message?: string,
    toastTheme?: any,
    hideLoader?: boolean
) => await apiRequest("put", url, request, message, toastTheme, hideLoader);

// function to execute the http path request
const patch = async (
    url: string,
    request: any,
    message?: string,
    toastTheme?: any,
    hideLoader?: boolean
) => await apiRequest("patch", url, request, message, toastTheme, hideLoader);

// expose your method to other services or actions
const API = {
    get,
    delete: deleteRequest,
    post,
    put,
    patch
};
export default API;
