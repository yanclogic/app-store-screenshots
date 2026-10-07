import { resolveScreenshot } from "./locale";
import type { ProjectState } from "./types";

/** Only assets used by the deck being exported; inactive decks may be unfinished. */
export function exportAssetPaths(state: ProjectState): string[] {
  const paths = new Set<string>();
  const add = (path: string | undefined) => { if (path) paths.add(path); };
  for (const slide of state.slidesByDevice[state.device] || []) {
    if (state.device === "feature-graphic" || slide.layout === "feature-graphic") {
      add(state.appIcon);
      continue;
    }
    if (slide.layout !== "no-device" || slide.transforms?.device || slide.transforms?.deviceSecondary) {
      if (state.device === "iphone" || state.device === "header" || state.device === "search" || state.device === "universal") {
        add("/mockup.png");
      }
      if (state.device === "iphone-duo") {
        const fallback = state.duoFace === "outer" ? "outer" : "inner";
        const face = slide.duoFace === "inner" || slide.duoFace === "outer" ? slide.duoFace : fallback;
        const side = state.orientation === "landscape" ? "landscape" : "portrait";
        add(`/duo-${face}-${side}.png`);
      }
      for (const locale of state.locales) {
        add(resolveScreenshot(slide.screenshot, locale));
        if (slide.layout === "two-devices" || slide.transforms?.deviceSecondary) {
          add(resolveScreenshot(slide.screenshotSecondary, locale));
        }
      }
    }
    for (const image of slide.imageElements || []) add(image.src);
  }
  return [...paths];
}
