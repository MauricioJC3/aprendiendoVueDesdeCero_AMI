export interface APIBasica {
    success: boolean;
    data:    Datum[];
}

export interface Datum {
    id:          number;
    name:        string;
    description: string;
    price:       string;
    stock:       number;
    provider_id: number;
    created_at:  Date;
    updated_at:  Date;
    provider:    Provider;
}

export interface Provider {
    id:         number;
    name:       string;
    email:      string;
    phone:      string;
    address:    string;
    created_at: Date;
    updated_at: Date;
}
