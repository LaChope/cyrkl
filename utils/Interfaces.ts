export interface ProductInterface {
  action: any;
  availability: any;
  city: any;
  code: any;
  country: any;
  currency: any;
  customer_id: any;
  delete_reason: any;
  description0: any;
  district: any;
  dph: any;
  ean: any;
  expiration_date: any;
  expiration_notification_sent_datetime: any;
  hide_reason: any;
  hp: any;
  id: any;
  language: any;
  manufacturer: any;
  name0: any;
  news: any;
  old_expiration_date: any;
  old_price: any;
  perex0: any;
  postal: any;
  price: any;
  pricing_type: any;
  priority: any;
  product_type: any;
  published: any;
  quantity: any;
  region: any;
  related: any;
  setting: any;
  shipping_available: any;
  sold: any;
  store: any;
  timestamp: any;
  topseller: any;
  total_view_count: any;
  unit_id: any;
  uri0: any;
  waste_category_id: any;
  threat_level: number;
  threat_similar_product: boolean;
  threat_email: boolean;
  threat_phone_number: boolean;
  threat_contact: boolean;
}

export interface CustomerInterface {
  company: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  registration_source: string;
  threat_level: number;
  threat_no_company: boolean;
  threat_email: boolean;
}
