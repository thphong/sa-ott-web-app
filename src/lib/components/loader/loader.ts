import { writable } from "svelte/store";

export const isShown = writable(false);
let numLoading: number = 0;
export const loader = {
    hideLoader: function () {
        numLoading--;
        if (numLoading <= 0) {
            isShown.set(false);
        }
    },
    showLoader: function () {
        if (numLoading < 0) {
            numLoading = 0;
        }
        numLoading++;
        isShown.set(true);
    }
};