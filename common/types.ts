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

export interface BlogsResponse {
  slug?: string;
  metadata: Metadata;
  sys: Sys;
  fields: {
    title: string;
    slug: string;
    date: string;
    subtitle: string;
    content: string;
    headerImage: {
      metadata: Metadata;
      sys: Sys;
      fields?: ImageFields;
    };
  };
}
