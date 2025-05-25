export interface User {
    id: number
    full_name: string
    email: string
    phone: string
    payment_status: 'none' | 'prepaid' | 'paid'
    prepayment_date?: string
    final_payment_date?: string
    table_preferences?: string
    telegram_contacts?: string
    table_size?: number
    artist_prediction?: string
    compatibility_answers?: Record<string, any>
}

export interface PaymentFormData {
    full_name: string
    email: string
    personal_email: string
    phone: string
    team_preference: string
    receipt_file: File
    social_preference?: string
    telegram_nick: string
    travel_preference?: string
    performance_comfort?: string
    table_preference?: string
    telegram_friends?: string
    dance_willingness?: string
    singing_attitude?: string
    hobbies?: string
    sdu_id?: string
    instagram_nick?: string
    erudition_level?: string
    photography_preference?: string
    improvisation_tendency?: string
    music_knowledge?: string
    meme_familiarity?: string
    alcohol_preference?: string
}

export interface AuthResponse {
    access_token: string
    token_type: string
    user: User
}

export interface ApiError {
    detail: string
    message?: string
}