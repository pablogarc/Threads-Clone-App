export type User = {
  id?: string;
  objectId?: string;
  username?: string;
  name?: string;
  bio?: string;
  image?: string;
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

export type ParamsUpdateUser = {
  userId?: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
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

export type ProfileHeaderProps = {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
};

export type ThreadsTabProps = {
  accountId: string;
  currentUserId: string;
  accountType: string;
};
