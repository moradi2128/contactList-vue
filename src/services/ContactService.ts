export const getFromLocalStorage = (key: string
) => {
    try {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key) || "[]")
        } else {
            return null
        }

    } catch (error) {
        console.log("error get local storage", error);

    }

}
export const setLocalStorage = (key: string, data: any
) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));

    } catch (error) {
        console.log("error get local storage", error);

    }

}