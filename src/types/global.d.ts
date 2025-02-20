import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { HTMLAttributes, ImageMetadata } from 'astro/types';
import type { ImageProps } from '~/utils/images-optimization';

export interface Post {
  /** A unique ID number that identifies a post. */
  id: string;

  /** A post’s unique slug – part of the post’s URL based on its name, i.e. a post called “My Sample Page” has a slug “my-sample-page”. */
  slug: string;

  /**  */
  permalink: string;

  /**  */
  publishDate: Date;
  /**  */
  updateDate?: Date;

  /**  */
  title: string;
  /** Optional summary of post content. */
  excerpt?: string;
  /**  */
  image?: ImageMetadata | string;

  /**  */
  category?: Taxonomy;
  /**  */
  tags?: Taxonomy[];
  /**  */
  author?: string;

  /**  */
  metadata?: MetaData;

  /**  */
  draft?: boolean;

  /**  */
  Content?: AstroComponentFactory;
  content?: string;

  /**  */
  readingTime?: number;
}

export interface Taxonomy {
  slug: string;
  title: string;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface Image extends ImageProps {}

export interface Video {
  src: string;
  type?: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string | Record<string, string>>;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
  isSubContent?: boolean;
}

interface TeamMember {
  name?: string;
  job?: string;
  image?: Image;
  socials?: Array<Social>;
  description?: string;
  classes?: Record<string, string>;
}

interface Social {
  icon?: string;
  href?: string;
}

export interface Stat {
  amount?: number | string;
  title?: string;
  icon?: string;
}



export interface Price {
  title?: string;
  subtitle?: string;
  description?: string;
  price?: number | string;
  period?: string;
  items?: Array<Item>;
  callToAction?: CallToAction;
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

export interface Testimonial {
  title?: string;
  testimonial?: string;
  name?: string;
  job?: string;
  image?: string | unknown;
}




// FORM
export interface FormInput {
  name: string;
  label?: string;
  required?: boolean;
  errors?: string[];
}

export interface Input extends FormInput {
  type: HTMLInputTypeAttribute;
  autocomplete?: string;
  placeholder?: string;
}

export interface Textarea extends FormInput {
  placeholder?: string;
  rows?: number;
}

export interface Disclaimer extends FormInput {};

// COMPONENTS
export interface CallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset';
}

export interface ItemGrid {
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  classes?: Record<string, string>;
}

export interface Collapse {
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
  classes?: Record<string, string>;
}

export interface Form {
  inputs?: Array<Input>;
  textarea?: Textarea;
  disclaimer?: Disclaimer;
  button?: string;
  description?: string;
}

export interface Marquee {
  items?: Array<ScrollItem>;
  maxWidth?: string;
}

export interface Card {
  title: string;
  description?: string;
  image?: Image;
  callToActions?: CallToAction[];
  bg?: string;
  isDark?: boolean
}

// WIDGETS
export interface Team extends Omit<Headline, 'classes'>, Widget {
  team?: Array<TeamMember>;
}

export interface Stats extends Omit<Headline, 'classes'>, Widget {
  stats?: Array<Stat>;
}

export interface Pricing extends Omit<Headline, 'classes'>, Widget {
  prices?: Array<Price>;
}

export interface Testimonials extends Omit<Headline, 'classes'>, Widget {
  testimonials?: Array<Testimonial>;
  callToAction?: CallToAction;
}

export interface Brands extends Omit<Headline, 'classes'>, Widget {
  icons?: Array<string>;
  images?: Array<Image>;
}

export interface Features extends Omit<Headline, 'classes'>, Widget {
  image?: string | unknown;
  video?: Video;
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
  maxWidth?: string,
}

export interface Faqs extends Omit<Headline, 'classes'>, Widget {
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;

  canonical?: string;

  robots?: MetaDataRobots;

  description?: string;

  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

// LAYOUT
export interface Layout {
  metadata?: MetaData;
  lang?: string;
}

export interface Item {
  title?: string
  description?: string[];
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: CallToAction;
  image?: Image;
}

// UI
interface Year {
  from?: number;
  to?: number;
  customClass?: string;
}
export interface StepItem extends Item{
  place?: string;
  year?: Year;
}
export interface TimeLine {
  items?: Array<StepItem>;
  defaultIcon?: string;
  classes?: Record<string, string>;
}


export interface Contact extends Omit<Headline, 'classes'>, Form, Widget {
  label:{
    name: string,
    email: string,
    message: string,
    disclaimer: string
  }
}

// SUB CONTENT
export interface SubContent extends Omit<Headline, 'classes'>, Widget {
  isReversed?: boolean;
  image?: string | Image;
}
export interface ScrollItem {
  image: ImageType;
  id?: number | string;
}
export interface MarqueeSubContent extends SubContent, Marquee {}

// CONTENT
export interface Content extends SubContent {
  content?: string;
  items?: Array<Item>;
  columns?: number;
  isAfterContent?: boolean;
  callToAction?: CallToAction;
}

// WIDGET
export interface Hero extends Omit<Headline, 'classes'>, Omit<Widget, 'isDark' | 'classes'> {
  image?: ImageProps;
  href: string;
}

export interface Steps extends Omit<Headline, 'classes'>, Widget, Omit<TimeLine, 'classes'> {
  items: Array<StepItem>;
  callToAction?: string | CallToAction;
  image?: ImageProps;
  isReversed?: boolean;
}

export interface Header {
  lang?: string;
}

