export const loadImage = (url: string) => new Promise((resolve, reject) => {
    console.log("loadImage")
    const img = new Image();
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', (err) => console.log(url));
    img.src = url;
});
