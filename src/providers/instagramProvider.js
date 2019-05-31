
import config from "../../config";

export const getInstagramImages = () => {
    return fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=${config.instagramToken}`)
        .then(response => response.json())
}

