export default function sortImagesByWidth (images) {
    const sortByWidth = (imgB, imgA) => Number(imgA.width) - Number(imgB.width);
    return images.sort(sortByWidth);
  }