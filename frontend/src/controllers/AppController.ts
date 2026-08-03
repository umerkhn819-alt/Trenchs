import type { 
    ContactSubmission, 
    ConsultationBooking,
    TelemetryLog
} from '../models/types';

/** Supabase Edge Function base URL, e.g. https://<project>.supabase.co/functions/v1/api */
const API_BASE =
    typeof process.env.NEXT_PUBLIC_API_URL === 'string' && process.env.NEXT_PUBLIC_API_URL.trim() !== ''
        ? process.env.NEXT_PUBLIC_API_URL.trim().replace(/\/$/, '')
        : 'http://127.0.0.1:54321/functions/v1/api';

const mapId = <T extends { id?: string; _id?: string }>(raw: unknown): T => {
    const item = raw as T;
    return { ...item, id: String(item._id ?? item.id ?? '') };
};

export class AppController {
    // SECURE REQUEST HEADERS BUILDER
    private static getHeaders(extra: Record<string, string> = {}): Record<string, string> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...extra
        };
        // Retrieve token from cookie first, fallback to localStorage
        const token = 
            document.cookie.split('; ').find(row => row.startsWith('trench_admin_token='))?.split('=')[1] || 
            localStorage.getItem('trench_admin_token');
            
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        return headers;
    }

    // AUTHENTICATION LOGIC
    static async loginAdmin(password: string): Promise<{ ok: boolean; errorMessage?: string }> {
        try {
            const response = await fetch(`${API_BASE}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password })
            });
            const data = await response.json().catch(() => ({}));
            if (!response.ok) {
                const msg =
                    data?.error?.message ||
                    (response.status === 503 ? 'Server is not configured for admin login (set ADMIN_PASSWORD).' : undefined);
                return { ok: false, errorMessage: msg };
            }
            if (data && data.token) {
                localStorage.setItem('trench_admin_token', data.token);
                document.cookie = `trench_admin_token=${data.token}; path=/; max-age=86400; secure; samesite=strict`;
                return { ok: true };
            }
            return { ok: false };
        } catch {
            return { ok: false, errorMessage: 'Network error. Is the API running?' };
        }
    }

    static logoutAdmin() {
        localStorage.removeItem('trench_admin_token');
        document.cookie = 'trench_admin_token=; path=/; max-age=0';
    }

    static isAuthenticated(): boolean {
        const cookieToken = document.cookie.split('; ').find(row => row.startsWith('trench_admin_token='))?.split('=')[1];
        return !!(cookieToken || localStorage.getItem('trench_admin_token'));
    }

    // CONTACTS CONTROLLERS
    static async submitContact(
        name: string,
        email: string,
        message: string,
        phone?: string,
        project_type?: string,
        budget?: string
    ): Promise<ContactSubmission> {
        const response = await fetch(`${API_BASE}/contacts`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify({ name, email, message, phone, project_type, budget })
        });
        if (!response.ok) throw new Error('API request failed');
        return mapId<ContactSubmission>(await response.json());
    }

    static async getContacts(): Promise<ContactSubmission[]> {
        const response = await fetch(`${API_BASE}/contacts`, {
            headers: this.getHeaders()
        });
        if (!response.ok) throw new Error('API request failed');
        const list: unknown[] = await response.json();
        return list.map((row) => mapId<ContactSubmission>(row));
    }

    static async replyToContact(id: string, replyText: string): Promise<ContactSubmission> {
        const response = await fetch(`${API_BASE}/contacts/${id}/reply`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify({ response_text: replyText })
        });
        if (!response.ok) throw new Error('API request failed');
        return mapId<ContactSubmission>(await response.json());
    }

    // CONSULTATION CONTROLLERS
    static async submitConsultation(
        date: string,
        time: string,
        company: string,
        contact: string,
        email: string,
        phone?: string
    ): Promise<ConsultationBooking> {
        const response = await fetch(`${API_BASE}/bookings`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify({ date, time, company, contact, email, phone })
        });
        if (!response.ok) throw new Error('API request failed');
        return mapId<ConsultationBooking>(await response.json());
    }

    static async getConsultationBookings(): Promise<ConsultationBooking[]> {
        const response = await fetch(`${API_BASE}/bookings`, {
            headers: this.getHeaders()
        });
        if (!response.ok) throw new Error('API request failed');
        const list: unknown[] = await response.json();
        return list.map((row) => mapId<ConsultationBooking>(row));
    }

    static async updateBookingStatus(id: string, status: ConsultationBooking['status']): Promise<ConsultationBooking> {
        const response = await fetch(`${API_BASE}/bookings/${id}`, {
            method: 'PUT',
            headers: this.getHeaders(),
            body: JSON.stringify({ status })
        });
        if (!response.ok) throw new Error('API request failed');
        return mapId<ConsultationBooking>(await response.json());
    }

    // TELEMETRY CONTROLLERS
    static async getTelemetryLogs(): Promise<TelemetryLog[]> {
        try {
            const response = await fetch(`${API_BASE}/telemetry`, {
                headers: this.getHeaders()
            });
            if (!response.ok) return [];
            return await response.json();
        } catch {
            return [];
        }
    }
}
export default AppController;
