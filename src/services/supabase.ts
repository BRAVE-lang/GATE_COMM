import { Question } from '../types/question';

/**
 * Supabase Integration Layer for GATE Companion EC
 * 
 * Provides cloud syncing for question banks, user progress, and community reviews.
 * Operates in "offline/local-first" mode if credentials are not provided.
 */

export interface SupabaseConfig {
  url?: string;
  anonKey?: string;
}

class SupabaseService {
  private url: string | null = null;
  private anonKey: string | null = null;
  private isConfigured: boolean = false;

  constructor() {
    this.init();
  }

  private init() {
    // Reads from environment variables if present
    const envUrl = import.meta.env.VITE_SUPABASE_URL;
    const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (envUrl && envKey && envUrl.startsWith('http')) {
      this.url = envUrl;
      this.anonKey = envKey;
      this.isConfigured = true;
    }
  }

  public getStatus(): { isConfigured: boolean; message: string } {
    if (this.isConfigured) {
      return {
        isConfigured: true,
        message: 'Connected to Supabase Cloud Backend',
      };
    }
    return {
      isConfigured: false,
      message: 'Running in Local-First PWA Mode (No cloud credentials required)',
    };
  }

  /**
   * Sync questions from Supabase if configured, otherwise returns local questions
   */
  public async fetchRemoteQuestions(): Promise<Question[]> {
    if (!this.isConfigured) {
      return [];
    }

    try {
      // In future: client.from('questions').select('*')
      const response = await fetch(`${this.url}/rest/v1/questions?select=*`, {
        headers: {
          apikey: this.anonKey || '',
          Authorization: `Bearer ${this.anonKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Supabase query failed: ${response.statusText}`);
      }

      const data = await response.json();
      return data as Question[];
    } catch (err) {
      console.warn('Failed to fetch from Supabase, staying in offline/local mode', err);
      return [];
    }
  }
}

export const supabaseService = new SupabaseService();

