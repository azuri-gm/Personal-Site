import { Metadata, Sys } from 'contentful';

export interface ImageFields {
  title: string;
  description: string;
  metadata: Metadata;
  sys: Sys;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface BlogItem {
  metadata: Metadata;
  sys: Sys;
  fields: {
    title: string;
    subtitle: string;
    slug: string;
    content: string;
    date: string;
    headerImage: ImageFields;
  };
}

export interface MailData {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

export interface BlogResponse {
  sys: { type: string };
  total: number;
  skip: number;
  limit: number;
  items: BlogItem[];
  includes: {
    Asset: any[];
  };
}

export interface BlogsResponse {
  slug?: string;
  metadata: Metadata;
  sys: Sys;
  fields: {
    title: string;
    subtitle: string;
    slug: string;
    content: string;
    date: string;
    headerImage: {
      metadata: Metadata;
      sys: Sys;
      fields?: ImageFields;
    };
  };
}
