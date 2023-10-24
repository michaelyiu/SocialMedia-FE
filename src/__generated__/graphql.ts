/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  avatar?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  handle?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  user?: Maybe<Scalars['String']['output']>;
};

export type Education = {
  __typename?: 'Education';
  current?: Maybe<Scalars['Boolean']['output']>;
  degree: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  fieldOfStudy: Scalars['String']['output'];
  from: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  school: Scalars['String']['output'];
  to?: Maybe<Scalars['String']['output']>;
};

export type Experience = {
  __typename?: 'Experience';
  company: Scalars['String']['output'];
  current?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  from: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  to?: Maybe<Scalars['String']['output']>;
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['ID']['output'];
  user?: Maybe<Scalars['String']['output']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addLike?: Maybe<Like>;
  createComment?: Maybe<Comment>;
  createEducation?: Maybe<Education>;
  createExperience?: Maybe<Experience>;
  createPost?: Maybe<Post>;
  deleteComment?: Maybe<Scalars['Boolean']['output']>;
  deleteEducation?: Maybe<Scalars['ID']['output']>;
  deleteExperience?: Maybe<Scalars['ID']['output']>;
  deletePost?: Maybe<Scalars['Boolean']['output']>;
  deleteProfile?: Maybe<Scalars['Boolean']['output']>;
  editEducation?: Maybe<Education>;
  editExperience?: Maybe<Experience>;
  login?: Maybe<Token>;
  removeLike?: Maybe<Like>;
  signup?: Maybe<User>;
  updateProfile?: Maybe<Profile>;
};


export type MutationAddLikeArgs = {
  post_id: Scalars['String']['input'];
};


export type MutationCreateCommentArgs = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  post_id: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


export type MutationCreateEducationArgs = {
  current?: InputMaybe<Scalars['Boolean']['input']>;
  degree: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  fieldOfStudy: Scalars['String']['input'];
  from: Scalars['String']['input'];
  school: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateExperienceArgs = {
  company: Scalars['String']['input'];
  current?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  from: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreatePostArgs = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  comment_id: Scalars['String']['input'];
  post_id: Scalars['String']['input'];
};


export type MutationDeleteEducationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteExperienceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditEducationArgs = {
  current?: InputMaybe<Scalars['Boolean']['input']>;
  degree: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  fieldOfStudy: Scalars['String']['input'];
  from: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  school: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditExperienceArgs = {
  company: Scalars['String']['input'];
  current?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  from: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationRemoveLikeArgs = {
  post_id: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  input?: InputMaybe<SignupInput>;
};


export type MutationUpdateProfileArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  handle: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  skills: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type Post = {
  __typename?: 'Post';
  avatar?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  date?: Maybe<Scalars['Date']['output']>;
  handle?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  likes?: Maybe<Array<Maybe<Like>>>;
  name?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  user?: Maybe<Scalars['String']['output']>;
};

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  education?: Maybe<Array<Maybe<Education>>>;
  experience?: Maybe<Array<Maybe<Experience>>>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  handle: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  skills: Array<Maybe<Scalars['String']['output']>>;
  status?: Maybe<Scalars['String']['output']>;
  user: User;
  website?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  comments?: Maybe<Array<Maybe<Comment>>>;
  education?: Maybe<Education>;
  experience?: Maybe<Experience>;
  hello?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  profile?: Maybe<Profile>;
  profileByHandle?: Maybe<Profile>;
  profiles?: Maybe<Array<Maybe<Profile>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryCommentsArgs = {
  post_id: Scalars['String']['input'];
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProfileArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProfileByHandleArgs = {
  handle: Scalars['String']['input'];
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type SignupInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password2: Scalars['String']['input'];
};

export type Token = {
  __typename?: 'Token';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  profile?: Maybe<Profile>;
};
