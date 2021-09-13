export interface Products {
    products:        Product[];
    provider_active: number;
    new:             number;
    active:          number;
    total:           number;
}

export interface Product {
    id:                       string;
    name:                     string;
    category:                 null | string;
    category_name?:           string;
    description:              string;
    images:                   Images;
    inStock:                  number;
    noAvailability:           NoAvailability;
    cancellation:             Cancellation;
    discount_status:          boolean;
    discount_percentage:      number;
    prices:                   Prices;
    delivery:                 Delivery[];
    agency_price?:            number;
    client_price?:            number;
    discount_amount?:         number;
    agency_tax?:              number;
    agency_tax_value?:        number;
    client_discount?:         number;
    client_tax?:              number;
    client_tax_value?:        number;
    earning?:                 number;
    client_price_no_tax?:     number;
    client_minPrice:          number;
    client_maxPrice:          number;
    client_minDiscount:       number;
    client_maxDiscount:       number;
    client_minPriceConfig:    any[];
    client_maxPriceConfig:    any[];
    client_minPriceWShipping: number;
    keywords?:                string;
    isDraft:                  boolean;
    liked:                    number;
    createdAt:                Date;
    provider:                 string;
    modifiedByProvider:       boolean;
    sku:                      null | string;
    brand:                    null | string;
    updatedAt:                Date;
    agency:                   string;
    publishAt:                string;
    active:                   boolean;
    weight:                   string;
    isNew:                    boolean;
    searched:                 number;
    condition:                Condition;
    sellByOrder:              boolean;
    watched:                  number;
    properties:               Properties;
    dimensions:               null;

    //Revisar
    agency_discount:          number;
    sk:                       Sk;
    linked:                   any[];
    price_to_pay_min:         number;
    price_to_pay:             number;
    upcRevisedAt:             Date;
    shippingMinPrice:         number;
}

export interface Cancellation {
    fee:  number;
    days: number;
}

export enum Condition {
    New = "new",
    OpenBox = "open-box",
    Used = "used",
    AsIs = "as-is",
    Refurbished = "refurbished",
    ForParts = "for-parts",
}

export interface Delivery {
    country:      string;
    value_custom?: number;
    details?:      string;
    origin:       string;
    atHome?:       AtHome;
    pickUp?:       AtHome;
}

export interface AtHome {
    minDays:   number;
    maxDays:   number;
    price:     number;
    enabled:   boolean;
    pickUpIn?: string[];
}

export interface Images {
    primary:   string;
    secondary: string[];
}

export enum NoAvailability {
    AllwaysSell = "allways_sell",
    ShowButNotSell = "show_but_not_sell",
    NoShow = "no_show",
}

export interface Prices {
    simple:   boolean;
    amount:   number;
    discount: Discount;
    currency: string;
    list:     any[];
}

export interface Discount {
    active:     boolean;
    percent:    number;
    startDate?:  string;
    endDate?:  string;
}



export interface Properties {
    general:   General[];
    configs:   General[];
    technical: Technical[];
}

export interface General {
    property: string;
    value:    string;
}

export interface Technical {
    property: Property;
    value:    number | string;
}

export enum Property {
    HighestRecordedPrice = "highest_recorded_price",
    LowestRecordedPrice = "lowest_recorded_price",
    Msrp = "msrp",
    URL = "url",
}

export enum Sk {
    Products = "products",
}
