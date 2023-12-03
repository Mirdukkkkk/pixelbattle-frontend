import { createContext } from "preact";
import { Signal, signal } from "@preact/signals";
import { AppImage } from "../types/AppImage";
import { AppFetch } from "../types/AppFetch";
import { PlaceContainer } from "../components/Place/PlaceContainer";

export const PlaceManager = {
    image: signal(null) as Signal<null | AppImage>,
    container: signal({} as PlaceContainer),
    async fetch() {
        const image = await AppFetch.pixels()

        PlaceManager.image.value = new AppImage(image)
    },
}


export const PlaceContext = createContext({} as typeof PlaceManager)




