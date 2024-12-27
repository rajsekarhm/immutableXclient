const server_config: { host: string; port: number } = {
  host: "http://127.0.0.1",
  port: 8080,
};

const BASE_ENDPOINT_V1: string = `${server_config.host}:${server_config.port}/api/v1`;

export { server_config };

export default BASE_ENDPOINT_V1;
