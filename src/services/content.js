import { ApiService } from "./api";

export const uploadData = (datos) => {
    return new Promise(resolve => {
        return ApiService.post("usuarios", datos, { 'Content- Type': 'multipart/form-data' })
            .then(response => resolve(response))
            .catch(response => resolve(response));
    });
}

export const GetSlider = () => {
    return new Promise(resolve => {
        return ApiService.get("get_slider")
            .then(response => resolve(response.data))
            .catch(response => resolve(response));
    });
}