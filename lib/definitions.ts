import { SortOrder } from "mongoose";

export type User = {
  id?: string;
  objectId?: string;
  username?: string;
  name?: string;
  bio?: string;
  image?: string;
};

export type UserCardProps = {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
};

export type ParamsFetchUsers = {
  userId: string;
  searchString?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: SortOrder;
};

export type ParamsUpdateUser = {
  userId?: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
};

export type ProfileHeaderProps = {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  type?: "User" | "Community";
};

export type ThreadCardProps = {
  id: string;
  currentUserId: string;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  parentId: string | null;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
};

export type ParamsCreateThread = {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
};

export type ParamsAddCommentToThread = {
  threadId: string;
  commentText: string;
  userId: string;
  path: string;
};

export type ThreadsTabProps = {
  accountId: string;
  currentUserId: string;
  accountType: string;
};
