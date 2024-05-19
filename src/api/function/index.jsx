import { axios } from "../../shared/axios";

// import { getDataFromStore } from "../../store/getStore";

export const getToken = () => {
    const auth = getDataFromStore("Auth");
    return auth?.auth?.token;
};

export const apiFunction = async (url, method, postData, token, extraConfig, successAction, failureAction) => {
    let config = {
        method: method,
        url: url,
        data: postData ? postData : {},
        // headers: { institutionId: process.env.REACT_APP_INSTITUTION_ID }
    };

    if (token) {
        const authToken = getToken();
        config = {
            ...config,
            headers: { token: token },
            // headers: { token: `${authToken}` },
        };
    }

    if (extraConfig === "blob") {
        config = {
            ...config,
            responseType: 'blob',
        };
    }

    if (extraConfig === "formData") {
        config = {
            ...config,
            headers: { ...config.headers, "content-type": "multipart/form-data" },
        };
    }

    try {
        const response = await axios({ ...config });

        let data;

        if (extraConfig === "blob") {
            data = response.data;
        } else {
            data = {
                data: response.data.data ? response.data.data : {},
                status: response.data.status === "success",
                message: response.data.status,
            };
        }

        // Dispatch success action if provided
        if (successAction) {
            successAction(data);
        }

        return data;
    } catch (error) {
        // Dispatch failure action if provided
        if (failureAction) {
            failureAction(error.response.data);
        }

        // Return the error data
        return {
            ...error.response.data,
            status: false,
        };
    }
}
