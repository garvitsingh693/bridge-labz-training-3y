// Assignment 7 - Q5: Six-image gallery with modal preview.
// Replace these sample image URLs with your own images if desired.
document.addEventListener("DOMContentLoaded", () => {
    const imageUrls = [
        "https://picsum.photos/id/1015/600/400",
        "https://picsum.photos/id/1025/600/400",
        "https://picsum.photos/id/1035/600/400",
        "https://picsum.photos/id/1043/600/400",
        "https://picsum.photos/id/1062/600/400",
        "https://picsum.photos/id/1074/600/400"
    ];

    const gallery = document.createElement("div");
    gallery.style.display = "grid";
    gallery.style.gridTemplateColumns = "repeat(3, minmax(100px, 1fr))";
    gallery.style.gap = "10px";

    imageUrls.forEach((url, index) => {
        const image = document.createElement("img");
        image.src = url;
        image.alt = "Gallery image " + (index + 1);
        image.style.width = "100%";
        image.style.cursor = "pointer";
        image.addEventListener("click", () => {
            modalImage.src = url;
            modal.style.display = "flex";
        });
        gallery.appendChild(image);
    });

    const modal = document.createElement("div");
    modal.style.cssText = "display:none; position:fixed; inset:0; background:#000b; " +
        "align-items:center; justify-content:center; padding:20px;";
    const modalImage = document.createElement("img");
    modalImage.style.maxWidth = "90vw";
    modalImage.style.maxHeight = "90vh";
    modal.appendChild(modalImage);

    // Clicking the backdrop closes the modal.
    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Clicking the image itself must not bubble to the backdrop.
    modalImage.addEventListener("click", event => event.stopPropagation());

    document.body.append(gallery, modal);
});
