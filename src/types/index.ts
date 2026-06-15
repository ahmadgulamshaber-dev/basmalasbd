/** Bilingual text shape used everywhere. */
export type Bilingual = { en: string; ar: string };

/** Scene identifier. */
export type SceneId =
  | "gate"
  | "openGate"
  | "nile"
  | "title"
  | "timeline"
  | "favorites"
  | "dog"
  | "eighteen"
  | "cake"
  | "cut"
  | "forever";

/** Scene meta for the scene manager. */
export interface SceneMeta {
  id: SceneId;
  index: number;
  title: Bilingual;
}
