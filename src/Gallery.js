import { Platform } from "react-native";
import GalleryAndroid from "react-native-image-gallery/src/Gallery.android";
import GalleryIos from "react-native-image-gallery/src/Gallery.ios";

export default Platform.OS === "android" ? GalleryAndroid : GalleryIos