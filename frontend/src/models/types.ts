export interface ContactSubmission {
    id: string;
    created_at: string;
    name: string;
    email: string;
    phone?: string;
    project_type?: string;
    budget?: string;
    message: string;
    status: 'Pending' | 'Responded';
    response_text?: string;
}

export interface ConsultationBooking {
    id: string;
    created_at: string;
    date: string;
    time: string;
    company: string;
    contact: string;
    email: string;
    phone?: string;
    status: 'Scheduled' | 'Rescheduled' | 'Completed' | 'Cancelled';
    meeting_link?: string;
    response_text?: string;
}

export interface TelemetryLog {
    timestamp: string;
    query: string;
    status: string;
    latency: string;
}
