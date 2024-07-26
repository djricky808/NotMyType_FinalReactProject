import { TPhrase } from "../Types";

const baseURL = `http://localhost:3000/phrases`;

export const PhraseRequests = {
    getPhrases: (): Promise<TPhrase> => {
        return fetch(baseURL)
        .then((response) => {
            if(!response.ok){
                throw new Error('Could not retrieve levels. Please try again.')
            }
            return response.json();
        })

    }
}