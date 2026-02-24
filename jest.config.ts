import type { Config } from 'jest';

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    coverageReporters: ["text", "lcov", "html"],
};

export default config;