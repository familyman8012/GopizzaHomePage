import AxiosUtil from "./index";
import { IContactUsReq, IGroupOrderReq, IInquiryReq, IPromotionDetailReq, IPromotionReq } from "./interface/homeInterface";

export const fetchMainVisual = async () => {
  const response = await AxiosUtil.get(`/ho/v1/brand/main/banner`);

  return response.data.data;
};

export const fetchYoutubeVisual = async () => {
  const response = await AxiosUtil.get(`/ho/v1/brand/main/youtube`);

  return response.data.data;
};

export const fetchStartVisual = async () => {
  const response = await AxiosUtil.get(`/ho/v1/startup/main/banner`);

  return response.data.data;
};

export const fetchEventVideoVisual = async () => {
  const response = await AxiosUtil.get(`/ho/v1/brand/ad/video`);

  return response.data.data;
};

export const fetchInstaFeed = async () => {
  const data = await AxiosUtil.get(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&limit=8&access_token=${process.env.INSTAGRAM_KEY}`
  );

  return data.data;
};

export const fetchStoreSearch = async () => {
  const response = await AxiosUtil.get(`/ho/v1/stores/map`);

  return response.data;
};

//언론보도
export const fetchNews = async () => {
  const response = await AxiosUtil.get(`/ho/v1/startup/press`);

  return response.data.data;
};

//이벤트 프로모션
export const fetchPromotion = async (params?: IPromotionReq) => {
  const response = await AxiosUtil.get(`/ho/v1/brand/promotion/list`, { params });

  return response.data.data;
};

//이벤트 프로모션 상세
export const fetchPromotionDetail = async (params?: number) => {
  const response = await AxiosUtil.get(`/ho/v1/brand/promotion/view/${params}`);

  return response.data.data;
};

//단체주문
export const fetchGroupOrder = async (params: IGroupOrderReq) => {
  const response = await AxiosUtil.post(`/ho/v1/group/order`, params);

  return response.data.data;
};

//기업제휴
export const fetchContactUs = async (params: IContactUsReq) => {
  const response = await AxiosUtil.post(`/ho/v1/corporate/partnership`, params);

  return response.data.data;
};

//가맹문의
export const fetchInquiry = async (params: IInquiryReq) => {
  const response = await AxiosUtil.post(`/ho/v1/startup/question`, params);

  return response.data.data;
};
