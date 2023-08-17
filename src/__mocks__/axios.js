import { vi } from "vitest";

const mockedUsers = {
  data: [
    {
      id: 1,
      name: "john",
    },
  ],
};

const axios = {
  get: vi.fn().mockResolvedValue(mockedUsers),
};

export default axios;
