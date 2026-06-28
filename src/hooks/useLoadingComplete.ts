import { createContext, useContext } from "react";

/**
 * Context that tracks whether the loading screen animation has finished.
 * The hero section subscribes to this so it only begins animating AFTER
 * the loading screen fully fades out and unmounts.
 */
export const LoadingCompleteContext = createContext<boolean>(false);

export function useLoadingComplete() {
  return useContext(LoadingCompleteContext);
}

//THIS WAS MADE BY TUSHAR//
