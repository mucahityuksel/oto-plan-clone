const legacyPathMap: Record<string, string> = {
  "files/6b16cecbb3e4982f5429c69e454856f7.png": "/images/cars/car-1.jpg",
  "files/67bce69209556c04b6778bdcd7c7d594.png": "/images/cars/car-3.jpg",
  "files/094fb22ae0fb0fe2b00c452a37c3a1d7.png": "/images/cars/car-4.jpg",
};

const defaultImage = "/images/cars/car-1.jpg";

export function getCarImageUrl(path?: string): string {
  if (!path) {
    return defaultImage;
  }

  if (path.startsWith("/") || path.startsWith("http")) {
    return path;
  }

  return legacyPathMap[path] ?? defaultImage;
}
