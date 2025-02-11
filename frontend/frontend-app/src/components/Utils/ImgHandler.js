export const fromBase64 = (base64, type) => {
    if(type === 'image/png') {
        return `data:image/png;base64,${base64}`;
    } else if(type === 'image/jpg') {
        return `data:image/jpg;base64,${base64}`;
    }
    return `data:image/jpeg;base64,${base64}`;
};
    