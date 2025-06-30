
interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private isEnabled = typeof window !== 'undefined';

  track(event: AnalyticsEvent) {
    if (!this.isEnabled) return;

    this.events.push({
      ...event,
      timestamp: Date.now()
    } as any);

    console.log('Analytics Event:', event);

    // In a real implementation, you'd send this to your analytics service
    // Example: gtag('event', event.action, { event_category: event.category });
  }

  trackPageView(path: string) {
    this.track({
      event: 'page_view',
      category: 'navigation',
      action: 'view',
      label: path
    });
  }

  trackUserInteraction(element: string, action: string) {
    this.track({
      event: 'user_interaction',
      category: 'engagement',
      action,
      label: element
    });
  }

  trackQuoteRequest(service: string) {
    this.track({
      event: 'quote_request',
      category: 'conversion',
      action: 'request_quote',
      label: service
    });
  }

  getEvents() {
    return this.events;
  }
}

export const analytics = new Analytics();
