import { Description, SubSkill, Taxonomy, Repository } from './Question';

export type Content = {
  identifier: string;
  name: Description;
  description: Description;
  tenant: string;
  repository: Repository;
  taxonomy: Taxonomy;
  sub_skills: SubSkill[];
  gradient: string | null;
  status: string;
  media: Media[];
  created_by: string;
  updated_by: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type Media = {
  src: string;
  file_name: string;
  mediaType: string;
  mime_type: string;
  url: string;
};
