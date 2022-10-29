import { DefaultBodyType, MockedRequest, RestHandler, setupWorker } from "msw";

export const mswMock = (
  handler: RestHandler<MockedRequest<DefaultBodyType>>
) => {
  setupWorker(handler).start({
    onUnhandledRequest: "bypass",
  });
};
