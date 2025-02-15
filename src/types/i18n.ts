interface Content {
  intro?: string;
}
interface Section<T extends Content> {
  title: string;
  subtitle?: string;
  tagline?: string;
  content: T;
}

interface Step {
  title: string;
  place: string | undefined;
  year: ({
    from: number,
    to: number | undefined;
  } | undefined);
  description?: string;
};

export interface Translations {
  hero: Section<{}>;
  about: Section<{
    intro: string;
    paragraphs: string[];
  }>;
  work: Section<{
    intro: string;
    experiences: Step[];
  }>;
  education: Section<{
    intro: string;
    experiences: Step[];
  }>;
  project: Section<{}>;
};

type NestedKeys<T, Prefix extends string = ""> = T extends object
  ? T extends Array<any>
    ? never
    : {
        [K in keyof T]: K extends string
          ? `${Prefix}${K}` | NestedKeys<T[K], `${Prefix}${K}.`>
          : never;
      }[keyof T]
  : never;

export type TranslationKeys = NestedKeys<Translations>;
