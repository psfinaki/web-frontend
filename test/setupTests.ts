// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

import { waitFor } from "@testing-library/react";
// import * as Sentry from "@sentry/nextjs";
import mediaQuery from "css-mediaquery";
import sentryTestkit from "sentry-testkit";
import i18n from "test/i18n";

import user from "./fixtures/defaultUser.json";

jest.mock("service");
jest.mock("next/dist/client/router", () => require("next-router-mock"));

jest.setTimeout(15000);

global.defaultUser = user;
global.localStorage = createLocalStorageMock();

const { testkit, sentryTransport } = sentryTestkit();
global.testKit = testkit;

beforeAll(() => {
  /// TODO: Fix sentry in tests
  // Sentry.init({
  //   dsn: "https://testKey@o782870.ingest.sentry.io/0",
  //   transport: sentryTransport,
  // });
});

beforeEach(async () => {
  testkit.reset();
  await waitFor(() => {
    expect(i18n.isInitialized).toBe(true);
  });
});

afterEach(() => {
  global.localStorage.clear();
  jest.restoreAllMocks();
});

Element.prototype.scroll = () => {};
Element.prototype.scrollIntoView = jest.fn();
window.scroll = jest.fn();
//below required by maplibre-gl
window.URL.createObjectURL = jest.fn();
window.matchMedia = createMatchMedia(window.innerWidth);

declare global {
  var defaultUser: typeof user;
  var testKit: sentryTestkit.Testkit;
}

function createLocalStorageMock() {
  return {
    clear() {
      this.store = {};
    },

    getItem(key: string) {
      return this.store[key] || null;
    },

    key(index: number) {
      return this.store[Object.keys(this.store)[index]];
    },

    get length() {
      return Object.keys(this.store).length;
    },

    removeItem(key: string) {
      delete this.store[key];
    },

    setItem(key: string, value: string) {
      this.store[key] = value;
    },

    store: {} as Record<string, string>,
  };
}

function createMatchMedia(width: number) {
  return (query: string) => ({
    matches: mediaQuery.match(query, { width }),
    media: "screen",
    addListener: jest.fn(),
    removeListener: jest.fn(),
    onchange: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  });
}
