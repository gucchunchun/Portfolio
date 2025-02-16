import { ui } from "./ui";

type NestedKeys<T, Prefix extends string = ""> = T extends object
  ? T extends any[]
    ? never
    : {
        [K in keyof T]: K extends string
          ? `${Prefix}${K}` | NestedKeys<T[K], `${Prefix}${K}.`>
          : never;
      }[keyof T]
  : never;

export type TranslationKeys = Extract<NestedKeys<typeof ui["en"]>, string>;
