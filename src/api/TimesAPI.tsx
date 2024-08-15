const baseURL = "http://localhost:3000/times";

export const  TimesRequests = {
    getTimes: () => {
        return fetch(baseURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Could not retrieve times')
            }
            return response.json()
        })
    }
}