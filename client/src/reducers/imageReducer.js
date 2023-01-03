import { GENERATE_IMG } from "../actions/types";
// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//     organization: window.env.ORGANIZATION_ID,
//     apiKey: window.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

const initailState = { url: "" };

const imageReducer = async function(state = initailState, action) {
    switch (action.type) {
        case GENERATE_IMG:
            // const response = await openai.createImage({
            //     prompt: action.payload,
            //     n: 1,
            //     size: "1024x1024",
            // });

            // const image_url = response.data.data[0].url;
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + String(window.env.OPENAI_API_KEY),
                },
                body: JSON.stringify({
                    prompt: action.payload,
                    n: 1,
                    size: "1024x1024",
                }),
            };

            const response = await fetch(
                "https://api.openai.com/v1/images/generations",
                requestOptions
            );

            const data = await response.json();
            return {
                url: data.data[0].url,
            };
        default:
            return state;
    }
};

export default imageReducer;