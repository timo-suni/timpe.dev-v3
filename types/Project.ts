export interface ImageAssetReference {
    _ref: string;
    _type: 'reference';
}

export interface ImageObject {
    _type: 'image';
    alt?: string;
    asset: ImageAssetReference;
    crop?: {
        top: number;
        left: number;
        bottom: number;
        right: number;
    };
    hotspot?: {
        x: number;
        y: number;
        height: number;
        width: number;
    };
}

export interface Link {
    title: string;
    link: string;
  }

export type Project = {
    _id: string;
    _createdAt: Date;
    order: number;
    title: string;
    slug: string;
    image: ImageObject;
    alt: string;
    content: string;
    pills: string[];
    links: Link[];
};