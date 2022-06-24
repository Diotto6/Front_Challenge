import axios from "axios";

export const api = axios.create({   
    baseURL: 'https://backappdesafio.herokuapp.com'
})

export const getComment = async() => {
    let url = `/comment`

    return api.get(url)
};

export const createComment = async(name, comment) => {
    let url = `/comment`

    return api.post(url, {name:name, comment:comment})
}
