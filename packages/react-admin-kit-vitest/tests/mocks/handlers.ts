import { http, HttpResponse } from 'msw';

export const handlers = [
  // Mock file upload endpoint
  http.post('/upload', () => {
    return HttpResponse.json(
      { data: { id: 'abc-123' } },
      { status: 201 }
    );
  }),
];
