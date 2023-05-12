import { ApiService } from "./api";

export const uploadData = (datos) => {
    return new Promise(resolve => {
        return ApiService.post("upload", datos, { 'Content-Type': 'multipart/form-data' })
            .then(response => resolve(response))
            .catch(response => resolve(response));
    });
}
