import { GraphQLResolveInfo } from 'graphql';
import { CurrentDataMapper, DailyDataMapper, HourlyDataMapper, WeatherDataMapper } from './weather/schema.mappers';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CurrentData = {
  __typename?: 'CurrentData';
  condition?: Maybe<Scalars['String']['output']>;
  daylight?: Maybe<Scalars['Boolean']['output']>;
  temp?: Maybe<Scalars['Int']['output']>;
};

export type DailyData = {
  __typename?: 'DailyData';
  condition?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  maxTemp?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  minTemp?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  time?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type HourlyData = {
  __typename?: 'HourlyData';
  condition?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  daylight?: Maybe<Array<Maybe<Scalars['Boolean']['output']>>>;
  temp?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  time?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type Query = {
  __typename?: 'Query';
  getWeather?: Maybe<WeatherData>;
};


export type QuerygetWeatherArgs = {
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
  tempUnit?: InputMaybe<TempUnit>;
};

export type TempUnit =
  | 'celsius'
  | 'fahrenheit';

export type WeatherData = {
  __typename?: 'WeatherData';
  current?: Maybe<CurrentData>;
  daily?: Maybe<DailyData>;
  hourly?: Maybe<HourlyData>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  CurrentData: ResolverTypeWrapper<CurrentDataMapper>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  DailyData: ResolverTypeWrapper<DailyDataMapper>;
  HourlyData: ResolverTypeWrapper<HourlyDataMapper>;
  Query: ResolverTypeWrapper<{}>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  TempUnit: TempUnit;
  WeatherData: ResolverTypeWrapper<WeatherDataMapper>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CurrentData: CurrentDataMapper;
  String: Scalars['String']['output'];
  Boolean: Scalars['Boolean']['output'];
  Int: Scalars['Int']['output'];
  DailyData: DailyDataMapper;
  HourlyData: HourlyDataMapper;
  Query: {};
  Float: Scalars['Float']['output'];
  WeatherData: WeatherDataMapper;
};

export type CurrentDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentData'] = ResolversParentTypes['CurrentData']> = {
  condition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  daylight?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  temp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DailyDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['DailyData'] = ResolversParentTypes['DailyData']> = {
  condition?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  maxTemp?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  minTemp?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  time?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HourlyDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['HourlyData'] = ResolversParentTypes['HourlyData']> = {
  condition?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  daylight?: Resolver<Maybe<Array<Maybe<ResolversTypes['Boolean']>>>, ParentType, ContextType>;
  temp?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  time?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getWeather?: Resolver<Maybe<ResolversTypes['WeatherData']>, ParentType, ContextType, RequireFields<QuerygetWeatherArgs, 'lat' | 'lon' | 'tempUnit'>>;
};

export type WeatherDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['WeatherData'] = ResolversParentTypes['WeatherData']> = {
  current?: Resolver<Maybe<ResolversTypes['CurrentData']>, ParentType, ContextType>;
  daily?: Resolver<Maybe<ResolversTypes['DailyData']>, ParentType, ContextType>;
  hourly?: Resolver<Maybe<ResolversTypes['HourlyData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CurrentData?: CurrentDataResolvers<ContextType>;
  DailyData?: DailyDataResolvers<ContextType>;
  HourlyData?: HourlyDataResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  WeatherData?: WeatherDataResolvers<ContextType>;
};

