export interface TagListProps {
  IconUrl: string;
  Id: number;
  Name: string;
  Rank: number;
}

export interface PromotionCardProps {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  Id: number;
  ImageUrl: string;
  PromotionCardColor: string;
  RemainingText: string;
  SeoName: string;
  Title: string;
  ScenarioType: string;
  Unavailable: boolean;
  Unvisible: boolean;
  ListButtonText: string;
  ListButtonTextBackGroudColor: string;
  CardType: string;
  ExternalUrl: null;
  ExternalType: null;
  ExternalRedirectType: null;
  ExternalWebviewType: null;
  ExternalLoginGate: null;
  IsLuckyDay: boolean;
  LuckyDayText: string;
  LuckyDayTextColor: null | string;
  LuckyDayBackgroundColor: null | string;
}

export interface DetailProps {
  BrandIconColor:                      string;
  BrandIconUrl:                        string;
  BrandPromotionCardParticipationText: string;
  Description:                         string;
  EndDate:                             Date;
  Id:                                  number;
  ImageUrl:                            string;
  CountryTimeZone:                     number;
  RemainingText:                       string;
  StartDate:                           Date;
  Title:                               string;
  Type:                                string;
  CardType:                            string;
  ScenarioType:                        string;
  SeoName:                             string;
  Unavailable:                         boolean;
  IsMapAvailable:                      boolean;
  Unvisible:                           boolean;
  DetailButtonText:                    string;
  ListButtonText:                      null;
  LuckyDayText:                        string;
  LuckyDayTextColor:                   null;
  LuckyDayBackgroundColor:             null;
  ExternalUrl:                         null;
  ExternalType:                        null;
  ExternalRedirectType:                null;
  ExternalWebviewType:                 null;
  ExternalLoginGate:                   null;
  Contents:                            any[];
  PromotionTags:                       any[];
  GameWin:                             null;
}

