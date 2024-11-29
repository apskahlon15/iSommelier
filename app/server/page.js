import { setupServer } from 'msw/node';
import { rest } from 'msw';

// Setup the mock server to handle API requests
export const server = setupServer(
  // Here we're mocking the GET request to /api/wines
  rest.get('/api/wines', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: 'Wine A',
          region: 'Region A',
          volume: '750ml',
          alcohol_content: '10',
          sugar_content: "",
          temperature: "",
          flavour: "",
          matching: "",
          type: "White",
          description: ""
        },
        {
          id: 2,
          title: 'Wine B',
          region: 'Region B',
          volume: '750ml',
          alcohol_content: '10',
          sugar_content: "",
          temperature: "",
          flavour: "",
          matching: "",
          type: "White",
          description: ""
        }
      ])
    );
  })
);
