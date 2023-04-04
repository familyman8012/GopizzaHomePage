interface BasicList {
  brand_main_banner_idx: number;
  image_url: string;
  sort_number: number;
  landing_url: string;
  subject: string;
}
interface YoutubeList extends Omit<BasicList, "brand_main_banner_idx"> {
  brand_main_youtube_idx: number;
}

interface StartList extends Omit<BasicList, "brand_main_banner_idx"> {
  startup_main_banner_idx: number;
}

interface EventList extends Omit<BasicList, "brand_main_banner_idx"> {
  brand_ad_video_idx: number;
  youtube_url: string;
}

export interface NewsList extends Omit<BasicList, "brand_main_banner_idx" | "image_url" | "sort_number"> {
  startup_press_idx: number;
  company: string;
  created_date: string;
}

export interface PromotionList extends Omit<BasicList, "brand_main_banner_idx" | "landing_url"> {
  brand_promotion_idx: number;
  is_processing: number;
}

export interface IMainVisual {
  total_count: number;
  list: BasicList[];
}

export interface IYoutube extends Omit<IMainVisual, "list"> {
  list: YoutubeList[];
}

export interface IStart extends Omit<IMainVisual, "list"> {
  list: StartList[];
}

export interface IEventVideo extends Omit<IMainVisual, "list"> {
  list: EventList[];
}

export interface IInstarItem {
  data: {
    id: string;
    caption?: string;
    media_url: string;
    timestamp: string;
    media_type: string;
    permalink: string;
  }[];
}

export interface IStoreSearch {
  id: number;
  name: string;
  store_phone_number: string;
  address: string;
  business_time: string;
  open_date: string;
  store_location: {
    lat: number;
    lng: number;
    district: {
      city: string;
      name: string;
    };
  };
  service: {
    text: string;
    holiday: null;
  };
  distance?: number;
}

//언론보도
export interface INews {
  total_count: number;
  list: NewsList[];
}

//프로모션
export interface IPromotionReq {
  current_page_number?: number;
  per_page_number?: number;
  is_processing?: number;
}

export interface IPromotionRes {
  total_count: number;
  list: PromotionList[];
}

export interface IPromotionDetailReq {
  brand_promotion_idx?: number;
}

export interface IPromotionDetailRes {
  brand_promotion_idx: number;
  subject: string;
  promotion_date_start: string;
  promotion_date_end: string;
  contents: string;
}

//단체주문
export interface IGroupOrderReq {
  name: string;
  phone: string;
  email?: string;
  hope_order_date: string;
  hope_order_time: string;
  address: string;
  detail_contents: string;
}

export interface IGroupOrderRes {
  info: IGroupOrderReq;
}

//기업제휴
export interface IContactUsReq {
  name: string;
  phone: string;
  email: string;
  detail_contents: string;
}

export interface IContactUsRes {
  info: IContactUsReq;
}

//고객문의
export interface ICustomerReq extends IContactUsReq {
  store_id: number;
}

export interface ICustomerRes {
  info: ICustomerReq;
}

//가맹문의
export interface IInquiryReq {
  name: string;
  phone: string;
  email: string;
  hope_call_time: string;
  inflow_path: string;
  address: string;
  expected_investment_amount: string;
  is_experience: number;
  is_building_ownership: number;
  shop_address: string;
  building_area: string;
  shop_name: string;
  hope_area: string;
  detail_area: string;
  detail_contents: string;
}

export interface IInquiryReq {
  info: IInquiryReq;
}

//캠페인 - 침투

export interface IInfiltration {
  name: string;
  phone: string;
  place: string;
  story: string;
}

export interface IInfiltrationRes {
  info: IInfiltration;
}
